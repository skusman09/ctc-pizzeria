
-- Add role column to profiles table if it doesn't exist
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role text DEFAULT 'customer' CHECK (role IN ('admin', 'customer'));

-- Add stock management to menu_items
ALTER TABLE public.menu_items ADD COLUMN IF NOT EXISTS stock_quantity integer DEFAULT 0;
ALTER TABLE public.menu_items ADD COLUMN IF NOT EXISTS low_stock_threshold integer DEFAULT 5;

-- Update discounts table structure
ALTER TABLE public.discounts 
  ADD COLUMN IF NOT EXISTS usage_count integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS is_percentage boolean DEFAULT true;

-- Create order status tracking
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'order_status_enum') THEN
    CREATE TYPE order_status_enum AS ENUM ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled');
  END IF;
END $$;

-- Update orders table
ALTER TABLE public.orders 
  ADD COLUMN IF NOT EXISTS order_status order_status_enum DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS customer_name text,
  ADD COLUMN IF NOT EXISTS customer_email text;

-- Create audit logs table for admin tracking
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  table_name text NOT NULL,
  record_id uuid,
  old_values jsonb,
  new_values jsonb,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on audit_logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Create policy for admins to view audit logs
CREATE POLICY "Admins can view audit logs" ON public.audit_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Create policy for admins to insert audit logs
CREATE POLICY "Admins can create audit logs" ON public.audit_logs
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Update RLS policies for admin access to menu_items
DROP POLICY IF EXISTS "Admins can manage menu items" ON public.menu_items;
CREATE POLICY "Admins can manage menu items" ON public.menu_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Update RLS policies for admin access to categories
DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;
CREATE POLICY "Admins can manage categories" ON public.categories
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Update RLS policies for admin access to orders
DROP POLICY IF EXISTS "Admins can update orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;

CREATE POLICY "Admins can manage all orders" ON public.orders
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'customer')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profiles
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
