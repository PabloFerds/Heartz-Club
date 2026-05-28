const API_BASE =
'http://localhost:8080/api';

const PLACEHOLDER =
'https://placehold.co/300x400?text=Sem+Capa';

const gamesContainer =
document.getElementById('games-container');

const params =
new URLSearchParams(
    window.location.search
);

const query =
params.get('query') || '';

async function carregarPesquisa() {

    try {

        const response =
        await fetch(`${API_BASE}/jogos`);

        if (!response.ok) {
            throw new Error();
        }

        const jogos =
        await response.json();

        const filtrados =
        jogos.filter(jogo => {

            const nome =
            (jogo.nome || '')
            .toLowerCase();

            const genero =
            (jogo.genero || '')
            .toLowerCase();

            return (

                nome.includes(
                    query.toLowerCase()
                )

                ||

                genero.includes(
                    query.toLowerCase()
                )

            );

        });

        renderizarJogos(filtrados);

    } catch (err) {

        console.error(err);

        gamesContainer.innerHTML = `

            <p class="loading">
                Erro ao pesquisar jogos.
            </p>

        `;
    }
}

function renderizarJogos(jogos) {

    gamesContainer.innerHTML = '';

    if (!jogos || jogos.length === 0) {

        gamesContainer.innerHTML = `

            <p class="loading">
                Nenhum jogo encontrado.
            </p>

        `;

        return;
    }

    jogos.forEach(jogo => {

        const nome =
        jogo.nome || 'Sem nome';

        const genero =
        jogo.genero || 'Sem gênero';

        const imagem =
        jogo.imagemUrl || PLACEHOLDER;

        const nota =
        jogo.nota || 0;

        const id =
        jogo.id || 0;

        gamesContainer.innerHTML += `

            <article class="game-card">

                <img
                    src="${imagem}"
                    class="game-card__img"
                    alt="${nome}"
                >

                <div class="game-card__content">

                    <h2 class="game-card__title">
                        ${nome}
                    </h2>

                    <p class="game-card__genre">
                        ${genero}
                    </p>

                    <div class="game-card__rating">

                        ⭐ ${nota}

                    </div>

                    <button
                        class="game-card__button"
                        onclick="abrirJogo(${id})"
                    >
                        Ver jogo
                    </button>

                </div>

            </article>

        `;
    });

}

function abrirJogo(id) {

    window.location.href =
    `../jogo/jogo.html?id=${id}`;

}

carregarPesquisa();