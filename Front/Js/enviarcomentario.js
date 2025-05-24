function enviarcomentario(){
    const comentario = document.getElementById("novocomentario").value;
    
    if(comentario.trim() === ''){
        alert('Não é possível enviar comentário vazio.');
        return;
    }
    
    fetch('/api/comentario', {
        method: POST,
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({text: comentario})
    })
    .then(Response =>{
        if(!Response.ok){
            throw new Error('Erro ao enviar comentário');
        }
        return Response.json();
    })
    .then(data => {
        alert('Comentário enviado.');
        document.getElementById(comentario).value = '';
    })
    .catch(error => {
        alert('Erro ao enviar comentário.' + error.message);
    });
}