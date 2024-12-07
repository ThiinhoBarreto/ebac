// A entrega deste exercício consiste em:
//  Utilizando o TypeScript e a tipagem escreva duas funções: 

// • uma função de multiplicação que deverá receber como argumentos dois números e retornar 
//a multiplicação deles, 
function multiply(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo
};

// • uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
function saudacao(nome: string): string {
    return `olá, ${nome}`
};
