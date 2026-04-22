async function login(email, senha) {
    const url = 'http://localhost:8080/api/usuarios/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Obtenha a mensagem de erro do backend
            throw new Error(`Erro no login: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        console.log('Sucesso:', data);

    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
}