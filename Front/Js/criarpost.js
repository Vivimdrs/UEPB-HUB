document.getElementById('formcriarpost').addEventListener('submit', async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const comunidadeId = urlParams.get("id");
    const capapost = document.querySelector(".imagempostagem").files[0];
    const titulopost = document.querySelector(".titulopostagem").value;
    const conteudopost = document.querySelector(".conteudo").value;
    const usuarioId = localStorage.getItem('token');

    alert("Dados a serem enviados: " + JSON.stringify({
        comunidadeId,
        usuarioId,
        titulopost,
        conteudopost,
        imagem: capapost ? capapost.name : null
    }, null, 2));
    

    const formData = new FormData();
    formData.append('titulo', titulopost);
    formData.append('descricao', conteudopost);
    formData.append('matricula', usuarioId);
    formData.append('id_comunidade', comunidadeId);
    formData.append('imagem', capapost);

    try {
        const response = await fetch('http://localhost:8080/posts', { 
            method: 'POST',
            body: formData
        });

        const result = await response.text();

        if (response.ok) {
            alert("Post criado com sucesso!");
            window.location.href = `comunidade.html?id=${comunidadeId}`;
        } else {
            console.error("Erro do servidor:", result);
            alert("Erro ao salvar post: " + result);
        }

    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Falha ao criar post.");
    }
});