// Alternância de Tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
};

// Navegação de Abas
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(btn => {
    btn.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        // Aqui você pode adicionar lógica para trocar o conteúdo baseado no data-tab
    };
});
