-- Apaga tabelas existentes para garantir um começo limpo (opcional, bom para desenvolvimento)
DROP TABLE IF EXISTS itens_pedido;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS cadastros;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS catalogos;

-- Criação da Tabela de Usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

-- Criação da Tabela de Cadastros
CREATE TABLE cadastros (
    usuario_id INT PRIMARY KEY,
    logradouro VARCHAR(255),
    numero VARCHAR(50),
    complemento VARCHAR(255),
    bairro VARCHAR(255),
    telefone VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    CONSTRAINT fk_cadastro_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Criação da Tabela de Categorias
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da Tabela de Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(1000),
    preco DOUBLE PRECISION NOT NULL,
    categoria_id INT,
    CONSTRAINT fk_produto_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Criação da Tabela de Pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    preco_total DOUBLE PRECISION NOT NULL,
    status VARCHAR(50) NOT NULL,
    data_pedido TIMESTAMP NOT NULL,
    cep VARCHAR(10),
    codigo_protocolo VARCHAR(255),
    CONSTRAINT fk_pedido_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Criação da Tabela de Itens do Pedido
CREATE TABLE itens_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DOUBLE PRECISION NOT NULL,
    CONSTRAINT fk_itempedido_pedido FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    CONSTRAINT fk_itempedido_produto FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Criação da Tabela de Catálogos
CREATE TABLE catalogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);