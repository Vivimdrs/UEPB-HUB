import { alternaSeguir, checaSeSegueComunidade } from "./apiseguir";

document.addEventListener('DOMContentLoaded', async () =>{
    const botaoseguir = document.getElementById("seguircomunidade");
    const seguir = "img/127 Sem Título_20250524145524.png";
    const deixardeseguir = "img/deixar-de-seguir.png";

    //const userId = id do user, tem que fazer alguma coisa pra pegar isso não sei como ainda
    //const comunidadeId = id da comunidade, tem que fazer alguma coisa pra pegar isso não sei como ainda

    const { seguindo } = await checaSeSegueComunidade(userId, comunidadeId);
    atualizaBotao(seguindo);

    function atualizaBotao(seguindo){
        if(seguindo){
            seguir.style.display = "none";
            deixardeseguir.style.display = "block";
        }else{
            seguir.style.display = "block";
            deixardeseguir.style.display = "none";
        }
    }

    //serve tanto pra seguir como dar unfollow na comunidade
    botaoseguir.addEventListener("click", async () =>{
        const estaSeguindo = seguir.style.display === "none";
        let action; //variavel que pode ser declarada depois
        if(estaSeguindo){
            action = "unfollow";
        }else{
            action = "follow";
        }

        await alternaSeguir(userId, comunidadeId, action);
        atualizaBotao(!estaSeguindo);
    });
});