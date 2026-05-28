const API_BASE = 'http://localhost:8080/api';

const PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'
width='200' height='267'
viewBox='0 0 200 267'%3E%3Crect
width='200' height='267' fill='%232a2a2a'/%3E%3Ctext x='100' y='140'
text-anchor='middle' fill='%23666' font-family='sans-serif'
font-size='11'%3ESem capa%3C/text%3E%3C/svg%3E`;

const usuarioLogado =
JSON.parse(localStorage.getItem('usuarioLogado') || 'null');

const params = new URLSearchParams(window.location.search);

const jogoId = params.get('id');

async function carregarJogo() {

  if (!jogoId) {

    document.getElementById('game-title').textContent =
    'Jogo não encontrado.';

    return;
  }

  try {

    const res = await fetch(`${API_BASE}/jogos/${jogoId}`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const jogo = await res.json();

    document.title = `${jogo.nome} | Heartz Club`;

    const img = jogo.imagemUrl || PLACEHOLDER;

    const banner =
document.getElementById('banner-img');

const cover =
document.getElementById('cover-img');

banner.src = img;
cover.src = img;

banner.onerror = () => {
    banner.src = PLACEHOLDER;
};

cover.onerror = () => {
    cover.src = PLACEHOLDER;
};

    document.getElementById('game-title').textContent =
    jogo.nome;

    document.getElementById('game-description').textContent =
    jogo.descricao;

    document.getElementById('stat-nota').textContent =
    `${jogo.nota}/10 ⭐`;

    document.getElementById('stat-genero').textContent =
    jogo.genero;

    document.getElementById('stat-media').textContent =
    `${jogo.mediaNotas}/10`;

  } catch (err) {

    console.error(err);

  }

}

async function favoritarJogo() {

  if (!usuarioLogado) {
    alert('Faça login.');
    return;
  }

  try {

    const response = await fetch(`${API_BASE}/favoritos`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        usuarioId: usuarioLogado.id,
        jogoId: Number(jogoId)
      })

    });

    if (!response.ok) {
      throw new Error();
    }

    alert('Jogo favoritado!');

  } catch (err) {

    console.error(err);

    alert('Erro ao favoritar.');

  }

}

async function marcarComoJogado() {

  if (!usuarioLogado) {
    alert('Faça login.');
    return;
  }

  try {

    const response = await fetch(`${API_BASE}/jogados`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        usuarioId: usuarioLogado.id,
        jogoId: Number(jogoId)
      })

    });

    if (!response.ok) {
      throw new Error();
    }

    alert('Jogo marcado como jogado!');

  } catch (err) {

    console.error(err);

    alert('Erro ao salvar.');

  }

}

async function avaliarJogo() {

  if (!usuarioLogado) {
    alert('Faça login.');
    return;
  }

  const nota = prompt('Digite uma nota de 0 a 10');

  if (!nota) return;

  try {

    const response = await fetch(`${API_BASE}/avaliacoes`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({

        usuarioId: usuarioLogado.id,
        jogoId: Number(jogoId),
        nota: Number(nota)

      })

    });

    if (!response.ok) {
      throw new Error();
    }

    alert('Avaliação enviada!');

  } catch (err) {

    console.error(err);

    alert('Erro ao avaliar.');

  }

}

async function carregarComentarios() {

  const lista = document.getElementById('comments-list');

  try {

    const res = await fetch(
      `${API_BASE}/comentarios-jogo/jogo/${jogoId}`
    );

    const comentarios = await res.json();

    lista.innerHTML = '';

    comentarios.forEach(c => {

      lista.innerHTML += `
        <div class="comment-card">

          <div class="comment-header">

            <h3>${c.usuario.nome}</h3>

          </div>

          <p class="comment-text">
            ${c.texto}
          </p>

        </div>
      `;

    });

  } catch (err) {

    console.error(err);

  }

}

async function enviarComentario() {

  const input = document.getElementById('comment-input');

  const texto = input.value.trim();

  if (!texto) return;

  try {

    await fetch(`${API_BASE}/comentarios-jogo`, {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({

        texto,
        jogoId: Number(jogoId),
        usuarioId: usuarioLogado.id

      })

    });

    input.value = '';

    carregarComentarios();

  } catch (err) {

    console.error(err);

  }

}

document.addEventListener('DOMContentLoaded', async () => {

  if (usuarioLogado) {

    document.getElementById('comment-form-area').style.display =
    'flex';

  } else {

    document.getElementById('comment-login-notice').style.display =
    'block';

  }

  await carregarJogo();

  await carregarComentarios();

});