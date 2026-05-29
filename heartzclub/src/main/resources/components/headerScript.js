const BASE = '/heartzclub/src/main/resources';

function carregarHeader() {

    const nav = document.getElementById("nav");

    // ESPERA O HEADER EXISTIR
    if (!nav) {

        setTimeout(
            carregarHeader,
            100
        );

        return;

    }

    // PEGA USUÁRIO
    const usuario =
        JSON.parse(
            localStorage.getItem(
                "usuarioLogado"
            )
        );

    console.log(usuario);

    // LOGADO
    if (usuario) {

        nav.innerHTML = `

    <a
        href="${BASE}/paginaJogos/paginaJogos.html"
        class="nav__link"
    >
        Jogos
    </a>



        <a href="${BASE}/perfil/perfil.html">

            <span class="nome-usuario">
                ${usuario.nome}
            </span>

        </a>

        <button
            class="btn-sair"
            onclick="logout()"
        >
            Sair
        </button>

    </div>
`;

    }

    // NÃO LOGADO
    else {

        nav.innerHTML = `

            <a
                href="${BASE}/paginaJogos/paginaJogos.html"
                class="nav__link"
            >
                Jogos
            </a>

            <a
                href="${BASE}/login/login.html"
                class="nav__link"
            >
                Login
            </a>

            <a
                href="${BASE}/cadastro/cadastro.html"
                class="nav__link"
            >
                Cadastro
            </a>

        `;

    }

    configurarPesquisa();

}

/* =========================
   PESQUISA
========================= */

function configurarPesquisa() {

    const input =
        document.getElementById(
            'header-search-input'
        );

    const button =
        document.getElementById(
            'search-button'
        );

    if (!input || !button) {
        return;
    }

    // CLICK NO BOTÃO
    button.addEventListener(
        'click',
        pesquisar
    );

    // ENTER
    input.addEventListener(
        'keydown',
        (e) => {

            if (e.key === 'Enter') {

                pesquisar();

            }

        }
    );

}

function pesquisar() {

    const input =
        document.getElementById(
            'header-search-input'
        );

    const termo =
        input.value.trim();

    if (!termo) return;

    window.location.href =
        `${BASE}/pesquisa/pesquisa.html?query=${encodeURIComponent(termo)}`;

}

/* =========================
   LOGOUT
========================= */

function logout() {

    localStorage.removeItem(
        "usuarioLogado"
    );

    window.location.href =
        `${BASE}/home/home.html`;

}

/* =========================
   INICIAR
========================= */

carregarHeader();