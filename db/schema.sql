DROP DATABASE IF EXISTS c6zmu6o62dtm9w7q;

create database c6zmu6o62dtm9w7q;

use c6zmu6o62dtm9w7q;

create table burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);