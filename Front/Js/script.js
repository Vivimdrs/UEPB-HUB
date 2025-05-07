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

  function matriculaValida(matricula) {
    const regex = /^\d{9}$/;
    return regex.test(matricula);
  }
  
  document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const matriculaInput = this.querySelector('input[name="matricula"]');
    const matricula = matriculaInput.value.trim();
  
    if (!matriculaValida(matricula)) {
      alert('Matrícula inválida. Insira exatamente 9 números.');
      matriculaInput.focus();
      return;
    }
  
    window.location.href = 'telaprincipal.html';
  });
  

  
  