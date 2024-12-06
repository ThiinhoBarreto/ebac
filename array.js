// A entrega deste exercício consiste em:

// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// Para ficar mais real os alunos tem as notas das 4 unidades em vez da média já de cara (calcularemos a média posteriormente).
const boletimAlunos = [
    {
        nome : 'Lucas',
        notas: [6, 7, 6, 5]
    },
    {
        nome : 'Alana',
        notas: [4, 5, 3, 5]
    },
    {
        nome : 'Pedro',
        notas: [8, 7, 7, 4]
    },
    {
        nome : 'Vitor',
        notas: [7, 5, 6, 5]
    },
    {
        nome : 'Ricky',
        notas: [5, 4, 6, 5]
    },
]

// • Função para calcular a média dos alunos
function calcularMedia(boletimAlunos) {
    return boletimAlunos.map(aluno => {
        const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
        const media = somaNotas / aluno.notas.length;
        return {nome: aluno.nome, media: media.toFixed(2)};
    })
    
}

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
function alunosAprovados(boletimAlunos) {
    const mediasCalculadas = calcularMedia(boletimAlunos)
    return mediasCalculadas.filter(aluno => aluno.media >= 6)
} 

// Retorno dos alunos aprovados
console.log(alunosAprovados(boletimAlunos))
