$(document).ready(function(){
    $('#phone').mask('(00) 0.0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');

    $("form").validate({
        rules: {
            nome: {
                required: true,
                minlength: 8,
                maxlength: 50
            },

            phone: {
                required: true,
                minlength: 16
            },

            cpf: {
                required: true,
                minlength: 14
            },

            cep: {
                required: true,
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            nome: {
                required: "Preencha este campo...",
                minlength: "Por favor, informe seu nome completo...",
                maxlength: "Nome muito grande..."
                },
            email: {
                required: "Preencha este campo...",
                email: "Por favor, informe um email válido..."
                },

            phone: {
            required: "Preencha este campo...",
            minlength: "Por favor, informe um telefone válido..."
            },

            cpf: {
                required: "Preencha este campo...",
                minlength: "Por favor, informe um CPF válido..."
                },

            cep: {
                required: "Preencha este campo...",
                minlength: "Por favor, informe um CEP válido...",
                maxlength: "Por favor, informe um CEP válido!"
            }
        },
        errorPlacement: function(error, element) {
            element.after(error);
            }
    });
});
