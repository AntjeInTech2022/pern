-- Post in Mac terminal:
CREATE TABLE users_hosts(
    pid SERIAL PRIMARY KEY,
    user_name VARCHAR(255)
);

-- test=# 
INSERT INTO users_hosts(user_name) VALUES ('Antje'); -- will automatically generate a new pid
SELECT * FROM users_hosts;
UPDATE users_hosts SET user_name = ('Chris')  WHERE pid = ('3'); 