// 1. Personalização de Boas-vindas
const btnWelcome = document.getElementById('btn-welcome');
const inputName = document.getElementById('user-name');
const welcomeMsg = document.getElementById('welcome-msg');
const userBox = document.getElementById('user-interact');

btnWelcome.addEventListener('click', () => {
    const nome = inputName.value.trim();
    if (nome) {
        userBox.style.display = 'none';
        welcomeMsg.innerHTML = `<h3>Bem-vindo ao Portal, ${nome}!</h3><p>Obrigado por apoiar a produção sustentável.</p>`;
        welcomeMsg.classList.remove('hidden');
        welcomeMsg.style.color = '#1b5e20';
        welcomeMsg.style.fontWeight = 'bold';
    } else {
        alert("Por favor, digite seu nome!");
    }
});

// 2. Acessibilidade: Modo Escuro
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 3. Acessibilidade: Controle de Fonte
let fontSize = 16;
document.getElementById('font-up').addEventListener('click', () => {
    fontSize += 2;
    if (fontSize > 24) fontSize = 16;
    document.documentElement.style.fontSize = fontSize + 'px';
});

// 4. Manipulação de Formulário (Simulação de Envio)
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento
    const userEmail = document.getElementById('email').value;
    
    // Processamento antes de exibir
    console.log(`Mensagem recebida de: ${userEmail}`);
    
    contactForm.style.display = 'none';
    statusMsg.classList.remove('hidden');
    statusMsg.style.padding = '20px';
    statusMsg.style.background = '#8bc34a';
    statusMsg.style.borderRadius = '8px';
});
