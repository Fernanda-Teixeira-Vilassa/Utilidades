Os comandos `CREATE` em SQL são usados para criar vários objetos de banco de dados, como tabelas, índices, visões, 
e muito mais. Aqui estão os principais comandos `CREATE` com exemplos:

### 1. **CREATE DATABASE**
Cria um novo banco de dados.

```sql
CREATE DATABASE nome_do_banco_de_dados;
```

**Exemplo:**

```sql
CREATE DATABASE minha_empresa;
```

### 2. **CREATE TABLE**
Cria uma nova tabela dentro de um banco de dados.

```sql
CREATE TABLE nome_da_tabela (
    coluna1 tipo_de_dado [restrições],
    coluna2 tipo_de_dado [restrições],
    ...
);
```

**Exemplo:**

```sql
CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    idade INT,
    data_cadastro DATE DEFAULT CURRENT_DATE
);
```

### 3. **CREATE INDEX**
Cria um índice para acelerar as consultas em uma tabela.

```sql
CREATE INDEX nome_do_indice ON nome_da_tabela (coluna1, coluna2, ...);
```

**Exemplo:**

```sql
CREATE INDEX idx_email ON clientes(email);
```

### 4. **CREATE VIEW**
Cria uma visão virtual (view) que pode simplificar consultas complexas ou unir dados de várias tabelas.

```sql
CREATE VIEW nome_da_view AS
SELECT colunas FROM tabela [JOIN outras_tabelas] [WHERE condições];
```

**Exemplo:**

```sql
CREATE VIEW vista_clientes AS
SELECT nome, email FROM clientes WHERE ativo = 1;
```

### 5. **CREATE PROCEDURE**
Cria um procedimento armazenado (stored procedure) que pode encapsular uma série de operações SQL.

```sql
CREATE PROCEDURE nome_da_procedure
AS
BEGIN
    -- código SQL
END;
```

**Exemplo:**

```sql
CREATE PROCEDURE listar_clientes_ativos
AS
BEGIN
    SELECT nome, email FROM clientes WHERE ativo = 1;
END;
```

### 6. **CREATE FUNCTION**
Cria uma função que retorna um valor. Ela pode ser usada em consultas como uma função incorporada.

```sql
CREATE FUNCTION nome_da_funcao (parametros)
RETURNS tipo_de_dado
AS
BEGIN
    -- código SQL
    RETURN valor;
END;
```

**Exemplo:**

```sql
CREATE FUNCTION calcular_desconto(preco DECIMAL, desconto DECIMAL)
RETURNS DECIMAL
AS
BEGIN
    RETURN preco - (preco * desconto / 100);
END;
```

### 7. **CREATE TRIGGER**
Cria um gatilho (trigger) que é executado automaticamente quando um evento especificado ocorre em uma tabela.

```sql
CREATE TRIGGER nome_do_trigger
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON nome_da_tabela
FOR EACH ROW
BEGIN
    -- código SQL
END;
```

**Exemplo:**

```sql
CREATE TRIGGER atualizar_data_modificacao
AFTER UPDATE ON clientes
FOR EACH ROW
BEGIN
    UPDATE clientes SET data_modificacao = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;
```

### 8. **CREATE SCHEMA**
Cria um esquema, que é um container lógico para objetos de banco de dados como tabelas, visões e procedimentos.

```sql
CREATE SCHEMA nome_do_esquema;
```

**Exemplo:**

```sql
CREATE SCHEMA financeiro;
```

### 9. **CREATE TABLE AS**
Cria uma nova tabela e preenche com os resultados de uma consulta.

```sql
CREATE TABLE nova_tabela AS
SELECT colunas FROM tabela_existente [WHERE condições];
```

**Exemplo:**

```sql
CREATE TABLE clientes_ativos AS
SELECT * FROM clientes WHERE ativo = 1;
```

### 10. **CREATE TEMPORARY TABLE**
Cria uma tabela temporária que existe apenas durante a sessão atual.

```sql
CREATE TEMPORARY TABLE nome_da_tabela_temporaria (
    coluna1 tipo_de_dado [restrições],
    coluna2 tipo_de_dado [restrições],
    ...
);
```

**Exemplo:**

```sql
CREATE TEMPORARY TABLE temp_clientes (
    id INT,
    nome VARCHAR(100)
);
```
