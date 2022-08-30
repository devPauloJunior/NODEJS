import chalk from 'chalk';
import fs from 'fs';
//const fs = require('fs');

// console.log(chalk.blue.bgRed.bold('Primeiro Console'));

// const paragrafo = 'Texto do meu paragrafo.';

// function texto(string) {
//     return string;
// }

// console.log(texto(paragrafo)); 

function PegaArquivo(caminhoDoArquivo) {
    const econding = 'utf-8';
    fs.readFile(caminhoDoArquivo, econding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

PegaArquivo('./arquivos/texto1.md');