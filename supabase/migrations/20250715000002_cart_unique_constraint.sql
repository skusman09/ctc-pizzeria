-- Ensure the unique constraint exists for upserting cart items
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'cart_items_user_id_menu_item_id_key'
  ) THEN
    ALTER TABLE public.cart_items DROP CONSTRAINT cart_items_user_id_menu_item_id_key;
  END IF;
END $$;

ALTER TABLE public.cart_items
  ADD CONSTRAINT cart_items_user_id_menu_item_id_key
  UNIQUE (user_id, menu_item_id);
