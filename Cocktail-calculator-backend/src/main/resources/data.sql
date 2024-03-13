-- Insert ingredients
INSERT INTO ingredients (id, name, description) VALUES ('9958f397-6d09-441e-8637-7fc81763bfe9','Lime', 'Freshly squeezed');
INSERT INTO ingredients (id, name, description) VALUES ('5958f397-6d09-441e-8637-7fc81763bfe9','Mint', 'Fresh');
INSERT INTO ingredients (id, name, description) VALUES ('6958f397-6d09-441e-8637-7fc81763bfe9','Rum', 'White rum');
INSERT INTO ingredients (id, name, description) VALUES ('7958f397-6d09-441e-8637-7fc81763bfe9','Simple syrup', 'Homemade 50/50');
INSERT INTO ingredients (id, name, description) VALUES ('8957f397-6d09-441e-8637-7fc81763bfe9','Soda water', 'Chilled');
INSERT INTO ingredients (id, name, description) VALUES ('9956f397-6d09-441e-8637-7fc81763bfe9','Lemon', 'Freshly squeezed');
INSERT INTO ingredients (id, name, description) VALUES ('9955f397-6d09-441e-8637-7fc81763bfe9','Gin', 'Freshly squeezed');
INSERT INTO ingredients (id, name, description) VALUES ('9958f397-6d09-441e-8637-7fc81663bfe9','Egg', 'White');



-- Insert cocktails
INSERT INTO cocktails (id, name, description) VALUES ('8858f397-6d09-441e-8637-7fc81763bfe9','Mojito', 'Build up in the glass, cover with crushed ice, top with soda water, garnish with mint tulip');
INSERT INTO cocktails (id, name, description) VALUES ('8758f397-6d09-441e-8637-7fc81763bfe9','Gin fizz', 'Dry shake then shake with ice, pour in a rock glass with ice cubes');
INSERT INTO cocktails (id, name, description) VALUES ('8658f397-6d09-441e-8637-7fc81763bfe9','Atest', 'A refreshing cocktail with lime and mint');
INSERT INTO cocktails (id, name, description) VALUES ('8558f397-6d09-441e-8637-7fc81763bfe9','Ctest', 'A refreshing cocktail with lime and mint');
INSERT INTO cocktails (id, name, description) VALUES ('8458f397-6d09-441e-8637-7fc81763bfe9','Ztest', 'A refreshing cocktail with lime and mint');

-- Insert cocktail-ingredient relations
-- Mojito
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8858f397-6d09-441e-8637-7fc81763bfe9', '9958f397-6d09-441e-8637-7fc81763bfe9', 3.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8858f397-6d09-441e-8637-7fc81763bfe9', '9958f397-6d09-441e-8637-7fc81763bfe9', 6.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8858f397-6d09-441e-8637-7fc81763bfe9', '5958f397-6d09-441e-8637-7fc81763bfe9', 5.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8858f397-6d09-441e-8637-7fc81763bfe9', '7958f397-6d09-441e-8637-7fc81763bfe9', 2.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8858f397-6d09-441e-8637-7fc81763bfe9', '8957f397-6d09-441e-8637-7fc81763bfe9', 10.0);

-- Gin fizz
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8758f397-6d09-441e-8637-7fc81763bfe9', '9956f397-6d09-441e-8637-7fc81763bfe9', 3.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8758f397-6d09-441e-8637-7fc81763bfe9', '9955f397-6d09-441e-8637-7fc81763bfe9', 5.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8758f397-6d09-441e-8637-7fc81763bfe9', '7958f397-6d09-441e-8637-7fc81763bfe9', 2.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES ('8758f397-6d09-441e-8637-7fc81763bfe9', '9958f397-6d09-441e-8637-7fc81663bfe9', 1);
