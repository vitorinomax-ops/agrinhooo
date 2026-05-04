// 1. Variáveis de Estado (Processamento de Informação)
const appState = {
    userName: "",
    fontSize: 16
};

// 2. Seleção de Elementos
const btnWelcome = document.getElementById('btn-welcome');
const inputName = document.getElementById('user-name');
const welcomeArea = document.getElementById('welcome-msg');
const interactionArea = document.getElementById('user-interact');
const themeBtn = document.getElementById('theme-btn');
const fontBtn = document.getElementById('font-up');

// 3. Função: Boas-vindas Personalizada (Manipulação do DOM)
btnWelcome.addEventListener('click', () => {
    const rawName = inputName.value.trim();
    
    if (rawName.length >= 3) {
        appState.userName = rawName;
        // Esconde o formulário e exibe mensagem personalizada
        interactionArea.classList.add('hidden');
        welcomeArea.innerHTML = `
            <div style="padding: 20px; border: 2px solid var(--primary); border-radius: 15px; display: inline-block;">
                <h3>Seja bem-vindo(a), ${appState.userName}! 🌱</h3>
                <p>Explore nosso conteúdo e descubra como o agro e a natureza caminham juntos.</p>
            </div>
        `;
        welcomeArea.classList.remove('hidden');
    } else {
        alert("Por favor, digite seu nome (mínimo 3 letras).");
    }
});

// 4. Função: Modo Escuro (Acessibilidade)
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    console.log("Usuário alterou o contraste da página.");
});

// 5. Função: Tamanho de Fonte (Acessibilidade)
fontBtn.addEventListener('click', () => {
    appState.fontSize += 2;
    if (appState.fontSize > 26) appState.fontSize = 16; // Reinicia se ficar muito grande
    document.documentElement.style.fontSize = appState.baseSize + "px";
    // Ajuste direto no body para garantir efeito imediato
    document.body.style.fontSize = appState.fontSize + 'px';
});

// 6. Função: Formulário de Contato (Interatividade funcional)
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    
    const email = document.getElementById('email').value;
    console.log(`Recebendo mensagem de: ${email}`);
    
    // Altera o DOM para mostrar sucesso
    contactForm.classList.add('hidden');
    statusMsg.classList.remove('hidden');
});
