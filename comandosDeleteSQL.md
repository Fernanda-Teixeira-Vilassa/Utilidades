Os comandos `DELETE` em SQL são usados para remover registros de uma tabela. 
Abaixo estão os principais comandos `DELETE`, com exemplos que variam de simples remoções a operações mais avançadas.

### 1. **DELETE Básico**
Remove registros de uma tabela com base em uma condição.

```sql
DELETE FROM nome_da_tabela
WHERE condição;
```

**Exemplo:**

```sql
DELETE FROM clientes
WHERE id = 1;
```

### 2. **DELETE sem WHERE**
Remove todos os registros de uma tabela. **Cuidado!** Usar `DELETE` sem a cláusula `WHERE` resulta na exclusão de todas as linhas da tabela.

```sql
DELETE FROM nome_da_tabela;
```

**Exemplo:**

```sql
DELETE FROM clientes;
```
> **Nota:** Isso removerá todos os registros da tabela `clientes`, mas a estrutura da tabela permanecerá intacta.

### 3. **DELETE com JOIN**
Remove registros de uma tabela com base em uma condição de outra tabela, usando uma junção (JOIN).

```sql
DELETE t1
FROM tabela1 t1
JOIN tabela2 t2 ON t1.coluna_comum = t2.coluna_comum
WHERE condição;
```

**Exemplo:**

```sql
DELETE pedidos
FROM pedidos
JOIN clientes ON pedidos.cliente_id = clientes.id
WHERE clientes.status = 'Inativo';
```

### 4. **DELETE com Subconsulta**
Remove registros com base em uma subconsulta que retorna valores específicos.

```sql
DELETE FROM nome_da_tabela
WHERE coluna IN (SELECT coluna FROM outra_tabela WHERE condição);
```

**Exemplo:**

```sql
DELETE FROM produtos
WHERE categoria_id IN (SELECT id FROM categorias WHERE nome = 'Obsoletos');
```

### 5. **DELETE com LIMIT (MySQL)**
Em alguns sistemas de banco de dados, como MySQL, você pode restringir o número de registros a serem excluídos usando `LIMIT`.

```sql
DELETE FROM nome_da_tabela
WHERE condição
LIMIT número_de_linhas;
```

**Exemplo:**

```sql
DELETE FROM clientes
WHERE status = 'Inativo'
LIMIT 10;
```

### 6. **DELETE com ORDER BY**
Em alguns bancos de dados, como MySQL, você pode ordenar os registros antes de excluir, em combinação com `LIMIT`.

```sql
DELETE FROM nome_da_tabela
WHERE condição
ORDER BY coluna
LIMIT número_de_linhas;
```

**Exemplo:**

```sql
DELETE FROM clientes
WHERE status = 'Inativo'
ORDER BY data_cadastro ASC
LIMIT 5;
```

### 7. **DELETE de Tabelas com Relações (Foreign Keys)**
Quando uma tabela está relacionada a outra por uma chave estrangeira, ao tentar excluir registros da tabela pai, 
podem ocorrer restrições. Existem algumas abordagens:

- **ON DELETE CASCADE:** Se a tabela foi criada com essa opção, ao excluir um registro da tabela pai, 
todos os registros relacionados na tabela filha serão automaticamente excluídos.

**Exemplo de Criação da Tabela com ON DELETE CASCADE:**

```sql
CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);
```

Com isso, se um cliente for excluído da tabela `clientes`, todos os pedidos relacionados a ele também serão excluídos.

### 8. **DELETE de Tabelas com TRUNCATE**
Embora `TRUNCATE` não seja tecnicamente um comando `DELETE`, ele é frequentemente usado para remover todos os registros 
de uma tabela de maneira mais rápida e eficiente que `DELETE`. Ao contrário de `DELETE`, o `TRUNCATE` não pode ser 
usado com `WHERE` e reinicia os contadores de auto incremento.

```sql
TRUNCATE TABLE nome_da_tabela;
```

**Exemplo:**

```sql
TRUNCATE TABLE clientes;
```

### Resumo
- **DELETE com WHERE:** Remove registros específicos.
- **DELETE sem WHERE:** Remove todos os registros de uma tabela.
- **DELETE com JOIN:** Remove registros com base em uma condição de outra tabela.
- **DELETE com Subconsulta:** Remove registros usando uma subconsulta para filtrar.
- **DELETE com LIMIT/ORDER BY (MySQL):** Controla o número de registros removidos e a ordem da remoção.
- **DELETE com `ON DELETE CASCADE`:** Remove automaticamente registros relacionados em tabelas filhas.
- **TRUNCATE:** Apaga rapidamente todos os registros de uma tabela.
