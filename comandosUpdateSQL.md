Os comandos `UPDATE` em SQL são usados para modificar registros existentes em uma tabela. 
Aqui estão os principais comandos `UPDATE`, juntamente com exemplos de como usá-los de maneira eficaz.

### 1. **UPDATE Básico**
Atualiza registros em uma tabela.

```sql
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2, ...
WHERE condição;
```

**Exemplo:**

```sql
UPDATE clientes
SET email = 'novoemail@example.com'
WHERE id = 1;
```

### 2. **UPDATE com Múltiplas Colunas**
Atualiza várias colunas ao mesmo tempo.

```sql
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2, ...
WHERE condição;
```

**Exemplo:**

```sql
UPDATE clientes
SET nome = 'João Silva', email = 'joao.silva@example.com'
WHERE id = 2;
```

### 3. **UPDATE sem WHERE**
Atualiza todas as linhas da tabela (cuidado com o uso deste comando, pois todas as linhas serão alteradas).

```sql
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2, ...;
```

**Exemplo:**

```sql
UPDATE produtos
SET estoque = 0;
```
> **Nota:** Isso atualizará o valor da coluna `estoque` para 0 em todos os registros da tabela `produtos`.

### 4. **UPDATE com JOIN**
Atualiza registros em uma tabela com base em uma correspondência de outra tabela.

```sql
UPDATE t1
SET t1.coluna1 = valor1
FROM tabela1 t1
JOIN tabela2 t2 ON t1.coluna_comum = t2.coluna_comum
WHERE condição;
```

**Exemplo:**

```sql
UPDATE pedidos
SET pedidos.status = 'Enviado'
FROM pedidos
JOIN clientes ON pedidos.cliente_id = clientes.id
WHERE clientes.email = 'joao.silva@example.com';
```

### 5. **UPDATE com Subconsulta**
Atualiza registros com base em uma subconsulta.

```sql
UPDATE nome_da_tabela
SET coluna = (SELECT valor FROM outra_tabela WHERE condição)
WHERE condição;
```

**Exemplo:**

```sql
UPDATE produtos
SET preco = (SELECT AVG(preco) FROM produtos WHERE categoria = 'Eletrônicos')
WHERE categoria = 'Eletrônicos';
```

### 6. **UPDATE com CASE**
Atualiza registros de forma condicional usando `CASE`.

```sql
UPDATE nome_da_tabela
SET coluna = CASE
    WHEN condição1 THEN valor1
    WHEN condição2 THEN valor2
    ELSE valor_default
END
WHERE condição;
```

**Exemplo:**

```sql
UPDATE clientes
SET status = CASE
    WHEN idade < 18 THEN 'Menor de Idade'
    WHEN idade >= 18 AND idade < 60 THEN 'Adulto'
    ELSE 'Idoso'
END;
```

### 7. **UPDATE com LIMIT (MySQL)**
Restringe o número de linhas que serão atualizadas. Esse recurso é específico de alguns sistemas de banco de dados, como MySQL.

```sql
UPDATE nome_da_tabela
SET coluna = valor
WHERE condição
LIMIT número_de_linhas;
```

**Exemplo:**

```sql
UPDATE clientes
SET status = 'Inativo'
WHERE status = 'Ativo'
LIMIT 10;
```

### 8. **UPDATE com ORDER BY**
Ordena os registros antes de atualizar. Também é específico de alguns sistemas de banco de dados, como MySQL.

```sql
UPDATE nome_da_tabela
SET coluna = valor
WHERE condição
ORDER BY coluna
LIMIT número_de_linhas;
```

**Exemplo:**

```sql
UPDATE clientes
SET status = 'VIP'
WHERE status = 'Regular'
ORDER BY data_cadastro DESC
LIMIT 5;
```

### 9. **UPDATE com Alias**
Usa um alias (apelido) para a tabela na instrução `UPDATE`.

```sql
UPDATE alias_nome
SET coluna = valor
FROM nome_da_tabela alias_nome
WHERE condição;
```

**Exemplo:**

```sql
UPDATE c
SET c.status = 'Inativo'
FROM clientes c
WHERE c.idade > 60;
```

### 10. **UPDATE com Variáveis**
Em alguns bancos de dados (como MySQL), você pode usar variáveis para armazenar valores durante a atualização.

```sql
SET @variavel = valor;
UPDATE nome_da_tabela
SET coluna = @variavel
WHERE condição;
```

**Exemplo:**

```sql
SET @novo_email = 'atualizado@example.com';
UPDATE clientes
SET email = @novo_email
WHERE id = 3;
```
