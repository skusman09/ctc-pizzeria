-- Migration to allow non-uuid menu_item_id in cart_items
-- Drop foreign key constraint and change column type to TEXT

-- 1. Drop FK if exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.table_constraints
    WHERE constraint_name = 'cart_items_menu_item_id_fkey'
      AND table_name = 'cart_items'
  ) THEN
    ALTER TABLE public.cart_items DROP CONSTRAINT cart_items_menu_item_id_fkey;
  END IF;
END $$;

-- 2. Change column type to TEXT
ALTER TABLE public.cart_items
  ALTER COLUMN menu_item_id TYPE text USING menu_item_id::text;
