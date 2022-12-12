-- Post in Mac terminal:
-- schmidtan@MBP-von-Antje ~ % psql -U postgres (connect to Postgres)
-- postgres=# \l  (shows all databases in Postgres)
-- postgres=# \c test (You are now connected to database "test" as user "postgres".)
-- test=# \dt (show all tables inside of db 'test')
-- test=# \d+ users (shows table properties)
-- test=# drop table users;
CREATE TABLE public.users2
(
    pid uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL UNIQUE, 
    profile_header VARCHAR(2083),
    profile_description VARCHAR(2083),
    registration_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    profile_picture_url VARCHAR(2083),
    cover_picture_url VARCHAR(2083),
    cover_picture_source VARCHAR(2083),
    PRIMARY KEY(pid)
)

WITH (
    OIDS = FALSE
);

ALTER TABLE IF EXISTS public.users2
    OWNER to xsjrqcfe;

-- REMINDER: download uuid-ossp extension
CREATE TABLE users(
    pid uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL UNIQUE, 
    profile_header VARCHAR(2083),
    profile_description VARCHAR(2083),
    registration_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    profile_picture_url VARCHAR(2083),
    cover_picture_url VARCHAR(2083),
    cover_picture_source VARCHAR(2083),
    PRIMARY KEY(pid)
);

--  ElephantSQL Browser:
INSERT INTO users 
(pid, user_name, user_email, user_password, profile_header, profile_description, registration_date, profile_picture_url, cover_picture_url, cover_picture_source) 
VALUES ('03ed4c8d-ce6f-4651-ad94-cce8a1025709','Leonardo Gilbert','leonardo.gilbert@example.com','$2b$10$SmQgC/OdsydwryOUwLsx2O0xoaG96H1Lf4x3mmGJ0gzI6YSj2h9li','I see video and web as a way to reach and inspire people.','Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l', '2022-11-30','https://uiuxjobsboard.com/random-users-generator/images/imageM18.jpg', 'https://images.unsplash.com/photo-1583673354352-9504815ae8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://unsplash.com/photos/Q5rMCWwspxc');

INSERT INTO users 
(pid, user_name, user_email, user_password, profile_header, profile_description, registration_date, profile_picture_url, cover_picture_url, cover_picture_source) 
VALUES 
('0e21344f-bfe7-4e89-8eda-e7c05f50fc95',
'Robert Ross',
'robert.ross@fakemail.com',
'$2b$10$gneKhtRQuAOLiGoR2dbmQOP9ZXHXvCoIfcS3SQer5YSuIMpy6OkTq',
'I like coming up with big ideas and then bring them to life. Love good music.',
'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l', 
'2022-11-30 13:38:03.136828+01',
'https://uiuxjobsboard.com/random-users-generator/images/imageM18.jpg', 
'https://images.unsplash.com/photo-1508432116762-1f883098ed41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80', 
'https://unsplash.com/photos/XlTEP0u29L4');
						
		


ALTER TABLE users
DROP COLUMN registration_date;

ALTER TABLE users
ADD registration_date TIMESTAMPTZ NOT NULL DEFAULT NOW();

ALTER TABLE users
ADD profile_picture_url VARCHAR(2083);

ALTER TABLE users
ADD cover_picture_url VARCHAR(2083);

ALTER TABLE users
ADD cover_picture_source VARCHAR(2083);



CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;



CREATE TABLE IF NOT EXISTS messages (
    mssg_id SERIAL PRIMARY KEY NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    sender_id UUID NOT NULL,
    receiver_id UUID NOT NULL,
    sender_name VARCHAR(255) NOT NULL,
    receiver_name VARCHAR(255) NOT NULL,
    mssg_title VARCHAR(255) NOT NULL,
    mssg_text VARCHAR(2083) NOT NULL,
   FOREIGN KEY (sender_id) REFERENCES users(pid),
   FOREIGN KEY (receiver_id) REFERENCES users(pid)
);

INSERT INTO messages 
( mssg_id, created_at, sender_id, receiver_id, sender_name, receiver_name, mssg_title , mssg_text) 
VALUES 
('15',
'2022-12-01 15:54:47.508629+01',
'0e21344f-bfe7-4e89-8eda-e7c05f50fc95',
'e43c29d2-996a-4e73-983c-d2b766bd3efb',
'Darrell T. Torres',
'Simon A. Winther',
'Hi', 
'kkkkk')

-- ALTER TABLE comments ADD CONSTRAINT commentsfk FOREIGN KEY (userid) REFERENCES test (uid) ON DELETE CASCADE;
-- ALTER TABLE

ALTER TABLE messages
ADD receiver_name VARCHAR(255);

CREATE TABLE IF NOT EXISTS favorites (
    favorites_id SERIAL PRIMARY KEY NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    sender_id UUID NOT NULL,
    user_id UUID NOT NULL,
   FOREIGN KEY (sender_id) REFERENCES users(pid),
   FOREIGN KEY (user_id) REFERENCES users(pid)
);


INSERT INTO favorites 
( favorites_id, created_at, sender_id, user_id) 
VALUES 
('1',
'2022-12-01 15:54:47.508629+01',
'e43c29d2-996a-4e73-983c-d2b766bd3efb',
'0e21344f-bfe7-4e89-8eda-e7c05f50fc95'
)

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

--  SHELL TERMINAL:
DELETE FROM messages WHERE sender_id = 'e43c29d2-996a-4e73-983c-d2b766bd3efb' AND mssg_id = 21
DELETE FROM messages WHERE sender_id = ('e43c29d2-996a-4e73-983c-d2b766bd3efb') AND mssg_id = 21
DELETE FROM messages WHERE sender_id = ('e43c29d2-996a-4e73-983c-d2b766bd3efb') AND mssg_id = (21)
-- IN PgAdmin:
DELETE FROM messages WHERE sender_id = 'b44bd4e7-8c2a-4010-aab8-25bd652da84b' AND mssg_id = 21



