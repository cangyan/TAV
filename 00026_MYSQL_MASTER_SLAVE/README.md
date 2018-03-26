# 查看master数据库状态
```mysql
show master status;
```


# 查看slave数据库状态
```mysql
show slave status;
```

# 从数据库配置主数据库信息
```mysql
CHANGE MASTER TO
    MASTER_HOST='database-master',
    MASTER_USER='root',
    MASTER_PASSWORD='pass',
    MASTER_LOG_FILE='mysql-bin.000004',
    MASTER_LOG_POS=120;
```

# 同步开始与结束
```mysql
start slave;
stop slave;
```

