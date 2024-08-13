Principais comandos `SELECT` em SQL com exemplos:

### 1. **Selecionar Todas as Colunas**
Seleciona todas as colunas da tabela.

```sql
SELECT * FROM nome_da_tabela;
```

**Exemplo:**

```sql
SELECT * FROM clientes;
```

### 2. **Selecionar Colunas Específicas**
Seleciona apenas colunas específicas da tabela.

```sql
SELECT coluna1, coluna2 FROM nome_da_tabela;
```

**Exemplo:**

```sql
SELECT nome, email FROM clientes;
```

### 3. **Filtrar Resultados com WHERE**
Aplica uma condição para filtrar os resultados.

```sql
SELECT coluna1, coluna2 FROM nome_da_tabela WHERE condição;
```

**Exemplo:**

```sql
SELECT nome, email FROM clientes WHERE idade > 30;
```

### 4. **Ordenar Resultados com ORDER BY**
Ordena os resultados com base em uma ou mais colunas.

```sql
SELECT coluna1, coluna2 FROM nome_da_tabela ORDER BY coluna1 [ASC|DESC];
```

**Exemplo:**

```sql
SELECT nome, email FROM clientes ORDER BY idade DESC;
```

### 5. **Limitar Resultados com LIMIT (ou TOP em SQL Server)**
Restringe o número de resultados retornados.

```sql
SELECT coluna1, coluna2 FROM nome_da_tabela LIMIT número;
```

**Exemplo:**

```sql
SELECT nome, email FROM clientes LIMIT 5;
```

Em SQL Server, o comando equivalente seria:

```sql
SELECT TOP 5 nome, email FROM clientes;
```

### 6. **Selecionar Valores Distintos com DISTINCT**
Remove duplicatas dos resultados.

```sql
SELECT DISTINCT coluna1 FROM nome_da_tabela;
```

**Exemplo:**

```sql
SELECT DISTINCT cidade FROM clientes;
```

### 7. **Agregação de Dados**
Usa funções de agregação para resumir os dados.

```sql
SELECT função_agregação(coluna) FROM nome_da_tabela;
```

**Exemplos:**

- **Soma:**

  ```sql
  SELECT SUM(salario) FROM funcionarios;
  ```

- **Média:**

  ```sql
  SELECT AVG(salario) FROM funcionarios;
  ```

- **Contar:**

  ```sql
  SELECT COUNT(*) FROM clientes;
  ```

### 8. **Agrupamento com GROUP BY**
Agrupa os resultados com base em uma ou mais colunas.

```sql
SELECT coluna1, função_agregação(coluna2) FROM nome_da_tabela GROUP BY coluna1;
```

**Exemplo:**

```sql
SELECT cidade, COUNT(*) FROM clientes GROUP BY cidade;
```

### 9. **Filtrar com HAVING**
Aplica condições de filtro após a agregação.

```sql
SELECT coluna1, função_agregação(coluna2) FROM nome_da_tabela GROUP BY coluna1 HAVING condição;
```

**Exemplo:**

```sql
SELECT cidade, COUNT(*) FROM clientes GROUP BY cidade HAVING COUNT(*) > 10;
```

### 10. **Combinar Resultados com UNION**
Combina os resultados de duas ou mais consultas.

```sql
SELECT coluna1 FROM tabela1
UNION
SELECT coluna1 FROM tabela2;
```

**Exemplo:**

```sql
SELECT nome FROM clientes
UNION
SELECT nome FROM fornecedores;
```

### Nível Iniciante

#### 1. **Selecionar Colunas com Alias**
Dá um nome alternativo a uma coluna na consulta.

```sql
SELECT coluna1 AS alias_nome FROM nome_da_tabela;
```

**Exemplo:**

```sql
SELECT nome AS cliente_nome FROM clientes;
```

#### 2. **Utilizar Funções de String**
Manipula ou extrai partes de strings.

- **CONCAT**: Concatena strings.

  ```sql
  SELECT CONCAT(nome, ' ', sobrenome) AS nome_completo FROM clientes;
  ```

- **SUBSTRING**: Extrai uma parte da string.

  ```sql
  SELECT SUBSTRING(nome, 1, 3) AS iniciais FROM clientes;
  ```

- **LENGTH**: Conta o número de caracteres na string.

  ```sql
  SELECT LENGTH(nome) AS tamanho_nome FROM clientes;
  ```

#### 3. **Funções Matemáticas**
Executa cálculos matemáticos.

- **ROUND**: Arredonda um número.

  ```sql
  SELECT ROUND(salario, 2) AS salario_arredondado FROM funcionarios;
  ```

