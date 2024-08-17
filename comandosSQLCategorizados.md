Os comandos SQL podem ser categorizados em vários grupos, como DML (Data Manipulation Language), 
                                                               DDL (Data Definition Language), 
                                                               DCL (Data Control Language), e 
                                                               TCL (Transaction Control Language).
### Resumo

- **DML:** Manipulação de dados (`SELECT`, `INSERT`, `UPDATE`, `DELETE`)
- **DDL:** Definição de estruturas de banco de dados (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`)
- **DCL:** Controle de permissões e acesso (`GRANT`, `REVOKE`)
- **TCL:** Controle de transações (`BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`)
- **Views e Índices:** Melhoria na consulta de dados (`CREATE VIEW`, `CREATE INDEX`)
- **Backup e Restauração:** Manutenção de dados (`BACKUP`, `RESTORE`)

Esses são os principais comandos SQL que abrangem desde a manipulação de dados até a administração e controle do banco de dados.

### 1. **DML (Data Manipulation Language)**

Os comandos DML são usados para manipular os dados dentro das tabelas.

- **SELECT**: Consulta dados de uma ou mais tabelas.
  ```sql
  SELECT coluna1, coluna2 FROM tabela WHERE condição;
  ```

  **Exemplo:**
  ```sql
  SELECT nome, email FROM clientes WHERE cidade = 'São Paulo';
  ```

- **INSERT**: Insere novos registros em uma tabela.
  ```sql
  INSERT INTO tabela (coluna1, coluna2) VALUES (valor1, valor2);
  ```

  **Exemplo:**
  ```sql
  INSERT INTO clientes (nome, email) VALUES ('Maria Silva', 'maria@example.com');
  ```

- **UPDATE**: Atualiza registros existentes em uma tabela.
  ```sql
  UPDATE tabela SET coluna1 = valor1 WHERE condição;
  ```

  **Exemplo:**
  ```sql
  UPDATE clientes SET email = 'novoemail@example.com' WHERE id = 1;
  ```

- **DELETE**: Remove registros de uma tabela.
  ```sql
  DELETE FROM tabela WHERE condição;
  ```

  **Exemplo:**
  ```sql
  DELETE FROM clientes WHERE id = 2;
  ```

### 2. **DDL (Data Definition Language)**

Os comandos DDL são usados para definir a estrutura do banco de dados, incluindo tabelas, índices, e esquemas.

- **CREATE TABLE**: Cria uma nova tabela.
  ```sql
  CREATE TABLE tabela (
      coluna1 tipo_de_dado [restrições],
      coluna2 tipo_de_dado [restrições],
      ...
  );
  ```

  **Exemplo:**
  ```sql
  CREATE TABLE clientes (
      id INT PRIMARY KEY AUTO_INCREMENT,
      nome VARCHAR(100),
      email VARCHAR(100) UNIQUE
  );
  ```

- **ALTER TABLE**: Modifica a estrutura de uma tabela existente.
  ```sql
  ALTER TABLE tabela ADD coluna tipo_de_dado;
  ALTER TABLE tabela DROP COLUMN coluna;
  ```

  **Exemplo:**
  ```sql
  ALTER TABLE clientes ADD telefone VARCHAR(15);
  ```

- **DROP TABLE**: Exclui uma tabela do banco de dados.
  ```sql
  DROP TABLE tabela;
  ```

  **Exemplo:**
  ```sql
  DROP TABLE antigos_clientes;
  ```

- **TRUNCATE TABLE**: Remove todos os registros de uma tabela, mas mantém sua estrutura.
  ```sql
  TRUNCATE TABLE tabela;
  ```

  **Exemplo:**
  ```sql
  TRUNCATE TABLE clientes_temporarios;
  ```

### 3. **DCL (Data Control Language)**

Os comandos DCL são usados para controlar o acesso ao banco de dados, gerenciando permissões de usuários.

- **GRANT**: Concede privilégios a um usuário.
  ```sql
  GRANT privilégio ON tabela TO usuário;
  ```

  **Exemplo:**
  ```sql
  GRANT SELECT, INSERT ON clientes TO 'joao'@'localhost';
  ```

- **REVOKE**: Remove privilégios de um usuário.
  ```sql
  REVOKE privilégio ON tabela FROM usuário;
  ```

  **Exemplo:**
  ```sql
  REVOKE INSERT ON clientes FROM 'joao'@'localhost';
  ```

### 4. **TCL (Transaction Control Language)**

Os comandos TCL são usados para gerenciar transações no banco de dados.

- **BEGIN TRANSACTION**: Inicia uma transação.
  ```sql
  BEGIN TRANSACTION;
  ```

  **Exemplo:**
  ```sql
  BEGIN TRANSACTION;
  ```

- **COMMIT**: Confirma as alterações feitas durante a transação.
  ```sql
  COMMIT;
  ```

  **Exemplo:**
  ```sql
  COMMIT;
  ```

- **ROLLBACK**: Desfaz as alterações feitas durante a transação.
  ```sql
  ROLLBACK;
  ```

  **Exemplo:**
  ```sql
  ROLLBACK;
  ```

- **SAVEPOINT**: Define um ponto de salvamento dentro de uma transação, permitindo reverter até esse ponto.
  ```sql
  SAVEPOINT nome_do_savepoint;
  ```

  **Exemplo:**
  ```sql
  SAVEPOINT ponto1;
  ```

- **RELEASE SAVEPOINT**: Remove um savepoint definido anteriormente.
  ```sql
  RELEASE SAVEPOINT nome_do_savepoint;
  ```

  **Exemplo:**
  ```sql
  RELEASE SAVEPOINT ponto1;
  ```

### 5. **Comandos de Controle de Dados**

Esses comandos ajudam a definir como os dados serão visualizados e manipulados.

- **CREATE VIEW**: Cria uma visão (view) que é uma consulta armazenada.
  ```sql
  CREATE VIEW nome_da_view AS SELECT colunas FROM tabela WHERE condição;
  ```

  **Exemplo:**
  ```sql
  CREATE VIEW vista_clientes AS SELECT nome, email FROM clientes WHERE ativo = 1;
  ```

- **CREATE INDEX**: Cria um índice para melhorar a performance das consultas.
  ```sql
  CREATE INDEX nome_do_indice ON tabela (coluna1, coluna2, ...);
  ```

  **Exemplo:**
  ```sql
  CREATE INDEX idx_nome ON clientes(nome);
  ```

### 6. **Comandos de Backup e Restauração**

Esses comandos ajudam a fazer backup de dados e restaurar a partir de backups.

- **BACKUP DATABASE**: Faz backup do banco de dados (específico de alguns SGBDs).
  ```sql
  BACKUP DATABASE nome_do_banco TO 'caminho_do_backup';
  ```

  **Exemplo (SQL Server):**
  ```sql
  BACKUP DATABASE minha_empresa TO DISK = 'C:\backups\minha_empresa.bak';
  ```

- **RESTORE DATABASE**: Restaura o banco de dados a partir de um backup.
  ```sql
  RESTORE DATABASE nome_do_banco FROM 'caminho_do_backup';
  ```

  **Exemplo (SQL Server):**
  ```sql
  RESTORE DATABASE minha_empresa FROM DISK = 'C:\backups\minha_empresa.bak';
  ```
