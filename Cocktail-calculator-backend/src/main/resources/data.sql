-- Insert ingredients
INSERT INTO ingredients (name, description) VALUES ('Lime', 'Freshly squeezed');
INSERT INTO ingredients (name, description) VALUES ('Mint', 'Fresh');
INSERT INTO ingredients (name, description) VALUES ('Rum', 'White rum');
INSERT INTO ingredients (name, description) VALUES ('Simple syrup', 'Homemade 50/50');
INSERT INTO ingredients (name, description) VALUES ('Soda water', 'Chilled');

-- Insert cocktails
INSERT INTO cocktails (name, description) VALUES ('Mojito', 'Build up in the glass, cover with crushed ice, top with soda water, garnish with mint tulip');
INSERT INTO cocktails (name, description) VALUES ('Gin fizz', 'Dry shake then shake with ice, pour in a rock glass with ice cubes');
INSERT INTO cocktails (name, description) VALUES ('Atest', 'A refreshing cocktail with lime and mint');
INSERT INTO cocktails (name, description) VALUES ('Ctest', 'A refreshing cocktail with lime and mint');
INSERT INTO cocktails (name, description) VALUES ('Ztest', 'A refreshing cocktail with lime and mint');

-- Insert cocktail-ingredient relations
-- Mojito
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (1, 1, 3.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (1, 2, 6.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (1, 3, 5.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (1, 4, 2.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (1, 5, 10.0);

-- Gin fizz
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (2, 1, 3.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (2, 3, 5.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (2, 4, 2.0);
INSERT INTO cocktail_ingredients (cocktail_id, ingredient_id, quantity) VALUES (2, 5, 10.0);
