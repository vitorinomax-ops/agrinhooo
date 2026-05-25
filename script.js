/* --- Adicione estas funções ao seu AgroApp --- */

const AgroApp = {
    init() {
        this.navHandler();
        this.tabsHandler();
        this.themeHandler();
        this.revealManager();
        this.animateStats(); // Nova função
        this.parallaxHero(); // Nova função
    },

    // Animar os números (+24% e -15%) ao carregar
    animateStats() {
        const stats = document.querySelectorAll('.stat span');
        stats.forEach(stat => {
            const target = parseInt(stat.innerText.replace(/\D/g, ''));
            let count = 0;
            const updateCount = () => {
                const speed = target / 50;
                if (count < target) {
                    count += speed;
                    stat.innerText = (stat.innerText.includes('+') ? '+' : '-') + Math.ceil(count) + '%';
                    setTimeout(updateCount, 30);
                }
            };
            updateCount();
        });
    },

    // Efeito Parallax no Visual do Hero
    parallaxHero() {
        const visual = document.querySelector('.hero-visual');
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            visual.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
};
