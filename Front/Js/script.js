document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const btnCriar = document.getElementById('btnCriar');
    const formLogin = document.getElementById('formLogin');
    const formCriar = document.getElementById('formCriar');
    const botaocor = document.getElementById('botaocor');
  
    // Estado inicial: mostrar login
    formLogin.classList.add('active');
    formCriar.classList.remove('active');
    botaocor.style.left = '0px';
  
    btnLogin.addEventListener('click', () => {
      formLogin.classList.add('active');
      formCriar.classList.remove('active');
      botaocor.style.left = '0px';
    });
  
    btnCriar.addEventListener('click', () => {
      formCriar.classList.add('active');
      formLogin.classList.remove('active');
      botaocor.style.left = '150px'; // ajustado para a largura dos botões
    });
  });
  