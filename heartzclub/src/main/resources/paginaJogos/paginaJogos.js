const PLACEHOLDER =
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23181818'/%3E%3Ccircle cx='150' cy='200' r='70' fill='%23262626' stroke='%23c89b3c' stroke-width='6'/%3E%3Ctext x='150' y='225' font-size='90' text-anchor='middle' fill='%23c89b3c' font-family='Arial' font-weight='bold'%3E?%3C/text%3E%3C/svg%3E";

const API_BASE =
    'http://localhost:8080/api';

const gamesContainer =
    document.getElementById('games-container');

const searchInput =
    document.getElementById('search-input');

let todosJogos = [];

/* CARREGAR JOGOS */

async function carregarJogos() {

    try {

        gamesContainer.innerHTML = `

            <p class="loading">
                Carregando jogos...
            </p>

        `;

        const response =
            await fetch(`${API_BASE}/jogos`);

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }

        const jogos =
            await response.json();

        todosJogos = jogos;

        renderizarJogos(jogos);

    } catch (error) {

        console.error(error);

        gamesContainer.innerHTML = `

            <p class="loading">
                Erro ao carregar jogos.
            </p>

        `;
    }
}

/* RENDERIZAR */

function renderizarJogos(jogos) {

    gamesContainer.innerHTML = '';

    // SEM JOGOS
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

        // CARD
        const card =
            document.createElement('article');

        card.className =
            'game-card';

        /* IMAGEM */

        const imagemElemento =
            document.createElement('img');

        imagemElemento.src =
            imagem;

        imagemElemento.className =
            'game-card__img';

        imagemElemento.alt =
            nome;

        imagemElemento.onerror = () => {

            imagemElemento.src =
                PLACEHOLDER;
        };

        /* CONTEÚDO */

        card.innerHTML = `

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

        `;

        card.prepend(imagemElemento);

        gamesContainer.appendChild(card);
    });
}

/* ABRIR JOGO */

function abrirJogo(id) {

    window.location.href =
        `../jogo/jogo.html?id=${id}`;
}

/* PESQUISA */

function pesquisarJogos() {

    const termo =
        searchInput.value.toLowerCase();

    const jogosFiltrados =
        todosJogos.filter(jogo => {

            const nome =
                (jogo.nome || '')
                .toLowerCase();

            const genero =
                (jogo.genero || '')
                .toLowerCase();

            return (

                nome.includes(termo)
                ||

                genero.includes(termo)

            );
        });

    renderizarJogos(jogosFiltrados);
}

/* EVENTO PESQUISA */

if (searchInput) {

    searchInput.addEventListener(
        'input',
        pesquisarJogos
    );
}

/* INICIAR */

carregarJogos();