        // 1. Pegamos o formulário pelo seu ID
        const formulario = document.getElementById('formRecuperacao');

        // 2. Criamos um "ouvinte" que avisa quando o formulário tenta ser enviado
        formulario.addEventListener('submit', function(evento) {
            // Previne o comportamento padrão (que recarregaria a página)
            evento.preventDefault(); 

            // 3. Pegamos o valor que o usuário digitou no campo de e-mail
            const emailDigitado = document.getElementById('email').value;

            // 4. Mostramos uma mensagem no console só para termos certeza de que funcionou
            console.log("Preparando para enviar o e-mail de recuperação para:", emailDigitado);

            // Aviso visual para o usuário
            alert("Se o e-mail estiver cadastrado, você receberá um link de recuperação em breve!");
            
            // Não está iintegrado com o Back-end
        });