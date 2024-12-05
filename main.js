//A entrega deste exercício consiste em:
// • No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.
// • Envie o link do repositório através da plataforma. 

// • Crie uma classe de uma abstração;
class Veiculo {
    constructor(marca, modelo, anoFabricado, anoModelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricado = anoFabricado;
        this.anoModelo = anoModelo;
        this.cor = cor;
    };

    Acelerar() {
        console.log(`${this.modelo}: vruuum, vruuum!`)
    };

    
}

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
class Carro extends Veiculo {
        Buzinar() {
            console.log(`${this.modelo}: Bip, Bip`)
        }
}

class Moto extends Veiculo {
    AcenderPiscaAlerta() {
        console.log(`${this.modelo}: Acendeu Pisca-Alerta!!!`)
    }
}

// • Crie pelo menos três instâncias de objetos;
const carroBarreto = new Carro('Fiat', 'Strada', 2021, 2022, 'Prata Bari')
const carroMirelly = new Carro('Toyota', 'SW4', 2022, 2023, 'Prata')
const motoBarretinho = new Moto('Honda', 'Bross', 2023, 2023, 'Azul')

console.log(carroBarreto)
console.log('****************************')
console.log(carroMirelly)
console.log('****************************')
console.log(motoBarretinho)

console.log('****************************')
carroBarreto.Acelerar()
carroMirelly.Buzinar()
motoBarretinho.AcenderPiscaAlerta()
