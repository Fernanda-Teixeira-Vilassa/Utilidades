const readline = require('readline');

function generateSQLQuery() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Você quer criar (CREATE), atualizar (UPDATE), selecionar (SELECT) ou deletar (DELETE) registros? ', (operation) => {
        rl.question('Informe o nome da tabela: ', (tableName) => {
            if (operation.toUpperCase() === 'CREATE') {
                rl.question('Informe os nomes e tipos dos campos (ex: nome VARCHAR(50), idade INT): ', (fields) => {
                    const sqlQuery = `CREATE TABLE ${tableName} (${fields});`;
                    console.log('Consulta SQL gerada:', sqlQuery);
                    rl.close();
                });
            } else if (operation.toUpperCase() === 'UPDATE') {
                rl.question('Informe o nome do campo a ser atualizado: ', (fieldName) => {
                    rl.question('Informe o novo valor: ', (newValue) => {
                        rl.question('Informe a condição (ex: id = 1): ', (condition) => {
                            const sqlQuery = `UPDATE ${tableName} SET ${fieldName} = '${newValue}' WHERE ${condition};`;
                            console.log('Consulta SQL gerada:', sqlQuery);
                            rl.close();
                        });
                    });
                });
            } else if (operation.toUpperCase() === 'SELECT') {
                rl.question('Informe o nome do campo: ', (fieldName) => {
                    rl.question('Informe a condição (opcional, ex: id = 1): ', (condition) => {
                        const whereClause = condition ? ` WHERE ${condition}` : '';
                        const sqlQuery = `SELECT ${fieldName} FROM ${tableName}${whereClause};`;
                        console.log('Consulta SQL gerada:', sqlQuery);
                        rl.close();
                    });
                });
            } else if (operation.toUpperCase() === 'DELETE') {
                rl.question('Informe a condição para deletar (ex: id = 1): ', (condition) => {
                    const sqlQuery = `DELETE FROM ${tableName} WHERE ${condition};`;
                    console.log('Consulta SQL gerada:', sqlQuery);
                    rl.close();
                });
            } else {
                console.log('Operação não reconhecida. Por favor, tente novamente.');
                rl.close();
            }
        });
    });
}

// Gera a consulta SQL com base nas entradas do usuário
generateSQLQuery();

