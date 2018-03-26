CREATE TABLE sample(
  id INT(11) NOT NULL AUTO_INCREMENT,
  value INT(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO sample(value)
VALUES (1), (2), (3), (4), (5), (6), (7), (8), (9), (10);