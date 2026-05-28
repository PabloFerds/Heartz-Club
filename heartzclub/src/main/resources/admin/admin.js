const API_BASE =
    'http://localhost:8080/api';

const usuario =
    JSON.parse(
        localStorage.getItem(
            'usuarioLogado'
        )
    );

/* PROTEÇÃO */

/*if (!usuario) {

    alert('Faça login.');

    window.location.href =
        '../login/login.html';
}

/* ADMIN */

if (usuario.nome !== 'LocalizaSenac') {

    alert('Acesso negado.');

    window.location.href =
        '../home/home.html';
}

/* ADICIONAR JOGO */

async function adicionarJogo(event) {

    event.preventDefault();

    const nome =
        document.getElementById('nome').value;

    const genero =
        document.getElementById('genero').value;

    const imagemUrl =
        document.getElementById('imagemUrl').value;

    const nota =
        Number(
            document.getElementById('nota').value
        );

    const descricao =
        document.getElementById('descricao').value;

    const jogo = {

        nome,
        genero,
        imagemUrl,
        nota,
        descricao
    };

    try {

        const response =
            await fetch(
                `${API_BASE}/jogos`,
                {

                    method: 'POST',

                    headers: {
                        'Content-Type':
                            'application/json'
                    },

                    body:
                        JSON.stringify(jogo)
                }
            );

        if (!response.ok) {

            throw new Error(
                'Erro ao adicionar jogo'
            );
        }

        alert('Jogo adicionado!');

        document.querySelector(
            '.admin-form'
        ).reset();

    } catch (err) {

        console.error(err);

        alert('Erro ao salvar jogo.');
    }
}