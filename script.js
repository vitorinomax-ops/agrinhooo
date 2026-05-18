tabsHandler() {
    const btns = document.querySelectorAll('.hub-btn');
    const contentTitle = document.querySelector('.panel-text h3');
    const contentDesc = document.querySelector('.panel-text p');
    
    const data = {
        ia: { title: "Visual Computing", desc: "Drones com sensores hiperespectrais que detectam pragas antes do olho humano." },
        bio: { title: "Regenerative Bio", desc: "Microbiologia aplicada para restaurar a saúde do solo e sequestro de carbono." },
        iot: { title: "IoT Mesh", desc: "Sensores subterrâneos de baixa latência monitorando umidade e nutrientes 24/7." }
    };

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            
            // Ativa botão
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Transição suave de conteúdo
            const display = document.querySelector('.hub-display');
            display.style.opacity = '0';
            
            setTimeout(() => {
                contentTitle.innerText = data[target].title;
                contentDesc.innerText = data[target].desc;
                display.style.opacity = '1';
            }, 300);
        });
    });
}
