CREATE table houses (
   	id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
  );


INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent)
VALUES ('VU', '123 Main Street', 'Austin', 'TX', '78660',
         'https://i.kinja-img.com/gawker-media/image/upload/s--bIV3xkEm--/c_scale,f_auto,fl_progressive,q_80,w_800/jsprifdd1gmfy7e7nola.jpg',
         '2400', '700');
         
DELETE FROM houses
WHERE id = $1;