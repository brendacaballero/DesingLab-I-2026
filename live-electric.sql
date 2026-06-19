
-- CREACION DE LAS TABLAS --
CREATE TABLE `inventario` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cantidad INTEGER NOT NULL,
  motocicleta_id INTEGER NOT NULL,
  color_id INTEGER NOT NULL
);

CREATE TABLE `colores` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

CREATE TABLE `intereses` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  visita_id INTEGER NOT NULL,
  motocicleta_id INTEGER NOT NULL
);

CREATE TABLE `visitas` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comprador_id INTEGER NOT NULL,
  vendedor_inicial_id INTEGER NOT NULL,
  presupuesto_min DECIMAL(10, 2) NULL,
  presupuesto_max DECIMAL(10, 2) NULL,
  estado ENUM ('Primera', 'En Proceso', 'Vendido', 'Deprecado') NOT NULL DEFAULT 'Primera',
  observaciones VARCHAR(255) NULL,
  fecha_creacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  actualizado_por INT NOT NULL
);

CREATE TABLE `motocicletas` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  modelo VARCHAR(255) NOT NULL,
  marca VARCHAR(255) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE `compradores` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  ci VARCHAR(255) NOT NULL UNIQUE,
  celular VARCHAR(255) NOT NULL,
  procedencia VARCHAR(255) NOT NULL
);

CREATE TABLE `vendedores` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  rol ENUM ('Vendedor', 'Administrador') NOT NULL DEFAULT 'Vendedor'
);

-- ANIADIENDO SUS RELACIONES CON SUS LLAVES FORANEAS RESPECTIVAMENTE --
ALTER TABLE `inventario` ADD CONSTRAINT `fk_colores_inventario` FOREIGN KEY (color_id) REFERENCES `colores` (id);
ALTER TABLE `inventario` ADD CONSTRAINT `fk_motocicletas_inventario` FOREIGN KEY (motocicleta_id) REFERENCES `motocicletas` (id);
ALTER TABLE `visitas` ADD CONSTRAINT `fk_compradores_visitas` FOREIGN KEY (comprador_id) REFERENCES `compradores` (id);
ALTER TABLE `intereses` ADD CONSTRAINT `fk_visitas_intereses` FOREIGN KEY (visita_id) REFERENCES `visitas` (id);
ALTER TABLE `visitas` ADD CONSTRAINT `fk_vendedores_visitas` FOREIGN KEY (vendedor_inicial_id) REFERENCES `vendedores` (id);
ALTER TABLE `intereses` ADD CONSTRAINT `fk_motocicletas_intereses` FOREIGN KEY (motocicleta_id) REFERENCES `motocicletas` (id);

