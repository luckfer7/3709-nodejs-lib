// const caminhoArquivo = require('./arquivos/texto-web.txt');

const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    verificaPalavrasDuplicadas(texto);
})

// criar um array com as palavras
// contar as ocorrencias das palavras através de um contador dentro do nosso array
// montar um objeto com o resultado (será retornado no terminal)

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' '); // o separador aqui é o espaço, ou seja, tudo que tive antes do espaço ele vai pegar e o jogar no objeto.
    const resultado = {}; // é aqui que o resultado será armazenado.
    //objeto[properidade] = valor; vai criar uma propriedade dentro do objeto com esse valor, se o valor já existir, vai atualizá-lo.
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
        //pra cada palavra a gente vai contar e criar o objeto
    })

    console.log(resultado);
    
}