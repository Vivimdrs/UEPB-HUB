async function pesquisar(){
    const termo = document.getElementById("pesquisar").ariaValueMax;
    const resultados = document.getElementById("");//tem que criar uma pagina pra aparecer os resultado AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    
    if(termo.length < 2){
        resultados.innerHTML = "";
        return;
    }

    //ei vei tem que ter isso mesmo? pode ficar de fora não? tem que fazer uma pagina todinha a mais, não tinha me ligado *figurinha do gatinho gritando*
    try{
        const response = await fetch('API LA DO BANCO DE DADOS'); ///api/posts/pesquisar?termo=${encodeURIComponent(termo)}
        const comunidades = awai response.json();

        resultados.innerHTML = comunidades.map(comunidade => `
            bota as div aqui dentro`
        ).join("");
    }catch(error){
        resultados.innerHTML = "Erro ao buscar comunidades.";
    }
}