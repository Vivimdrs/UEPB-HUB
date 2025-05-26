//dentro dessas aspas simples vai o url da api de java 'https://sua-api.com/posts'
fetch('')
    .then(Response => Response.json())
    .then(posts =>{ //lista de posts da comunidade
        const container = document.querySelector('.postagens');

        posts.forEach(post => {
            container.innerHTML += `
            <a href="post.html?id=${post.id}" class="linkpost">
                <div class="postcomunidade">
                    <div class="containertitulo"><span class="titulopostagem" id="titulopostagem">${post.titulo}</span></div>
                    <hr class="hr">
                    <div class="icon_autor">
                        <img class="iconautorpostagem" alt="Icon do autor do post" src="${post.iconuserautor}" id="iconautorpostagem">
                        <span class="autorpostagem" id="autorpostagem">@${post.userautor}</span>
                    </div>
                    <img class="capapostagem" alt="Capa da postagem" src="${post.capa}" id="capapostagem">
                </div>
            </a>`;
        });
    })
    .catch(error => {
        console.error(error);
        const container = document.querySelector('.postagens');
        container.innerHTML = '<p>Erro ao carregar posts. Tente novamente.</p>';
    });