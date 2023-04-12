const numA = document.getElementById('numberA');
const numB =  document.getElementById('numberB');
const form = document.querySelector('#form');
const mensagem = document.getElementById('mensagem');


form.addEventListener('submit', function(event) {
    // aqui, podemos realizar as ações que desejamos quando o formulário é submetido
    // por exemplo, podemos impedir o envio padrão do formulário com preventDefault():
    event.preventDefault();

    if (numB.value > numA.value) {

        mensagem.style.backgroundColor = '#9dfdc8';
        mensagem.textContent = 'Bom trabalho! O valor B é maior que o valor A!'
        mensagem.style.display = 'inline'

    }else if (numB.value < numA.value) {
        mensagem.style.backgroundColor = '#ffabab';
        mensagem.textContent = 'Erro!! O valor B precisa ser maior que o valor A'
        mensagem.style.display = 'inline'
    }else {
        mensagem.style.display = 'none'
    }
    });
