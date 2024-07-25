CREATE DATABASE teste;
GO

USE teste;
GO

CREATE TABLE Usuario (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE
);
GO

INSERT INTO Usuario (Nome, Email) VALUES ('Alice Silva', 'alice.silva@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Bruno Costa', 'bruno.costa@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Carlos Oliveira', 'carlos.oliveira@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Daniela Martins', 'daniela.martins@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Eva Pereira', 'eva.pereira@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Fabio Almeida', 'fabio.almeida@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Gabriela Lima', 'gabriela.lima@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Henrique Souza', 'henrique.souza@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Isabela Santos', 'isabela.santos@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('João Pedro', 'joao.pedro@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Karen Rodrigues', 'karen.rodrigues@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Lucas Pereira', 'lucas.pereira@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Mariana Ferreira', 'mariana.ferreira@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Natalia Ribeiro', 'natalia.ribeiro@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Otavio Martins', 'otavio.martins@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Patricia Almeida', 'patricia.almeida@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Ricardo Santos', 'ricardo.santos@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Sofia Silva', 'sofia.silva@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Thiago Costa', 'thiago.costa@example.com');
INSERT INTO Usuario (Nome, Email) VALUES ('Ursula Gomes', 'ursula.gomes@example.com');
GO