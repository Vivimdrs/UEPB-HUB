document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (!postId) {
        alert('ID do post não encontrado na URL');
        window.location.href = 'telaprincipal.html';
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/posts/${postId}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar post: ${response.status}`);
        }

        const post = await response.json();
        console.log("Post recebido:", post);

        document.getElementById('titulopostagem').textContent = post.titulo;
        document.getElementById('conteudopostagem').textContent = post.descricao;

        const capa = document.getElementById('capapostagem');
        capa.src = post.imagem ? `data:image/png;base64,${post.imagem}` : 'img/capapadrao.png';

        // Informações do autor
        document.getElementById('autorpostagem').textContent = post.author.nomeDeUsuario;
        document.getElementById('campus').textContent = post.author.campus;
        const iconUser = document.getElementById('iconuserautor');
        iconUser.src =  iconUser.src = post.author.imagem ? `data:image/png;base64,${post.author.imagem}`: 'img/capapadrao.png';


    } catch (error) {
        console.error("Erro ao carregar post:", error);
        alert('Erro ao carregar dados do post.');
    }
});
