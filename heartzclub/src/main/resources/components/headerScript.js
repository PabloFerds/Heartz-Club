const nav = document.getElementById("nav");

// PEGA USUÁRIO
const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado")
);

// USUÁRIO LOGADO
if (usuario) {

    nav.innerHTML = `

        <a href="#" class="nav__link">
            Jogos
        </a>

        <div class="perfil-header">

            <img
                src="https://i.imgur.com/HeIi0wU.png"
                class="foto-perfil"
            >

            <span class="nome-usuario">
                ${usuario.nome}
            </span>

            <button
                class="btn-sair"
                onclick="logout()"
            >
                Sair
            </button>

        </div>
    `;

} else {

    // NÃO LOGADO
    nav.innerHTML = `

        <a href="#" class="nav__link">
            Jogos
        </a>

        <a
            href="/heartzclub/src/main/resources/login/login.html"
            class="nav__link"
        >
            Login
        </a>

        <a
            href="/heartzclub/src/main/resources/cadastro/cadastro.html"
            class="nav__link"
        >
            Cadastro
        </a>
    `;
}

// LOGOUT
function logout() {

    localStorage.removeItem("usuarioLogado");

    window.location.href =
        "/heartzclub/src/main/resources/home/home.html";
}