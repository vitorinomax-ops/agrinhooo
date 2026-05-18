// Lógica de Troca de Tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('agro-theme', isDark ? 'dark' : 'light');
});

// Navegação de Abas
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        // Aqui você pode adicionar lógica para trocar o conteúdo do ID se necessário
    });
});

// Scroll suave e efeito na Navbar
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.style.padding = window.scrollY > 50 ? '10px 0' : '15px 0';
    header.style.boxShadow = window.scrollY > 50 ? '0 10px 30px rgba(0,0,0,0.1)' : 'none';
});
