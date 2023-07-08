### Desarrollados
Todos estos proyectos han sido desarrollados con: 

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/es)
[![AngularJS](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/manual/es/intro-whatis.php)
[![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com)
[![XAMPP](https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white)](https://www.apachefriends.org/es/index.html)
[![VS CODE](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com)

# Proyectos de Angular
## Proyectos
* proyecto001
* proyecto002
* proyecto003
* proyecto004
* proyecto005
* proyecto006
* proyecto008
* proyecto009
* proyecto010
* proyecto011
* proyecto012
* proyecto013
* proyecto016
## Trabajos
* proyecto002
* triangulo
* ejercicio5
* ejercicio010
* calculadoracientifica
* officedocs
* videogamescrud
## Nombre
Kevin Alexander López Duque
## Grupo
Grupo 69º UAM
## Instalación proyecto Officedocs
Instalar las siguientes librerías ántes de ejecutar el proyecto `officedocs`
  ```powershell
  npm install @syncfusion/ej2-angular-spreadsheet --save
  ```
  ```powershell
  npm install @syncfusion/ej2-angular-documenteditor --save
  ```

  ## Instalación proyecto videogamescrud
  Primero instalamos la extension de bootstrap con sus iconos:
  ```powershell
  npm install bootstrap jquery @popperjs/core
  ```
  ```powershell
  npm i bootstrap-icons
  ```
  Y a continuación importamos las rutas de bootstrap en `angular.json`:

  ```json
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
  ```

Ejecutar el siguiente comando `sql` para crear la base de datos:
  ```sql
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
  ```

