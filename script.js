document.addEventListener('DOMContentLoaded', () => {
    // 1. Modo Escuro Inteligente
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('agro-theme', isDark ? 'dark' : 'light');
    });

    // 2. Navegação de Abas (Lógica Extensível)
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            // Aqui você pode carregar dados dinâmicos no futuro
        });
    });

    // 3. Efeito de Scroll no Header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        header.style.padding = window.scrollY > 50 ? '12px 0' : '20px 0';
        header.style.boxShadow = window.scrollY > 50 ? '0 10px 30px rgba(0,0,0,0.1)' : 'none';
    });
});
