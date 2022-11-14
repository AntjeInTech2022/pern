-- Post in Mac terminal:
-- REMINDER: download uuid-ossp extension
CREATE TABLE users(
    pid uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    profile_header VARCHAR(500),
    profile_description VARCHAR(500)
);

    

-- insert fake users
-- note: it has to be in single quotes ''
INSERT INTO users(user_name,user_email, user_password) VALUES ('Antje','test@test.com','pjotr1701');

-- test=# 
INSERT INTO users_hosts(user_name) VALUES ('Antje'); -- will automatically generate a new pid
SELECT * FROM users_hosts;
UPDATE users_hosts SET user_name = ('Chris')  WHERE pid = ('3'); 