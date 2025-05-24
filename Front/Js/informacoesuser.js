document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("/api/user");
        const user = await response.json();

        document.getElementById("iconuserautor").src = user.iconuserautorUrl || "Foto de perfil não encontrada.";
        document.getElementById("usernameautor").textContent = user.usernameautor || "Usuário não encontrado.";
        document.getElementById("campusautor").textContent = user.campusautor || "Campus não encontrado.";
    } catch (error) {
        console.error("Erro ao carregar as informações de usuário.")
    }
});