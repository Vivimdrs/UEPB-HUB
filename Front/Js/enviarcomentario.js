async function enviarcomentario(){
    const comentario = document.getElementById("novocomentario").value;
    
    //const postId = não sei, sei que tem que pegar o id
    //const usuarioId = msm coisa do id do post

    if(comentario.trim() === ''){
        alert('Não é possível enviar comentário vazio.');
        return;
    }
    
    try{
        const response = await fetch('/api/comentario', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                texto: comentario,
                postId: postId,
                usuarioId: usuarioId})
        });

        if(!Response.ok){
            throw new Error('Erro ao enviar comentário');
        }
        
        const comentarioSalvo = await response.json();
        adicionarComentarionaTela(comentarioSalvo);
        document.getElementById("novocomentario").value = '';
    }catch(error){
        console.error("Erro: ", error)
        alert('Erro ao enviar comentário: ' + error.message);
    }
}

function adicionarComentarionaTela(comentario){
    const comentarioslista = document.getElementById("comentarioslista");
    comentarioslista.innerHTML += `
        <div class="comentinfo">
            <img class="iconusercoment" alt="Icon de usuario" src="${comentario.iconusercoment}" id="iconusercoment">
            <span class="usernamecoment" id="usernamecoment">@${comentario.userautorcoment}</span>
        </div>
        <p class="comentarios" id="comentarios">${comentario.coment}</p>`
}