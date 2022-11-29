-- Post in Mac terminal:
-- schmidtan@MBP-von-Antje ~ % psql -U postgres (connect to Postgres)
-- postgres=# \l  (shows all databases in Postgres)
-- postgres=# \c test (You are now connected to database "test" as user "postgres".)
-- test=# \dt (show all tables inside of db 'test')
-- test=# \d+ users (shows table properties)
-- test=# drop table users;

-- REMINDER: download uuid-ossp extension
CREATE TABLE users(
    pid uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL UNIQUE, 
    profile_header VARCHAR(500),
    profile_description VARCHAR(500),
    PRIMARY KEY(pid)
);

ALTER TABLE users
ADD registration_date DATE;

-- CREATE TABLE messages(
--     mssg_id SERIAL,
--     pid UUID,
--     mssg_text VARCHAR(255) NOT NULL,
--     pid as receiver_id,
--     pid as sender_id
--    PRIMARY KEY (mssg_id),
--    FOREIGN KEY (pid)
-- --    FOREIGN KEY (sender_id)
-- --    FOREIGN KEY (receiver_id)
--    REFERENCES users(pid)
-- );

CREATE TABLE chat_x(
    mssg_id SERIAL,
    pid as sender_id
    pid as receiver_id,
    mssg_text VARCHAR(255) NOT NULL,
   PRIMARY KEY (mssg_id),
   FOREIGN KEY (sender_id)
   FOREIGN KEY (receiver_id)
--    FOREIGN KEY (sender_id)
--    FOREIGN KEY (receiver_id)
   REFERENCES users(pid)
);

-- UPDATE messages SET mssg_text= 'test' WHERE pid = 'ba05e845-04a4-4590-8110-e5472b3ff9d9'
INSERT INTO messages (pid, mssg_text) VALUES ('ba05e845-04a4-4590-8110-e5472b3ff9d9', 'helloHello')




    
-- insert fake users
-- note: it has to be in single quotes ''
INSERT INTO users(user_name, user_email, user_password) VALUES ('Antje','test@test.com','pjotr1701');
INSERT INTO messages(pid, mssg_text) VALUES ('d0502ebb-5c47-4758-8489-72efca5d042c','hello');
-- test=# 
INSERT INTO users_hosts(user_name) VALUES ('Antje'); -- will automatically generate a new pid
SELECT * FROM users_hosts;
UPDATE users_hosts SET user_name = ('Chris')  WHERE pid = ('3'); 