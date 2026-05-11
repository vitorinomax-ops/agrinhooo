document.getElementById('btn-explore').onclick = function() {
    const nome = document.getElementById('user-name').value;
    const msgArea = document.getElementById('welcome-msg');
    const searchBox = document.querySelector('.search-box');

    if (nome.trim() !== "") {
        searchBox.classList.add('hidden');
        msgArea.innerHTML = `<h3>Seja bem-vindo, ${nome}! 🌿</h3>`;
        msgArea.classList.remove('hidden');
        msgArea.style.marginTop = "20px";
        msgArea.style.color = "#1b3626";
    } else {
        alert("Por favor, digite seu nome.");
    }
};
