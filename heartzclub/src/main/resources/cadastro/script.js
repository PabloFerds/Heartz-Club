async function cadastrar(event) {

    event.preventDefault();

    const url =
        'http://localhost:8080/api/usuarios/cadastro';

    const nome =
        document.getElementById('Nome')
        .value.trim();

    const email =
        document.getElementById('Email')
        .value.trim();

    const dataNascimento =
        document.getElementById('DataNascimento')
        .value;

    const cpf =
        document.getElementById('CPF')
        .value
        .replace(/\D/g, '');

    const endereco =
        document.getElementById('Endereco')
        .value.trim();

    const senha =
        document.getElementById('Senha')
        .value.trim();

    const confirmar =
        document.getElementById('Confirmar')
        .value.trim();

    // VERIFICA CAMPOS VAZIOS
    if (
        nome === '' ||
        email === '' ||
        dataNascimento === '' ||
        cpf === '' ||
        endereco === '' ||
        senha === '' ||
        confirmar === ''
    ) {

        alert('Preencha todos os campos!');
        return;
    }

    // VERIFICA SENHAS
    if (senha !== confirmar) {

        alert('As senhas não correspondem!');
        return;
    }

    // CALCULA IDADE
    const hoje =
        new Date();

    const nascimento =
        new Date(dataNascimento);

    let idade =
        hoje.getFullYear() -
        nascimento.getFullYear();

    const mes =
        hoje.getMonth() -
        nascimento.getMonth();

    if (
        mes < 0 ||
        (
            mes === 0 &&
            hoje.getDate() <
            nascimento.getDate()
        )
    ) {
        idade--;
    }

    // OBJETO ENVIADO PARA API
    const usuario = {

        nome,
        email,
        idade,
        cpf,
        endereco,
        senha,
        confirmaSenha: confirmar

    };

    console.log(usuario);

    try {

        const response =
            await fetch(url, {

                method: 'POST',

                headers: {
                    'Content-Type':
                        'application/json'
                },

                body:
                    JSON.stringify(usuario)

            });

        if (response.ok) {

            alert(
                'Cadastro realizado com sucesso!'
            );

            window.location.href =
                '../login/login.html';

        } else {

            const erro =
                await response.text();

            console.error(
                'ERRO BACKEND:'
            );

            console.error(erro);

            const erroJson =
                JSON.parse(erro);

            alert(
                erroJson.errors[0]
                .defaultMessage
            );
        }

    } catch (error) {

        console.error(error);

        alert(
            'Erro ao conectar com o servidor!'
        );
    }
}

/* MÁSCARA CPF */

const cpfInput =
    document.getElementById('CPF');

cpfInput.addEventListener(
    'input',
    (e) => {

        let valor =
            e.target.value;

        valor =
            valor.replace(/\D/g, '');

        valor =
            valor.substring(0, 11);

        valor =
            valor.replace(
                /(\d{3})(\d)/,
                '$1.$2'
            );

        valor =
            valor.replace(
                /(\d{3})(\d)/,
                '$1.$2'
            );

        valor =
            valor.replace(
                /(\d{3})(\d{1,2})$/,
                '$1-$2'
            );

        e.target.value =
            valor;
    }
);