CREATE TABLE account(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- 插入10*10*10*10条数据，10为sample行数
INSERT INTO account(name)
SELECT
  CONCAT('NAME' , @rownum := @rownum + 1)
FROM
  sample AS s1,
  sample AS s2,
  sample AS s3,
  sample AS s4,
  (SELECT @rownum := 0) AS v