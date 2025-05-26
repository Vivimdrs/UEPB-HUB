document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const comunidadeId = urlParams.get("id");

    if (!comunidadeId) {
        alert('ID da comunidade não encontrado na URL');
        window.location.href = 'telaprincipal.html';
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/communities/${comunidadeId}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar comunidade: ${response.status}`);
        }

        const comunidade = await response.json();
        console.log("Comunidade recebida:", comunidade);

        const containerPostagens = document.querySelector('.postagens');
        containerPostagens.innerHTML = '';

        if (comunidade.posts.length === 0) {
            containerPostagens.innerHTML = `<p>Essa comunidade ainda não possui posts.</p>`;
        } else {
            comunidade.posts.forEach(post => {
                const postElement = document.createElement('a');
                postElement.href = `post.html?id=${post.id}`;
                postElement.className = 'linkpost';

                postElement.innerHTML = `
                    <div class="postcomunidade">
                        <div class="containertitulo">
                            <span class="titulopostagem">${post.titulo}</span>
                        </div>
                        <hr class="hr">
                        <div class="icon_autor">
                            <img class="iconautorpostagem" src="img/iconpadrao.png" alt="Icon do autor">
                            <span class="autorpostagem">${post.autorNome}</span>
                        </div>
                        <img class="capapostagem" src="${post.imagem ? `data:image/png;base64,${post.imagem}` : 'img/capapadrao.png'}" alt="Capa da postagem">
                    </div>
                `;

                containerPostagens.appendChild(postElement);
            });
        }

    } catch (error) {
        console.error("Erro ao carregar comunidade:", error);
        alert('Erro ao carregar dados da comunidade.');
    }
});
