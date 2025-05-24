function ajustarAlturaComentarios(){
    const post = document.getElementById("conteudopostagem");
    const comentarios = document.getElementById("comentarioslista");

    const alturaPost = post.offsetHeight;

    if (alturaPost < 600){
        comentarios.style.maxHeight = "200px";
    }else{
        comentarios.style.maxHeight = alturaPost + "px";
    }

    document.addEventListener("DOMContentLoaded", () => {
      ajustarAlturaComentarios();
      window.addEventListener("resize", ajustarAlturaComentarios);
    });
}

//NÃO TA FUNCIONANDO ESTA PORRA