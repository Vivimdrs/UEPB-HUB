document.addEventListener('DOMContentLoaded', async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const termo = urlParams.get("termo");
    const container = document.getElementById("resultados-pesquisa");

    try {
        const response = await fetch('http://sua-api.com/comunidades?busca=${encodeURIComponent(termo)}'); //tem que substituir esse link ai pela api, botei só pra saber
        const comunidades = await response.json();

        if(comunidades.nome.length === 0){
            container.innerHTML = `
                <p class="sem-resultados">Nenhuma comunidade encontrada para "<strong>${termo}</strong>".</p>
            `;
        }else{ //esse "comunidade.id" no klink é pra levar pra comunidade que ta aparecendo
            container.innerHTML = comunidades.map(comunidade => `
                <a href="comunidade.html?id=${comunidade.id}" class="link-comunidade"> 
                <div class="containercomunidade" id="resultados-pesquisa">
                    <aside class="capacomunidade">
                        <img class="fotocomunidade" src="${comunidade.capa}" id="${comunidade.nome}">
                    </aside>
                    <aside class="informacoescomunidade">
                        <h1 class="nomecomunidade" id="nomecomunidade">${comunidade.nome}</h1>
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
                    </aside>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error("Erro na busca: ", error);
        container.innerHTML = `
            <p class="erro-busca">Erro ao carregar comunidades. Tente novamente mais tarde.</p>
        `;
    }
})