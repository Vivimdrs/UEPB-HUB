document.addEventListener('DOMContentLoaded', async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    try {
        const response = await fetch('http://sua-api.com/posts/${postId}'); //tem que substituir esse link ai pela api, botei só pra saber
        const post = await response.json();

        document.getElementById("informacoes-post").innerHTML = `
            <h1 class="titulopostagem" id="titulopostagem">${post.titulo}</h1>
            <hr class="hrstyle">
            <img class="capapostagem" alt="Imagem do post" src="${post.capa}" id="capapostagem">
            <div class="conteudopostagem" id="conteudopostagem">${post.conteudo}</div>`
    } catch (error) {
        console.error("Erro: ", error);
        document.getElementById("informacoes-post").innerHTML = `
            <p>Post não encontrado. <a href="comunidade.html?id=${comunidade.id}">Voltar</a></p>`; //tem que ver onde que pega o id aqui, lembro mais não como faz
    }
});
//tem que pegar as informações do autor do post tbm