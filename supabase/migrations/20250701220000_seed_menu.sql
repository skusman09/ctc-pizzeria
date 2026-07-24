-- Seed categories
INSERT INTO public.categories (id, name, sort_order) VALUES
  ('11111111-0000-0000-0000-000000000001', 'French Fries', 1),
  ('11111111-0000-0000-0000-000000000002', 'Maggi', 2),
  ('11111111-0000-0000-0000-000000000003', 'Pizza', 3),
  ('11111111-0000-0000-0000-000000000004', 'Burgers', 4),
  ('11111111-0000-0000-0000-000000000005', 'Starters & Sides', 5),
  ('11111111-0000-0000-0000-000000000006', 'Seafood', 6),
  ('11111111-0000-0000-0000-000000000007', 'Desserts', 7),
  ('11111111-0000-0000-0000-000000000008', 'Momos', 8),
  ('11111111-0000-0000-0000-000000000009', 'Combos', 9),
  ('11111111-0000-0000-0000-000000000010', 'Beverages', 10)
ON CONFLICT (id) DO NOTHING;

-- Seed menu items
INSERT INTO public.menu_items (id, name, description, price, category_id, image_url, is_available) VALUES
  -- French Fries
  ('aaaaaaaa-0000-0000-0000-000000000001', 'Salt Fries', 'Crispy golden fries seasoned with salt (200g)', 109, '11111111-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000002', 'Plain Melting Cheese Fries', 'Golden fries topped with melted cheese (200g)', 149, '11111111-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1630384060421-cb20d0e136d3?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000003', 'Barbeque Peri Peri Melting Cheese Fries', 'Spicy peri peri fries with BBQ sauce and melted cheese', 179, '11111111-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000004', 'Peri Peri Masala Fries', 'Crispy fries with spicy peri peri masala seasoning (200g)', 139, '11111111-0000-0000-0000-000000000001', 'https://images.unsplash.com/photo-1576107232684-1279f390b638?w=500&h=300&fit=crop', true),

  -- Maggi
  ('aaaaaaaa-0000-0000-0000-000000000005', 'Vegetable Masala Maggi', 'Spicy and flavorful Maggi noodles with fresh vegetables', 139, '11111111-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000006', 'Cheese Vegetable Masala Maggi', 'Vegetable masala Maggi topped with melted cheese', 149, '11111111-0000-0000-0000-000000000002', 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=300&fit=crop', true),

  -- Non-Veg Pizza
  ('aaaaaaaa-0000-0000-0000-000000000007', 'Mexican Chicken Cheese Pizza', 'Delicious Mexican-style chicken pizza with melted cheese', 179, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000008', 'Mexican Chicken Tikka Cheese Pizza', 'Mexican chicken tikka with cheese and authentic spices', 189, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000009', 'Peri Peri Spicy Chicken Tikka Pizza', 'Spicy peri peri chicken tikka pizza with authentic flavors', 189, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000010', 'Peri Peri Spicy Chicken Cheese Pizza', 'Spicy peri peri chicken with melted cheese and herbs', 179, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000011', 'Chicken Tikka Cheese Pizza', 'Classic chicken tikka with melted cheese and spices', 179, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000012', 'Chicken Cheese Pizza', 'Simple yet delicious chicken and cheese pizza', 169, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000013', 'Tandoori Chicken Tikka Cheese Pizza', 'Tandoori chicken tikka with cheese and Indian spices', 199, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000014', 'Tandoori Chicken Cheese Pizza', 'Tandoori chicken with melted cheese and aromatic spices', 189, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000015', 'Tandoori Momos Chicken Pizza', 'Unique fusion of tandoori momos and chicken on pizza', 209, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000016', 'Chicken Cheese Pizza [9", 8 pcs]', 'Large 9-inch chicken cheese pizza cut in 8 pieces', 319, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&h=300&fit=crop', true),

  -- Veg Pizza
  ('aaaaaaaa-0000-0000-0000-000000000017', 'Tandoor Paneer Veg Cheese Pizza', 'Tandoori paneer with vegetables and melted cheese', 179, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000018', 'Tandoor Veg Cheese Pizza', 'Tandoori vegetables with melted cheese and spices', 169, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000019', 'Veg Cheese Pizza', 'Fresh mixed vegetables with melted cheese', 159, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000020', 'Mixed Veg Loaded Cheese Pizza', 'Loaded with mixed vegetables and melted cheese', 179, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000021', 'Classic Margherita Cheese Pizza', 'Traditional margherita with fresh basil and mozzarella', 179, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000022', 'Double Cheese Classic Margherita', 'Classic margherita with double cheese topping', 219, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000023', 'Sweet Corn Pizza', 'Sweet corn kernels with cheese and herbs', 169, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000024', 'Margherita Cheese Pizza [9", 8 pcs]', 'Large 9-inch margherita pizza cut in 8 pieces', 299, '11111111-0000-0000-0000-000000000003', 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=300&fit=crop', true),

  -- Veg Burgers
  ('aaaaaaaa-0000-0000-0000-000000000025', 'Veg Burger', 'Fresh vegetable patty with lettuce and tomato', 109, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000026', 'Veg Cheese Burger', 'Vegetable patty with melted cheese and fresh veggies', 119, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000027', 'Chilli Potato Veg Burger', 'Spicy chilli potato patty with vegetables and sauce', 119, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1606755962773-d324e2dacd04?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000028', 'Chilli Potato Veg Cheese Burger', 'Spicy chilli potato patty with melted cheese', 139, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000029', 'Tandoori Veg Burger', 'Tandoori-spiced vegetable patty with Indian flavors', 109, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000030', 'Tandoori Veg Cheese Burger', 'Tandoori vegetable patty with melted cheese', 119, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop', true),

  -- Chicken Burgers
  ('aaaaaaaa-0000-0000-0000-000000000031', 'Chicken Burger', 'Juicy grilled chicken patty with fresh vegetables', 99, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000032', 'Chicken Cheese Burger', 'Grilled chicken patty with melted cheese', 119, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000033', 'Tandoori Chicken Burger', 'Tandoori-spiced chicken patty with Indian flavors', 99, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000034', 'Tandoori Chicken Cheese Burger', 'Tandoori chicken patty with melted cheese', 119, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000035', 'Spicy Chicken Burger', 'Spicy chicken patty with hot sauce and peppers', 99, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000036', 'Spicy Chicken Cheese Burger', 'Spicy chicken patty with cheese and hot sauce', 199, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1513185158878-8d064c2de2a2?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000037', 'Mexican Chicken Burger', 'Mexican-style chicken patty with salsa and peppers', 99, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000038', 'Mexican Chicken Cheese Burger', 'Mexican chicken patty with melted cheese and salsa', 119, '11111111-0000-0000-0000-000000000004', 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=300&fit=crop', true),

  -- Starters
  ('aaaaaaaa-0000-0000-0000-000000000039', 'Chicken Cheese Balls', 'Crispy chicken cheese balls - 6 pieces', 139, '11111111-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000040', 'Chicken Popcorn', 'Bite-sized crispy chicken pieces - 15 pieces', 169, '11111111-0000-0000-0000-000000000005', 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=300&fit=crop', true),

  -- Seafood
  ('aaaaaaaa-0000-0000-0000-000000000041', 'Fish Fries', 'Crispy fish fries - 15 pieces', 169, '11111111-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1544943545-489136e4b7b0?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000042', 'Fish Burger', 'Fresh fish patty with vegetables and sauce', 149, '11111111-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000043', 'Fish Cheese Burger', 'Fresh fish patty with melted cheese', 189, '11111111-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000044', 'Fish Popcorn', 'Bite-sized crispy fish pieces - 25 pieces', 169, '11111111-0000-0000-0000-000000000006', 'https://images.unsplash.com/photo-1544943545-489136e4b7b0?w=500&h=300&fit=crop', true),

  -- Desserts
  ('aaaaaaaa-0000-0000-0000-000000000045', 'Brownie Molten Choco Lava', 'Warm chocolate brownie with molten center (100g)', 99, '11111111-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000046', 'Mawa Rabdi', 'Traditional Indian sweet dessert (100g)', 99, '11111111-0000-0000-0000-000000000007', 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&h=300&fit=crop', true),

  -- Momos
  ('aaaaaaaa-0000-0000-0000-000000000047', 'Veg Steamed Momos', 'Fresh vegetable momos steamed to perfection - 8 pieces', 89, '11111111-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000048', 'Chicken Steamed Momos', 'Juicy chicken momos steamed to perfection - 8 pieces', 109, '11111111-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000049', 'Veg Fried Momos', 'Crispy fried vegetable momos with spicy sauce - 8 pieces', 99, '11111111-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000050', 'Chicken Fried Momos', 'Crispy fried chicken momos with spicy sauce - 8 pieces', 119, '11111111-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000051', 'Paneer Momos', 'Fresh paneer momos with Indian spices - 8 pieces', 109, '11111111-0000-0000-0000-000000000008', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=300&fit=crop', true),

  -- Combos
  ('aaaaaaaa-0000-0000-0000-000000000052', 'Chicken Burger + Green Apple Mojito', 'Juicy chicken burger with refreshing green apple mojito', 169, '11111111-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000053', 'Veg Pizza + Cold Drink', '7-inch veg pizza with your choice of cold drink', 199, '11111111-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000054', 'Chicken Pizza + Green Apple Mojito', '7-inch chicken pizza with refreshing green apple mojito', 219, '11111111-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000055', '2 Veg Burgers + Fries + 2 Cold Drinks', 'Perfect sharing combo with 2 veg burgers, fries and drinks', 299, '11111111-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000056', 'Family Pizza Deal', 'Large pizza + garlic bread + 2 cold drinks', 399, '11111111-0000-0000-0000-000000000009', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop', true),

  -- Beverages
  ('aaaaaaaa-0000-0000-0000-000000000057', 'Green Apple Mojito', 'Refreshing green apple mojito with mint (300ml)', 79, '11111111-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000058', 'Lemon Mint Cooler', 'Fresh lemon and mint cooler (300ml)', 69, '11111111-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000059', 'Masala Chai', 'Traditional Indian spiced tea', 29, '11111111-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000060', 'Cold Coffee', 'Chilled coffee with cream and ice', 89, '11111111-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=300&fit=crop', true),
  ('aaaaaaaa-0000-0000-0000-000000000061', 'Fresh Lime Water', 'Refreshing lime water with mint', 49, '11111111-0000-0000-0000-000000000010', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=300&fit=crop', true)
ON CONFLICT (id) DO NOTHING;
