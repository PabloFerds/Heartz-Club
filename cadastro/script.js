async function cadastrar() {
    const url = 'http://localhost:8080/api/usuarios/cadastro';

    // Captura os valores dos campos de entrada
    const nome = document.getElementById('Nome').value.trim();
    const email = document.getElementById('Email').value.trim();
    const idade = document.getElementById('Idade').value.trim();
    const cpf = document.getElementById('CPF').value.trim();
    const endereco = document.getElementById('Endereco').value.trim();
    const senha = document.getElementById('Senha').value.trim();
    const confirmaSenha = document.getElementById('Confirmar').value.trim();

    // Validação simples: verificar se os campos estão preenchidos
    if (!nome || !email || !idade || !cpf || !endereco || !senha || !confirmaSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação: verificar se as senhas correspondem
    if (senha !== confirmaSenha) {
        alert('As senhas não correspondem!');
        return;
    }

    // Cria o objeto com os dados do formulário
    const dados = {
        nome,
        email,
        idade: parseInt(idade), // Converte idade para número
        cpf,
        endereco,
        senha,
        confirmaSenha
    };

    try {
        console.log("Enviando dados:", dados); // Log para depuração

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados) // Envia todos os dados do formulário
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Obtenha a mensagem de erro do backend
            throw new Error(`Erro no cadastro: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        console.log('Sucesso:', data);
        alert('Cadastro realizado com sucesso!');

        // Redireciona para outra página após o cadastro

        window.location.href = "/login/login.html"; // Substitua pelo caminho da página de destino


    } catch (error) {
        console.error('Erro ao fazer cadastro:', error);
        alert('Erro ao fazer cadastro. Tente novamente.');
    }
}