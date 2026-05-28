const PLACEHOLDER = `data:image/svg+xml;charset=UTF-8,
<svg xmlns='http://www.w3.org/2000/svg'
width='300'
height='400'
viewBox='0 0 300 400'>

<rect
width='300'
height='400'
fill='%23181818'
/>

<circle
cx='150'
cy='200'
r='70'
fill='%23262626'
stroke='%23c89b3c'
stroke-width='6'
/>

<text
x='150'
y='225'
font-size='90'
text-anchor='middle'
fill='%23c89b3c'
font-family='Arial'
font-weight='bold'
>
?
</text>

</svg>`;

const API_BASE = 'http://localhost:8080/api';

document.addEventListener('DOMContentLoaded', () => {

  const stored =
  localStorage.getItem('usuarioLogado');

  const profileAvatar =
  document.getElementById('profileAvatar');

  const profileName =
  document.getElementById('profileName');

  const profileDescription =
  document.getElementById('profileDescription');

  const editarBtn =
  document.getElementById('editarPerfilBtn');

  const editarForm =
  document.getElementById('editarPerfilForm');

  const inputNome =
  document.getElementById('inputNome');

  const inputFoto =
  document.getElementById('inputFoto');

  const cancelBtn =
  document.getElementById('cancelEdit');

  const defaultAvatar =
  'https://upload.wikimedia.org/wikipedia/en/9/9d/Bonzi_Buddy.png';

  if (!stored) {

    profileAvatar.src = defaultAvatar;

    profileName.innerText = 'Usuário';

    profileDescription.style.display = 'none';

    return;
  }

  let usuario = JSON.parse(stored);

  let selectedPhoto = null;

  function render() {

    profileName.innerText =
    usuario.nome || 'Usuário';

    profileAvatar.src =
    usuario.fotoPerfil || defaultAvatar;

    if (usuario.descricao) {

      profileDescription.innerText =
      usuario.descricao;

      profileDescription.style.display =
      'block';

    } else {

      profileDescription.innerText = '';

      profileDescription.style.display =
      'none';

    }

  }

  render();

  carregarFavoritos();

  editarBtn.addEventListener('click', () => {

    inputNome.value =
    usuario.nome || '';

    inputFoto.value = '';

    selectedPhoto = null;

    editarForm.style.display =
    'block';

    editarBtn.style.display =
    'none';

  });

  inputFoto.addEventListener('change', () => {

    const file =
    inputFoto.files && inputFoto.files[0];

    if (!file) {

      selectedPhoto = null;

      profileAvatar.src =
      usuario.fotoPerfil || defaultAvatar;

      return;
    }

    const reader = new FileReader();

    reader.onload = () => {

      selectedPhoto = reader.result;

      profileAvatar.src =
      selectedPhoto;

    };

    reader.readAsDataURL(file);

  });

  cancelBtn.addEventListener('click', () => {

    selectedPhoto = null;

    render();

    editarForm.style.display =
    'none';

    editarBtn.style.display =
    'inline-block';

  });

  editarForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const novoNome =
    inputNome.value.trim();

    if (!novoNome) {

      alert('Nome não pode ser vazio');

      return;
    }

    const payload = {

      nome: novoNome,

      email: usuario.email,

      idade: usuario.idade,

      cpf: usuario.cpf,

      endereco: usuario.endereco || '',

      senha: usuario.senha || '',

      confirmaSenha: usuario.senha || ''

    };

    try {

      const response = await fetch(
        `${API_BASE}/usuarios/${usuario.id}`,
        {

          method: 'PUT',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(payload)

        }
      );

      if (!response.ok) {

        const txt =
        await response.text();

        throw new Error(txt);

      }

      const updated =
      await response.json();

      usuario = {

        ...updated,

        fotoPerfil:
        selectedPhoto || usuario.fotoPerfil

      };

      localStorage.setItem(
        'usuarioLogado',
        JSON.stringify(usuario)
      );

      render();

      editarForm.style.display =
      'none';

      editarBtn.style.display =
      'inline-block';

      alert('Perfil atualizado!');

    } catch (err) {

      console.error(err);

      alert('Erro ao atualizar perfil.');

    }

  });

});

async function carregarFavoritos() {

  const ul =
  document.getElementById('favoritos-list');

  const usuario =
  JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuario) return;

  try {

    const response = await fetch(
      `${API_BASE}/favoritos/usuario/${usuario.id}`
    );

    if (!response.ok) {
      throw new Error();
    }

    const favoritos =
    await response.json();

    ul.innerHTML = '';

    if (!favoritos || favoritos.length === 0) {

      ul.innerHTML = `

        <p class="empty-message">

          Você ainda não possui jogos favoritos.

          Seus jogos aparecerão aqui
          após favoritar 🎮

        </p>

      `;

      return;
    }

    favoritos.forEach(f => {

      const jogo = f.jogo;

      ul.innerHTML += `

        <li class="game">

          <a href="../jogo/jogo.html?id=${jogo.id}">

           f.jogo.imagemUrl

          </a>

        </li>

      `;

    });

  } catch (err) {

    console.error(err);

    ul.innerHTML = `

      <p class="empty-message">
        Erro ao carregar favoritos.
      </p>

    `;

  }

} 