import chalk from 'chalk';
import fs from 'fs';

function TratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'verifique o camminho do arquivo especifiado!'));
}

function PegaArquivo(caminhoDoArquivo) {
    const econding = 'utf-8';
    fs.readFile(caminhoDoArquivo, econding, (erro, texto) => {
        if (erro) {
            TratarErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

PegaArquivo('./arquivos/texto12.md');