# Usamos

-npm install nodemon -> para restartar o servidor sempre que houver alterações
- npm init -> iniciar um projeto com nodejs
- npm i cors express pg
    - cors -> permite que diferentes aplicativos de dominio interajem entre si.
    - express -> permite criar um servidor em nodejs.
    - pg é o banco de dados postgres

# Comandos para criar banco de dados e tabela
CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)  
);

#
