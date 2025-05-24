document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/api/user");
        const usernovocoment = await response.json();

        document.getElementById("iconuser").src = usernovocoment.iconuserUrl || "Foto de perfil não encontrada.";
    } catch (error) {
        console.error("Erro ao carregar as informações de usuário.")
    }
})