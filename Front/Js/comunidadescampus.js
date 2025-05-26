document.addEventListener('DOMContentLoaded', async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const campusId = urlParams.get("campus_id");

    if(!campusId){
        window.location.href = 'telaprincipal.html';
        return;
    }

    try {
        const response = await fetch('http://sua-api.com/comunidades?campus=${campusId}'); //tem que lembrar de mudar o link pra ser o link da api, to deixando de exemplo pra saber como tem que ficar
        const comunidades = await response.json();
        carregarComunidades(comunidades, '#comunidades-em-linha');
        carregarComunidades(comunidades, '.comunidades-container > div:nth-child(2) .comunidades-em-linha');
    } catch (error) {
        console.error('Erro ao buscar comunidades: ', error);
        window.location.href = 'telaprincipal.html'; //volta pra pagina inicial
    }
});