// 1. Variáveis de estado
let fSize = 16;

// 2. Seletores de Elementos
const themeBtn = document.getElementById('theme-btn');
const fontBtn = document.getElementById('font-btn');
const startBtn = document.getElementById('start-btn');
const userNameInput = document.getElementById('user-name');
const welcomeMsg = document.getElementById('welcome-msg');
const userBox = document.getElementById('user-box');
const agroForm = document.getElementById('agro-form');
const feedback = document.getElementById('form-feedback');

// 3. Função: Alternar Modo Escuro
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 4. Função: Aumentar Fonte (Acessibilidade)
fontBtn.addEventListener('click', () => {
    fSize = fSize >= 24 ? 16 : fSize + 2;
    document.body.style.fontSize = fSize + 'px';
});

// 5. Função: Personalizar Boas-vindas (Manipulação do DOM)
startBtn.addEventListener('click', () => {
    const nome = userNameInput.value.trim();
    if (nome !== "") {
        userBox.classList.add('hidden');
        welcomeMsg.innerHTML = `<h3>Seja bem-vindo(a), ${nome}! 🌱</h3><p>Assista ao documentário abaixo para entender nosso propósito.</p>`;
        welcomeMsg.classList.remove('hidden');
    } else {
        alert("Por favor, digite seu nome.");
    }
});

// 6. Função: Formulário Interativo
agroForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio real para fins de demonstração
    agroForm.classList.add('hidden');
    feedback.classList.remove('hidden');
    feedback.style.color = "var(--primary)";
    feedback.style.fontWeight = "bold";
});
