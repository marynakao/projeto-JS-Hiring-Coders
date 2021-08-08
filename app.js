const livros = require('./database')

// pegar o input do usuário

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

// Se sim, mostra as categorias disponíveis e pergunta qual categoria escolhe

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Distopia ', '/ Policial ', '/ Romance ', '/ Suspense')

    const entradaCategoria = readline.question('Qual categoria voce escolhe? ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}

// Se não, mostra todos os livros em ordem crescente pelo número de páginas

    else {
    const livrosEmOrdem = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosEmOrdem)
}