-- INSERTANDO DATOS DE PRUEBA A LAS TABLAS --
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (1, 'Hannie', 'Cinnamond', '5588754', '(591) 1200007', 'Visita');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (2, 'Hiram', 'Hollyland', '1226646', '(591) 8564874', 'TikTok');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (3, 'Roxie', 'Leghorn', '8768127', '(591) 8669127', 'Facebook');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (4, 'Quintana', 'Jeppe', '4386593', '(591) 3034514', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (5, 'Doris', 'Jacobsohn', '1051639', '(591) 9795313', 'Whatsapp');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (6, 'Lyda', 'Bennion', '2554088', '(591) 2231137', 'TikTok');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (7, 'Reilly', 'Romayn', '9491278', '(591) 4724263', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (8, 'Travers', 'Cluely', '5694023', '(591) 3468566', 'Visita');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (9, 'Tedman', 'Leatherborrow', '9691274', '(591) 9110506', 'Visita');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (10, 'Florencia', 'Baldazzi', '9403429', '(591) 8252489', 'Whatsapp');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (11, 'Nessi', 'Orrobin', '8061264', '(591) 7923379', 'Visita');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (12, 'Nolie', 'Ornelas', '8475460', '(591) 9534856', 'Whatsapp');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (13, 'Nancy', 'Blaine', '3935589', '(591) 3218633', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (14, 'Harwell', 'Fowlds', '6392291', '(591) 2443245', 'Facebook');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (15, 'Leslie', 'West', '8072378', '(591) 9379974', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (16, 'Zacherie', 'Espadero', '3299610', '(591) 7377824', 'Whatsapp');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (17, 'Juli', 'Raiment', '8164358', '(591) 9963366', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (18, 'Meriel', 'Beadles', '9314892', '(591) 6820020', 'Facebook');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (19, 'Mariya', 'Ellington', '1251036', '(591) 9692912', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (20, 'Lazar', 'Atyeo', '6017125', '(591) 2329527', 'TikTok');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (21, 'Raye', 'Fasset', '3001228', '(591) 6185914', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (22, 'Minna', 'McNee', '5696922', '(591) 5137503', 'Facebook');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (23, 'Trevar', 'Marskell', '1441978', '(591) 7837917', 'Visita');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (24, 'Ethyl', 'Fawcitt', '2406609', '(591) 6570614', 'Instagram');
INSERT INTO compradores (id, nombres, apellidos, ci, celular, procedencia) VALUES (25, 'Angele', 'Glassup', '5380508', '(591) 8914865', 'Facebook');

INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (1, 'Maurene', 'Walshe', 'mwalshe0@jalbum.net', 'eC5/YGAi)', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (2, 'Ann-marie', 'Buttrum', 'abuttrum1@guardian.co.uk', 'hQ9`l7I7TE!|x7', 'Administrador');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (3, 'Loralee', 'Fawdry', 'lfawdry2@google.com.au', 'rI4}QQ@~l?w@|', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (4, 'Avivah', 'Shakshaft', 'ashakshaft3@1und1.de', 'mZ2,/QhiaJ`!Wt', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (5, 'Dorelle', 'Burnup', 'dburnup4@topsy.com', 'xS8<T"EX', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (6, 'Heather', 'Saturley', 'hsaturley5@ebay.com', 'yS9$C_vA5gQ)|%C', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (7, 'Tina', 'Popple', 'tpopple6@usatoday.com', 'kE2+SQye1qkO', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (8, 'Janot', 'Clausewitz', 'jclausewitz7@ted.com', 'eL5''i@uZzg$y', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (9, 'Colly', 'Ruller', 'cruller8@lulu.com', 'lD7,5p~{Fyt', 'Vendedor');
INSERT INTO vendedores (id, nombres, apellidos, correo, password, rol) VALUES (10, 'Ermengarde', 'Clarey', 'eclarey9@eepurl.com', 'tS7(sQYd0UmSi@U', 'Vendedor');

INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (1, 'Sport Z-1', 'TED', 1755);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (2, 'Sport Z-2', 'TED', 1751);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (3, 'Sport Z-3', 'TED', 4961);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (4, 'Classic X-1', 'TED', 903);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (5, 'Classic X-2', 'TED', 3917);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (6, 'Classic X-3', 'TED', 3980);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (7, 'Classic X-4', 'TED', 1898);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (8, 'Classic X-5', 'TED', 3443);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (9, 'Cargo C-1', 'TED', 1986);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (10, 'Cargo C-2', 'TED', 1750);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (11, 'Cargo C-3', 'TED', 976);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (12, 'Triple T-1', 'TED', 4010);
INSERT INTO motocicletas (id, modelo, marca, precio) VALUES (13, 'Triple T-2', 'TED', 4508);

INSERT INTO colores (id, nombre) VALUES(1, 'Rojo');
INSERT INTO colores (id, nombre) VALUES(2, 'Blanco');
INSERT INTO colores (id, nombre) VALUES(3, 'Negro');
INSERT INTO colores (id, nombre) VALUES(4, 'Verdeoliva');
INSERT INTO colores (id, nombre) VALUES(5, 'Beige');
INSERT INTO colores (id, nombre) VALUES(6, 'Gris');
INSERT INTO colores (id, nombre) VALUES(7, 'Cafe');
INSERT INTO colores (id, nombre) VALUES(8, 'Azul');
INSERT INTO colores (id, nombre) VALUES(9, 'Celeste');


INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(1, 4, 1, 1);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(2, 6, 2, 2);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(3, 2, 2, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(4, 3, 3, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(5, 6, 3, 4);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(6, 3, 4, 5);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(7, 6, 4, 4);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(8, 10, 5, 2);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(9, 6, 5, 9);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(10, 4, 5, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(11, 7, 5, 7);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(12, 3, 5, 1);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(13, 9, 5, 8);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(14, 6, 5, 6);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(15, 3, 6, 2);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(16, 6, 6, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(17, 0, 6, 7);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(18, 3, 7, 2);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(19, 0, 7, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(20, 8, 7, 6);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(21, 1, 8, 2);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(22, 13, 8, 1);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(23, 3, 8, 9);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(24, 8, 8, 4);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(25, 0, 8, 7);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(26, 10, 9, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(27, 5, 10, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(28, 3, 11, 8);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(29, 3, 11, 1);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(30, 3, 12, 6);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(31, 4, 12, 3);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(32, 5, 12, 7);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(33, 3, 13, 5);
INSERT INTO inventario (id, cantidad, motocicleta_id, color_id) VALUES(34, 2, 13, 9);

INSERT INTO visitas
(id, comprador_id, vendedor_inicial_id, presupuesto_min, presupuesto_max, estado, observaciones, fecha_creacion, fecha_actualizacion, actualizado_por)
VALUES(1, 5, 7, 1500, 2000, 'Primera', 'El cliente regresara', '2026-06-01 14:30:00', '2026-06-01 14:30:00', 5);
INSERT INTO visitas
(id, comprador_id, vendedor_inicial_id, presupuesto_min, presupuesto_max, estado, observaciones, fecha_creacion, fecha_actualizacion, actualizado_por)
VALUES(2, 1, 10, 3000, 3000, 'En Proceso', 'El cliente se intereso mas por el modelo Classic X-5', '2026-06-02 09:30:00', '2026-06-02 09:30:00', 1);

INSERT INTO intereses (id, visita_id, motocicleta_id) VALUES(1, 1, 11);
INSERT INTO intereses (id, visita_id, motocicleta_id) VALUES(2, 1, 4);
INSERT INTO intereses (id, visita_id, motocicleta_id) VALUES(3, 2, 8);
