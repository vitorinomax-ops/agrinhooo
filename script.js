document.getElementById('theme-btn').onclick = () => {
    document.body.classList.toggle('dark-mode');
};

let size = 16;
document.getElementById('font-btn').onclick = () => {
    size = size > 24 ? 16 : size + 2;
    document.body.style.fontSize = size + 'px';
};

document.getElementById('main-action').onclick = () => {
    const nome = document.getElementById('user-name').value;
    if (nome) {
        document.getElementById('user-area').classList.add('hidden');
        const msg = document.getElementById('welcome-msg');
        msg.innerHTML = `<h3>Bem-vindo, ${nome}! 🌱</h3>`;
        msg.classList.remove('hidden');
    }
};
