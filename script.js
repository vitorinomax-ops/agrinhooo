// Alternância de Tema com Persistência
const btnTheme = document.getElementById('theme-toggle');
btnTheme.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Carregar tema salvo
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Navegação de Abas
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Adicione aqui a lógica de trocar o texto da aba se necessário
    });
});

// Scroll suave no Header
window.onscroll = () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        header.style.padding = "18px 0";
        header.style.boxShadow = "none";
    }
};
