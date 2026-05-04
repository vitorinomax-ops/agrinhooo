// 1. Estado da Aplicação (Processamento de Informação)
const state = {
    fontSize: 16,
    isDarkMode: false,
    userName: ""
};

// 2. Seletores de Elementos
const themeBtn = document.getElementById('theme-btn');
const fontBtn = document.getElementById('font-up');
const actionBtn = document.getElementById('main-action');
const inputName = document.getElementById('user-name');
const welcomeBox = document.getElementById('display-welcome');
const interactionBox = document.getElementById('interaction-box');

// 3. Função: Modo Escuro (Acessibilidade)
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    state.isDarkMode = !state.isDarkMode;
    console.log("Tema alternado pelo usuário.");
});

// 4. Função: Aumentar Fonte (Acessibilidade)
fontBtn.addEventListener('click', () => {
    state.fontSize += 2;
    if (state.fontSize > 24) state.fontSize = 16;
    document.body.style.fontSize = state.fontSize + "px";
});

// 5. Função: Saudação Personalizada (Manipulação Funcional do DOM)
actionBtn.addEventListener('click', () => {
    // Processamento da informação antes de exibir
    const nome = inputName.value.trim();
    
    if (nome.length >= 3) {
        state.userName = nome;
        // Altera o HTML dinamicamente (DOM)
        interactionBox.classList.add('hidden');
        welcomeBox.innerHTML = `<h3>Olá, ${state.userName}! 🌱</h3><p>Assista ao vídeo abaixo para conhecer as inovações.</p>`;
        welcomeBox.classList.remove('hidden');
    } else {
        alert("Por favor, digite seu nome (mínimo 3 letras).");
    }
});
