document.getElementById('formcriarpost').addEventListener('submit', async (e) =>{
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const comunidadeId = urlParams.get("id");
    const capapost = document.getElementById("imagempostagem").files[0];
    const titulopost = document.getElementById("titulopostagem").value;
    const conteudopost = document.getElementById("conteudo").value;
    const usuarioId = localStorage.getItem("usuarioId");

    const formData = new FormData();
    formData.append('comunidadeId', comunidadeId);
    formData.append('capapost', capapost);
    formData.append('titulopost', titulopost);
    formData.append('conteudopost', conteudopost);
    formData.append('usuarioId', usuarioId);
    formData.append('postId', id); //tem que criar o id

    try {
        const response = await fetch('', { //dentro das aspas é o link da api de post
            method:'POST',
            body: formData
        });
        if(response.ok){
            alert("Post criado com sucesso!");
            window.location.href = `comunidade.html?id=${comunidadeId}`;
        }
    } catch (error) {
        console.error('Error: ', error);
        alert("Falha ao criar post.")
    }
});