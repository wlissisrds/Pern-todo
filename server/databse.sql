/*comandos aplicados diretamente ao baco de dados*/
CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)  
);