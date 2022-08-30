import chalk from 'chalk';
import fs from 'fs';

function TratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'verifique o camminho do arquivo especifiado!'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => TratarErro(erro))
}
    // function pegaArquivo(caminhoDoArquivo) {
//     const enconding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
//         if (erro) {
//             TratarErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto1.md');