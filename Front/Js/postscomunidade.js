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
            throw new Error(`Erro na busca: ${response.status}`);
        }

        const comunidade = await response.json();
        const posts = comunidade.posts;

        const container = document.querySelector('.postagens');
        container.innerHTML = '';

        if (posts.length === 0) {
            container.innerHTML = '<p>Esta comunidade ainda não tem posts.</p>';
        }

        posts.forEach(post => {
            container.innerHTML += `
                <div class="postcomunidade">
                    <div class="containertitulo">
                        <span class="titulopostagem">${post.titulo}</span>
                    </div>
                    <hr class="hr">
                    <div class="icon_autor">
                        <img class="iconautorpostagem" alt="Icon do autor do post" src="img/userdefault.png">
                        <span class="autorpostagem">@${post.author.nomeDeUsuario}</span>
                    </div>
                    <img class="capapostagem" alt="Capa da postagem" src="${post.imagem ? `data:image/png;base64,${post.imagem}` : 'img/postdefault.png'}">
                </div>`;
        });
    } catch (error) {
        console.error("Erro ao carregar posts:", error);
        const container = document.querySelector('.postagens');
        container.innerHTML = '<p>Erro ao carregar posts. Tente novamente.</p>';
    }
});