document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    const themeBtn = document.getElementById('theme-toggle');

    // Navegação de Abas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Remove classes ativas
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Adiciona classe ativa no alvo
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Alternador de Tema (Persistente)
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
    });

    // Carregar tema preferido
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
});
