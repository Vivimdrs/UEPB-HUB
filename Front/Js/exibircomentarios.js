document.addEventListener('DOMException', async () =>{
    const urlParams = new URLSearchParams(window.location.seacrh);
    const postId = urlParams.get(postId);

    try {
        const response = await fetch("api dos users");
        const novocomentuser = await response.json();
        document.getElementById("iconuser").src = novocomentuser.iconuserUrl || "Foto de perfil não encontrada";

        const responseComentarios = await fetch(`/api/comentarios/${postId}`);
        const comentarios = await responseComentarios.json();

        comentarios.forEach(comentario => {
            adicionarComentarionaTela(comentario); //a função dessa aqui ta lá em enviarcomentario.js
        });
    } catch (error) {
        console.log("Erro ao carregar comentários: ", error);
    }
});