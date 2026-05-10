//Função responsável por carregar o cabeçalho em qualquer página.

function carregarCabecalho() {
    // 1. Procuramos na página atual se existe um elemento com o ID 'header-container'
    const container = document.getElementById('header');

    // 2. Se o container existir, pedimos para o navegador buscar o arquivo 'cabecalho.html'
    if (container) {
        fetch('../cabecalho/cabecalhoMenor.html')
            .then(resposta => {
                // Verifica se o arquivo foi encontrado com sucesso
                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar o cabeçalho.");
                }
                // Converte a resposta para texto (que é o nosso HTML)
                return resposta.text();
            })
            .then(codigoHtml => {
                // 3. Injeta o código HTML dentro da nossa div vazia
                container.innerHTML = codigoHtml;
            })
            .catch(erro => {
                console.error("Erro ao carregar o componente:", erro);
            });
    }
}

// 4. Dizemos ao navegador para executar essa função assim que a página terminar de carregar
document.addEventListener('DOMContentLoaded', carregarCabecalho);