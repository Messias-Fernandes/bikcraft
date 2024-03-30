function livro(nome, ano, autor){
    return{
        nome: nome.toUpperCase(),
        totalAnos: 2050 - ano,
        frase: `${nome} por ${autor}`,
    };
};

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno)

const botao = document.querySelector('.botao');

function mostrar(){
    const texto = document.querySelector('.texto');
    texto.classList.toggle("ativar");
};

botao.addEventListener('click', mostrar);