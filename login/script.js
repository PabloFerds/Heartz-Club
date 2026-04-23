async function logar() {
    const url = 'http://localhost:8080/api/usuarios/login';

    // Captura os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        console.log("Enviando dados:", { email, senha }); // Log para depuração

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha }) // Certifique-se de enviar "email" e "senha"
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Obtenha a mensagem de erro do backend
            throw new Error(`Erro no login: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        console.log('Sucesso:', data);
        alert('Login realizado com sucesso!');

        window.location.href = "/home/index.html"; // Substitua pelo caminho da página de destino


    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Verifique suas credenciais.');
    }
}