create database bd1;
use bd1;

CREATE TABLE articulos (
	codigo int AUTO_INCREMENT,
    descripcion varchar(50),
    precio float,
    PRIMARY KEY (codigo)
)

select * from articulos;