- **CEIL**: Arredonda para cima.

  ```sql
  SELECT CEIL(salario) AS salario_ceiling FROM funcionarios;
  ```

- **FLOOR**: Arredonda para baixo.

  ```sql
  SELECT FLOOR(salario) AS salario_floor FROM funcionarios;
  ```

#### 4. **Operadores Lógicos**
Usa operadores para condições.

- **AND**: Combina várias condições.

  ```sql
  SELECT nome, idade FROM clientes WHERE idade > 25 AND idade < 35;
  ```

- **OR**: Usa uma de várias condições.

  ```sql
  SELECT nome FROM clientes WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro';
  ```

- **NOT**: Exclui condições.

  ```sql
  SELECT nome FROM clientes WHERE NOT cidade = 'São Paulo';
  ```

### Nível Intermediário

#### 5. **Join (União de Tabelas)**
Combina registros de duas ou mais tabelas.

- **INNER JOIN**: Retorna registros que têm correspondência nas duas tabelas.

  ```sql
  SELECT clientes.nome, pedidos.numero_pedido
  FROM clientes
  INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;
  ```

- **LEFT JOIN**: Retorna todos os registros da tabela da esquerda e os correspondentes da tabela da direita.

  ```sql
  SELECT clientes.nome, pedidos.numero_pedido
  FROM clientes
  LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id;
  ```

- **RIGHT JOIN**: Retorna todos os registros da tabela da direita e os correspondentes da tabela da esquerda.

  ```sql
  SELECT clientes.nome, pedidos.numero_pedido
  FROM clientes
  RIGHT JOIN pedidos ON clientes.id = pedidos.cliente_id;
  ```

- **FULL JOIN**: Retorna registros quando há correspondência em uma das tabelas.

  ```sql
  SELECT clientes.nome, pedidos.numero_pedido
  FROM clientes
  FULL JOIN pedidos ON clientes.id = pedidos.cliente_id;
  ```

#### 6. **Subconsultas**
Consulta dentro de outra consulta.

- **Subconsulta Escalar**: Retorna um único valor.

  ```sql
  SELECT nome FROM clientes WHERE idade = (SELECT MAX(idade) FROM clientes);
  ```

- **Subconsulta Correlacionada**: Referencia a consulta externa.

  ```sql
  SELECT nome FROM clientes c
  WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id);
  ```

#### 7. **Utilizar CASE**
Executa condições dentro da consulta.

```sql
SELECT nome,
       CASE
           WHEN idade < 18 THEN 'Menor'
           WHEN idade BETWEEN 18 AND 65 THEN 'Adulto'
           ELSE 'Idoso'
       END AS faixa_etaria
FROM clientes;
```

### Nível Avançado

#### 8. **Procedures e Functions**
Cria e utiliza procedimentos armazenados e funções.

- **Criar Procedure:**

  ```sql
  CREATE PROCEDURE listar_clientes
  AS
  BEGIN
      SELECT * FROM clientes;
  END;
  ```

- **Chamar Procedure:**

  ```sql
  EXEC listar_clientes;
  ```

- **Criar Function:**

  ```sql
  CREATE FUNCTION calcular_imposto(salario DECIMAL)
  RETURNS DECIMAL
  AS
  BEGIN
      RETURN salario * 0.2;
  END;
  ```

- **Chamar Function:**

  ```sql
  SELECT calcular_imposto(5000);
  ```

#### 9. **Triggers**
Cria gatilhos para executar ações automáticas.

- **Criar Trigger:**

  ```sql
  CREATE TRIGGER atualiza_data
  ON clientes
  AFTER UPDATE
  AS
  BEGIN
      UPDATE clientes SET data_atualizacao = GETDATE();
  END;
  ```

#### 10. **Indexes**
Melhora a performance das consultas.

- **Criar Index:**

  ```sql
  CREATE INDEX idx_nome ON clientes(nome);
  ```

- **Remover Index:**

  ```sql
  DROP INDEX idx_nome ON clientes;
  ```

#### 11. **Views**
Cria uma visão virtual para simplificar consultas.

- **Criar View:**

  ```sql
  CREATE VIEW vista_clientes AS
  SELECT nome, email FROM clientes WHERE ativo = 1;
  ```

- **Usar View:**

  ```sql
  SELECT * FROM vista_clientes;
  ```

#### 12. **Common Table Expressions (CTEs)**
Usa expressões de tabela comum para simplificar consultas complexas.

```sql
WITH cte AS (
    SELECT nome, idade
    FROM clientes
    WHERE idade > 30
)
SELECT * FROM cte;
```
