document.addEventListener('DOMContentLoaded', async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const campus = urlParams.get("campus_id");

    function carregarcomunidades(comunidades, seletor) {
        const container = document.querySelector(seletor);
    
        container.innerHTML = comunidades.map(comunidade => `
            <a href="comunidade.html?id=${comunidade.id}" class="link-comunidade">
                <div class="containercomunidade">
                    <aside class="capacomunidade">
                        <img class="fotocomunidade" src="http://localhost:8080/communities/${comunidade.id}/imagem" alt="${comunidade.nome}">
                    </aside>
                    <aside class="informacoescomunidade">
                        <h1 class="nomecomunidade">${comunidade.nome}</h1>
                        <div class="tags">
                            ${(comunidade.tags || []).map(tag => `<div class="tag">${tag}</div>`).join('')}
                        </div>
                        <div class="infoquantidades">
                            <div class="divqntd">
                                <span class="quantidade">${(comunidade.usersIds || []).length}</span>
                                <p class="p">membros</p>
                            </div>
                            <div class="hv"></div>
                            <div class="divqntd">
                                <span class="quantidade">${(comunidade.posts || []).length}</span>
                                <p class="p">posts</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </a>
        `).join('');
    }

    try {
        const response = await fetch(`http://localhost:8080/communities/${encodeURIComponent(campus)}/campus`);
        const comunidades = await response.json();
        carregarcomunidades(comunidades, '#comunidades-em-linha');
        carregarcomunidades(comunidades, '.comunidades-container > div:nth-child(2) .comunidades-em-linha');
    } 
    catch (error) {
        alert('Erro ao buscar comunidades: ' + error);
        window.location.href = 'telaprincipal.html'; 
    }
});