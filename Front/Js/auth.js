const formLogin = document.getElementById('formLogin');
const formCriar = document.getElementById('formCriar');

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputs = formLogin.querySelectorAll('input');
    const matricula = inputs[0].value;
    const senha = inputs[1].value;   

    const login = new FormData();
    login.append('matricula', matricula);
    login.append('senha', senha);

    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            body: login
        });

        if (!response.ok) {
            throw new Error('Matrícula ou senha inválidos');
        }

        const data = await response.json();

        localStorage.setItem('matricula', data.matricula);

        alert('Login realizado com sucesso!');
        window.location.href = 'telaprincipal.html';
    } catch (error) {
        alert('Erro no login: ' + error.message + "Senha: " + senha);
    }
});

formCriar.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputs = formCriar.querySelectorAll('input');
    const nome = inputs[0].value;
    const nomeDeUsuario = inputs[1].value;
    const matricula = inputs[2].value;
    const email = inputs[3].value;
    const dataNascimento = inputs[4].value;
    const senha = inputs[5].value;
    const confirmarSenha = inputs[6].value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
   
    const campus = 'CAMPUSVII'; 
    const curso = 'COMPUTACAO';
    const descricao = 'Olá! Sou novo por aqui.';

    const formData = new FormData();
    formData.append('matricula', matricula);
    formData.append('nome', nome);
    formData.append('nomeDeUsuario', nomeDeUsuario);
    formData.append('email', email);
    formData.append('campus', campus);
    formData.append('curso', curso);
    formData.append('dataNascimento', dataNascimento);
    formData.append('senha', senha);
    formData.append('descricao', descricao);
    formData.append('imagem', null); 
    try {
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Erro ao criar conta');
        }

        alert('Conta criada com sucesso!');
        formCriar.reset();
        document.getElementById('btnLogin').click();
    } catch (error) {
        alert('Erro no cadastro: ' + error.message+ dataNascimento);
    }
});