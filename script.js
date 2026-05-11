document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Checar preferência salva no navegador
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não tiver salvo, checa a preferência do sistema do usuário
        body.classList.add('dark');
    }

    // 2. Evento de Clique
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        // Salva a escolha do usuário
        const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        // Efeito de feedback visual
        themeToggle.style.transform = "scale(0.9)";
        setTimeout(() => themeToggle.style.transform = "scale(1)", 100);
    });

    // 3. Animação de entrada dos itens da galeria
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.media-item').forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.6s ease-out";
        observer.observe(item);
    });
});
