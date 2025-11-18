USE users;

-- Exemple opcional
CREATE TABLE IF NOT EXISTS personas (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user'
);

INSERT INTO personas (name, password, role) VALUES 
('Ana', '123', 'admin'),
('Carlos', '123', 'user'),
('María', '123', 'user');