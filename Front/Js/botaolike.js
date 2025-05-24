document.addEventListener('DOMContentLoaded', () =>{
    const botaolike = document.getElementById("botaolike");
    const likeicon = document.getElementById("likeicon");

    const semlike = "img/likevazio.png";
    const comlike = "img/likecompleto.png";

    let temlike = false;

    botaolike.addEventListener("click", () =>{
        temlike = !temlike;
        if(temlike){
            likeicon.src = comlike;
        }else{
            likeicon.src = semlike;
        }
    });
});