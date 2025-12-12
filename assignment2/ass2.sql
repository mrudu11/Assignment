
--creating the user table
create table users(email varchar(20) not null primary key,password varchar(20),role enum('admin','student'));

--creating the courses table
create table courses(course_id int primary key,course_name varchar(20),description varchar(20),fees int,start_date date,end_date date,video_expire_days int);

--creating the student table
create table student(reg_no int primary key,name varchar(20),email varchar(20),course_id int,mobile_no int,profile_pic blob,foreign key (email) references users(email),foreign key (course_id) references courses(course_id));

--creating the video table
create table videos(video_id int primary key ,course_id int,title varchar(20),description varchar(50),youtube_url varchar(50),added_at date,foreign key (course_id) references courses(course_id));

--inserting data into the users
insert into users values('suresh@gmail.com','suresh','student');
insert into users values('mukesh@gmail.com','mukesh','student');
insert into users values('ganesh@gmail.com','ganesh','student');
insert into users values('rishi@gmail.com','rishi','admin');

--inserting data into the courses
insert into courses values(1,'MERN','full stack course',4000,'2025-12-09','2026-01-10',30);
insert into courses values(2,'GEN AI','course related to AI ',4000,'2025-12-09','2026-01-10',30);
insert into courses values(3,'WEB USING PYTHON','front end course',4000,'2025-12-09','2026-01-10',30);
insert into courses values(4,'JAVA','backend language',4000,'2025-12-09','2026-01-10',30);
insert into courses values(5,'DOTNET','backend language',4000,'2025-12-14','2026-01-10',30);

--inserting data into the student
insert into student(reg_no,name,email,course_id,mobile_no) values(101,'suresh','suresh@gmail.com',1,829262);
insert into student(reg_no,name,email,course_id,mobile_no) values(102,'mukesh','mukesh@gmail.com',1,23712);
insert into student(reg_no,name,email,course_id,mobile_no) values(103,'ganesh','ganesh@gmail.com',1,236216);

--inserting data into the video
insert into videos values(10,1,'MERN_1','1st lecture','https://youtu.be/02q9aAVv1NI','2025-12-11');
insert into videos values(11,1,'MERN_2','2nd lecture','https://youtu.be/02q9aAVv1NI','2025-12-12');
insert into videos values(12,1,'MERN_3','3rd lecture','https://youtu.be/02q9aAVv1NI','2025-12-13');

--write a sql query that will fetch all upcoming courses
select * from courses where start_date>current_date;

--write a sql query that will fetch all the registered students along with the course name 
select s.reg_no,s.name,s.email,s.mobile_no,s.course_id,c.course_name from student s inner join courses c on s.course_id=c.course_id;

--write an sql query to fetch the complete details of a student(based on their email) along with the details of the course they are enrolled in .
select s.reg_no,s.name,s.email,s.mobile_no,s.course_id,c.course_name,c.description,c.fees,c.start_date,c.end_date,c.video_expire_days from student s inner join courses c on s.course_id=c.course_id where s.email='suresh@gmail.com';

--write an sql query to retrive the course details and the list of non expired videos for a specific student using their email address.a video is consiered active (not expired ) if its added_at date plus the course's video_expire_days has not yet passed compared to current date.
--example :- a video added on 2025-01-01 with 30 video_expire_days remains active until 2025-01-31.
select c.course_id,c.course_name,c.start_date,c.end_date,c.video_expire_days,v.video_id,v.title,v.added_at from courses c inner join videos v on c.course_id = v.course_id inner join student s on c.course_id=s.course_id where date_add(v.added_at, interval c.video_expire_days day)>current_date() and s.email='suresh@gmail.com';
