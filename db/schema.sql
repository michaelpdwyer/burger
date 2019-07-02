-- DROP DATABASE IF EXISTS burgers_db;

-- create database burgers_db;

use burgers_db;

create table burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);