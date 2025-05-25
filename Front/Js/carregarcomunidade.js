document.addEventListener('DOMContentLoaded', async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const comunidadeId = urlParams.get("id");

    try {
        const response = await fetch('http://sua-api.com/comunidades/${comunidadeId}'); //tem que substituir esse link ai pela api, botei só pra saber
        const comunidade = await response.json();

        document.getElementById("informacoescomunidade").innerHTML = `
            <aside class="fotocapacomunidade">
                <img class="capacomunidade" alt="Capa da comunidade" src="${comunidade.capa}" id="capacomunidade">
            </aside>
            <aside class="cardinfocomunidade">
                <div class="titulo_botao">
                    <h1 class="nomecomunidade" id="nomecomunidade">${comunidade.nome}</h1>
                    <button class="seguircomunidade" id="seguircomunidade">
                        <img src="img/127 Sem Título_20250524145524.png" alt="Botão de seguir comunidade" class="seguiricon" id="seguiricon">
                    </button>
                </div>
                <div class="infodebaixo">
                    <div class="tags">
                        <div class="tag1" id="tag1">${comunidade.tags[0] || ''}</div>
                        <div class="tag2" id="tag2">${comunidade.tags[1] || ''}</div>
                        <div class="tag3" id="tag3">${comunidade.tags[2] || ''}</div>
                    </div>
                    <div class="infoquantidades">
                        <div class="divqntd">
                            <span class="quantidade" id="qntmembros">${comunidade.qntmembros}</span>
                            <p class="p">membros</p>
                        </div>
                        <div class="hv"></div>
                        <div class="divqntd">
                            <span class="quantidade" id="qntposts">${comunidade.posts}</span>
                            <p class="p">posts</p>
                        </div>
                    </div>
                </div>
            </aside>`;
        
            const botaocriarpost = document.createElement("a");
            botaocriarpost.href = `criarpostagem.html?comunidade_id=${ID_DA_COMUNIDADE}`;
            botaocriarpost.className = 'botaocriarpost';
            botaocriarpost.innerHTML = '<i class="material-icons">add</i>';
            document.body.appendChild(botaocriarpost);
    } catch (error) {
        console.error("Erro: ", error);
        document.getElementById("informacoescomunidade").innerHTML = `
            <p>Comunidade não encontrada. <a href="telaprincipal.html">Voltar</a></p>`;
    }
})