document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("/api/user");
        const user = await response.json();

        document.getElementById("iconuser").src = user.iconuserUrl;
        document.getElementById("username").textContent = user.username || "Usuário não encontrado.";
        document.getElementById("campus").textContent = user.campus || "Campus não encontrado.";
    } catch (error) {
        console.error("Erro ao carregar as informações de usuário.")
    }
});