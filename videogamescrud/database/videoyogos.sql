create database videoyogos;
use videoyogos;

create table roll (
	id_roll int auto_increment primary key,
    name_roll varchar(20)
);

INSERT INTO roll(id_roll, name_roll) VALUES (1,'admin');
INSERT INTO roll(id_roll, name_roll) VALUES (2,'standard');

create table users(
	id_user int auto_increment,
    username varchar(30) UNIQUE,
    pass varchar(20),
    primary key (id_user),
    id_roll int, foreign key (id_roll) references roll(id_roll)
);

INSERT INTO users (id_user, username, pass, id_roll) VALUES (NULL, 'root', 'root', 1);

create table videogames(
	id_game int auto_increment,
    game_name varchar(30) UNIQUE,
    author varchar(30),
    publish_date date,
    primary key (id_game),
    id_user int, foreign key (id_user) references users(id_user)
);