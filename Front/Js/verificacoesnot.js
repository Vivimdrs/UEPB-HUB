if("serviceWorker" in navigator){
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
            return Notification.requestPermission();
        })
        .then(permission =>{
            if(permission === "granted"){
                console.log("Permissão para notificações concedida.");
            }else{
                console.log("Permissão para notificações negada.");
            }
        })
        .catch(error =>{
            console.error("Falha ao registrar o Service Worker: ", error);
        })
}