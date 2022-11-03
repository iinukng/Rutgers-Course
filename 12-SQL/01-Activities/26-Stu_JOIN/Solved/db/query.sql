SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

<<<<<<< HEAD
-- With alias 'AS'
SELECT b.book_name AS name, p.price AS price
FROM favorite_books AS b
JOIN book_prices AS p ON b.book_price = p.id;

-- Simplied by removing 'AS' keyword
SELECT b.book_name name, p.price price
FROM favorite_books b
JOIN book_prices p ON b.book_price = p.id;

=======
>>>>>>> c23c201d25b00e8a196eaf1a55b6397b4a013f31
