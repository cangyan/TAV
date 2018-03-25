CREATE TABLE item(
  id INT(11) NOT NULL AUTO_INCREMENT,
  account_id INT(11) NOT NULL,
  master_item_id INT(11) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO item(account_id, master_item_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5);

-- 插入account_id从2~1000，每个id对应item5条数据
INSERT INTO item(account_id, master_item_id)
SELECT
  a.id,
  i.master_item_id
FROM
  item AS i,
  account AS a
WHERE
  i.account_id = 1
AND
  a.id BETWEEN 2 AND 1000