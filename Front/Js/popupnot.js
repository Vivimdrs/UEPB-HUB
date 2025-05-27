document.getElementById("sininho").addEventListener("click", () =>{
    const popup = document.getElementById("notificacao");
    popup.classList.toggle("hidden");
})

function adicionaNot(message){
    const itemNot = document.createElement('li');
    itemNot.textContent = message;
    document.getElementById('info-notificacao').appendChild(itemNot);
}

adicionaNot('Você tem uma nova notificação!');