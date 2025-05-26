function carregarComunidades(comunidades, seletorContainer){
    const container = document.querySelector(seletorContainer);

    if(comunidades.length === 0){
        container.innerHTML = '<p>Nenhuma comunidade encontrada neste campus.</p>';
        return;
    }

    container.innerHTML = comunidades.map(comunidade =>`
        <a href="comunidade.html?id=${comunidade.id}" class="linkcomunidade">
            <div class="card-comunidade">
                <img src="${comunidade.capa}" alt="${comunidade.nome}">
                <h5>${comunidade.nome}</h5>
            </div>
        </a>`
    ).join('');
}