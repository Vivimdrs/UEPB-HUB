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

        document.getElementById('nomecomunidade').textContent = comunidade.nome;
        const tags = comunidade.tags;
        document.getElementById('tag1').textContent = tags[0] || '';
        document.getElementById('tag2').textContent = tags[1] || '';
        document.getElementById('tag3').textContent = tags[2] || '';
        document.getElementById('qntmembros').textContent = comunidade.usersIds.length;
        document.getElementById('qntposts').textContent = comunidade.posts.length;
        const capa = document.getElementById('capacomunidade');
        capa.src = comunidade.imagem ? `data:image/png;base64,${comunidade.imagem}` : 'img/capapadrao.png';

    } catch (error) {
        console.error("Erro ao carregar comunidade:", error);
        alert('Erro ao carregar dados da comunidade.');
    }
});
