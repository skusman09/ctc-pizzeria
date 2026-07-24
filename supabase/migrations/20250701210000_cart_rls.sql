-- Add unique constraint so one user can only have one row per menu item
-- This enables the upsert (INSERT ... ON CONFLICT DO UPDATE) from the frontend
ALTER TABLE public.cart_items
  ADD CONSTRAINT cart_items_user_id_menu_item_id_key
  UNIQUE (user_id, menu_item_id);

-- Enable Row Level Security on cart_items
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Users can only see their own cart items
CREATE POLICY "Users can view their own cart" ON public.cart_items
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own cart items
CREATE POLICY "Users can insert their own cart" ON public.cart_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own cart items
CREATE POLICY "Users can update their own cart" ON public.cart_items
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own cart items
CREATE POLICY "Users can delete their own cart" ON public.cart_items
  FOR DELETE USING (auth.uid() = user_id);
