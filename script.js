document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const inputName = document.getElementById('user-name');
    const userArea = document.getElementById('user-area');
    const themeToggle = document.getElementById('theme-toggle');

    // 1. Alternância de Tema Profissional
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.innerText = isDark ? '☀️' : '🌓';
    });

    // 2. Manipulação Dinâmica do Usuário
    btnStart.addEventListener('click', () => {
        const name = inputName.value.trim();
        if (name) {
            userArea.innerHTML = `
                <div class="welcome-banner">
                    <h3>Bem-vindo ao Futuro, ${name}! 🌱</h3>
                    <p>Explore as inovações que preparamos para você.</p>
                </div>
            `;
            userArea.style.animation = "fadeInUp 0.6s ease forwards";
        } else {
            inputName.style.borderColor = "red";
            setTimeout(() => inputName.style.borderColor = "#ddd", 2000);
        }
    });

    // 3. Efeito de Scroll no Header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.padding = "15px 0";
            header.style.boxShadow = "none";
        }
    });
});
