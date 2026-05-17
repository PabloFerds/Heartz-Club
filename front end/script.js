const API_URL = 'http://localhost:8080/api/products';

// Referências aos elementos que vamos manipular
const grid = document.getElementById('productGrid');
const badge = document.getElementById('apiBadge');
const badgeText = document.getElementById('badgeText');
const resultsDiv = document.getElementById('resultsCount');
const countSpan = document.getElementById('productCount');


/**
 * Formata um número como moeda brasileira.
 * Ex: 1199 → "R$ 1.199,00"
 */
function formatPrice(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}


/**
 * Gera o HTML de um card de produto.
 *
 * Recebe o objeto product que veio do JSON da API
 * e retorna uma string de HTML.
 *
 * Estrutura do objeto (igual ao Java Record):
 *   { id, name, description, price, category, imageUrl }
 */
function createCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <img
          class="card-img"
          src="${product.imageUrl}"
          alt="${product.name}"
          loading="lazy"
        />
        <div class="card-body">
          <span class="card-category">${product.category}</span>
          <h2 class="card-name">${product.name}</h2>
          <p class="card-description">${product.description}</p>
          <div class="card-footer">
            <span class="card-id">#${product.id}</span>
            <span class="card-price">${formatPrice(product.price)}</span>
          </div>
        </div>
      `;

    return card;
}


/**
 * Busca os produtos na API e renderiza os cards.
 *
 * fetch() retorna uma Promise — é a API moderna do browser
 * para fazer requisições HTTP sem precisar de jQuery ou Axios.
 *
 * async/await torna o código mais legível do que .then()/.catch().
 */
async function fetchProducts() {

    // Garante que os skeletons estejam visíveis enquanto carrega
    // (caso o usuário clique em "tentar novamente")
    grid.innerHTML = `
        <div class="skeleton-card">
          <div class="skeleton-img"></div>
          <div class="skeleton-body">
            <div class="skeleton-line short"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line"></div>
          </div>
        </div>
        <div class="skeleton-card">
          <div class="skeleton-img"></div>
          <div class="skeleton-body">
            <div class="skeleton-line short"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line"></div>
          </div>
        </div>
        <div class="skeleton-card">
          <div class="skeleton-img"></div>
          <div class="skeleton-body">
            <div class="skeleton-line short"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line"></div>
          </div>
        </div>
      `;

    try {
        // ── 1. FAZ A REQUISIÇÃO ──────────────────────────────────
        // fetch() retorna uma Promise<Response>.
        // O segundo argumento é opcional — aqui explicitamos o método
        // GET e o header Accept para fins didáticos.
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        // ── 2. VERIFICA O STATUS HTTP ────────────────────────────
        // response.ok é true quando o status está entre 200–299.
        // Se a API retornar 404, 500, etc, lançamos um erro manualmente.
        if (!response.ok) {
            throw new Error(`Status HTTP: ${response.status}`);
        }

        // ── 3. CONVERTE PARA JSON ────────────────────────────────
        // response.json() lê o body da resposta e converte para objeto JS.
        // Isso também é assíncrono, por isso outro await.
        const products = await response.json();

        // ── 4. LIMPA OS SKELETONS ────────────────────────────────
        grid.innerHTML = '';

        // ── 5. RENDERIZA OS CARDS ────────────────────────────────
        products.forEach((product, index) => {
            const card = createCard(product);

            grid.appendChild(card);

            // Animação de entrada staggered:
            // cada card aparece com um pequeno delay a mais que o anterior.
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 80);
        });

        // ── 6. ATUALIZA O CONTADOR E O BADGE ────────────────────
        countSpan.textContent = products.length;
        resultsDiv.style.display = 'block';

        badge.className = 'api-badge ok';
        badgeText.textContent = 'API conectada';

    } catch (error) {
        // ── TRATAMENTO DE ERRO ───────────────────────────────────
        // Chegamos aqui se:
        //   a) A API não está rodando (Connection refused)
        //   b) A API retornou um status de erro (4xx, 5xx)
        //   c) A resposta não é um JSON válido

        console.error('Erro ao buscar produtos:', error);

        // Atualiza o badge para o estado de erro
        badge.className = 'api-badge err';
        badgeText.textContent = 'API offline';

        // Substitui o grid pelo estado de erro
        grid.innerHTML = `
          <div class="error-state">
            <div class="error-icon">⚡</div>
            <h2>Não foi possível carregar</h2>
            <p>
              Verifique se o servidor Spring Boot está rodando em
              <code>localhost:8080</code> e tente novamente.
            </p>
            <button class="btn-retry" onclick="fetchProducts()">
              Tentar novamente
            </button>
          </div>
        `;
    }
}