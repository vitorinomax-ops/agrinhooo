document.addEventListener('DOMContentLoaded', () => {
    const btnExplore = document.getElementById('btn-explore');
    const inputName = document.getElementById('user-name');
    const welcomeMsg = document.getElementById('welcome-msg');
    const searchBox = document.querySelector('.search-box');

    // 1. Função de Boas-vindas com animação
    btnExplore.addEventListener('click', () => {
        const nome = inputName.value.trim();

        if (nome !== "") {
            searchBox.style.opacity = '0';
            setTimeout(() => {
                searchBox.classList.add('hidden');
                welcomeMsg.innerHTML = `<h3>Seja bem-vindo, ${nome}! 🌿</h3>`;
                welcomeMsg.classList.remove('hidden');
                welcomeMsg.style.animation = 'fadeInUp 0.8s ease forwards';
            }, 400);
        } else {
            inputName.style.border = '2px solid #ff4d4d';
            setTimeout(() => inputName.style.border = 'none', 2000);
        }
    });

    // 2. Animação de entrada dos cards (Scroll Reveal simples)
    const cards = document.querySelectorAll('.img-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
