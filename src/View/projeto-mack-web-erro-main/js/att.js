/* eslint-disable prettier/prettier */
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.mybotoes');
    buttons.forEach(button => {
      if (button.value === 'Comprar') {
        button.addEventListener('click', function() {
          window.location.href = 'compra.html';
        });
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const empresasLink = document.querySelector('a[href="#empresas"]');
    
    if (empresasLink) {
      empresasLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link
        
        if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
          // Redireciona para a página inicial
          window.location.href = '/index.html#empresas';
        } else {
          // Rola a página para o elemento com o ID 'empresas'
          const empresasElement = document.getElementById('empresas');
          if (empresasElement) {
            empresasElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  });