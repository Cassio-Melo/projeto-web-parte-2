document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simulando o envio dos dados do formulário para o servidor (substitua isso pela lógica real de cadastro)
    if (username && email && password) {
        // Aqui você pode enviar os dados para o servidor usando fetch() ou XMLHttpRequest
        // Exemplo: fetch('URL_do_servidor', { method: 'POST', body: JSON.stringify({ username, email, password }) })
        document.getElementById('signup-form').reset(); // Limpa o formulário após o cadastro
        document.getElementById('success-message').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('error-message').textContent = '';
    } else {
        document.getElementById('success-message').textContent = '';
        document.getElementById('error-message').textContent = 'Por favor, preencha todos os campos.';
    }
});
