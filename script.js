const numA = document.getElementById('numberA');
const numB =  document.getElementById('numberB');
const form = document.querySelector('#form');
const mensagem = document.getElementById('mensagem');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (parseInt(numB.value) > parseInt(numA.value)) {
        mensagem.style.backgroundColor = '#9dfdc8';
        mensagem.textContent = 'Bom trabalho! O valor B é maior que o valor A!'
        mensagem.style.display = 'inline'

    }else if (parseInt(numB.value) < parseInt(numA.value) || parseInt(numB.value) == parseInt(numA.value)) {
        mensagem.style.backgroundColor = '#ffabab';
        mensagem.textContent = 'Erro!! O valor B precisa ser maior que o valor A'
        mensagem.style.display = 'inline'
    }
    });
