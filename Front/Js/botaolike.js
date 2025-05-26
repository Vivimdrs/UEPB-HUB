document.addEventListener('DOMContentLoaded', () =>{
    const botaolike = document.getElementById("botaolike");
    const likeicon = document.getElementById("likeicon");

    const semlike = "img/likevazio.png";
    const comlike = "img/likecompleto.png";

    let temlike = false;

    botaolike.addEventListener("click", async () =>{
        temlike = !temlike;
        if(temlike){
            likeicon.src = comlike;
        }else{
            likeicon.src = semlike;
        }

        const urlParams = new URLSearchParams(window.location.seacrh);
        const postId = urlParams.get(postId);

        try { //tem que mudar a api
            await fetch("/api/like", {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('matricula')
                },
                body: JSON.stringify({postId: postId})
            });
        } catch (error) {
            console.log("Erro ao enviar like: ", error);
            alert("Erro ao curtir/descurtir post.");
            temlike = !temlike;
            if(temlike){
                likeicon.src = comlike;
            }else{
                likeicon.src = semlike;
            }
        }
    });
});