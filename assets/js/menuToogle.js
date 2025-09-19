const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu ul');
const menuLinks = document.querySelectorAll('.menu ul li a');

// Função para fechar o menu
function closeMenu() {
    menuList.classList.remove('open');
}

// Evento de clique no toggle
menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('open');
});

// Evento de clique nos links do menu
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Fecha o menu após o clique
        closeMenu();
    });
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuList.contains(event.target) || menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && menuList.classList.contains('open')) {
        closeMenu();
    }
});

// Fechar o menu ao redimensionar a janela (se voltar para desktop)
window.addEventListener('resize', function() {
    if (window.innerWidth > 800 && menuList.classList.contains('open')) {
        closeMenu();
    }
});