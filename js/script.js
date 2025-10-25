document.addEventListener('DOMContentLoaded', function() {
    
    // MÁSCARAS PARA O FORMULÁRIO DE CADASTRO
    const inputCpf = document.querySelector('#cpf');
    if (inputCpf) {
        inputCpf.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }

    const inputCep = document.querySelector('#cep');
    if (inputCep) {
        inputCep.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }

    const inputTelefone = document.querySelector('#telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        });
    }

    // INTERAÇÃO NA PÁGINA DE VOLUNTÁRIOS
    const participarButtons = document.querySelectorAll('.btn-participar');
    participarButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Obrigado pelo seu interesse! Em breve entraremos em contato.');
            // Na versão final, aqui iria redirecionar para a página de cadastro
        });
    });

    // MENSAGEM DE CONFIRMAÇÃO AO ENVIAR FORMULÁRIO
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Previne o envio real para demonstração
            e.preventDefault(); 
            // Exibe uma mensagem de sucesso
            alert('Formulário enviado com sucesso! (Demonstração)');
            // Limpa o formulário após o envio
            form.reset();
        });
    });

});
