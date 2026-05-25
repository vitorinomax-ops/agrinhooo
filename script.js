document.addEventListener('DOMContentLoaded', () => {
    // Variáveis de Estado
    let fontScale = 1;
    const root = document.documentElement;
    const synth = window.speechSynthesis;
    let utterance = null;

    // 1. Controle de Fonte
    document.getElementById('f-inc').addEventListener('click', () => {
        if (fontScale < 1.5) {
            fontScale += 0.1;
            updateFont();
        }
    });

    document.getElementById('f-dec').addEventListener('click', () => {
        if (fontScale > 0.8) {
            fontScale -= 0.1;
            updateFont();
        }
    });

    function updateFont() {
        root.style.setProperty('--font-scale', fontScale);
    }

    // 2. Modo Escuro/Claro (Reutilizando sua lógica anterior otimizada)
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    // 3. Leitura por Voz (Apenas Conteúdo Principal)
    document.getElementById('btn-read').addEventListener('click', () => {
        // Cancela leituras anteriores
        synth.cancel();

        // Seleciona apenas textos de parágrafos e títulos dentro do MAIN
        const mainContent = document.getElementById('main-content');
        const textNodes = mainContent.querySelectorAll('h1, h2, h3, p, li');
        
        // Concatena o texto ignorando botões e links de navegação
        const fullText = Array.from(textNodes)
            .map(node => node.innerText)
            .join('. ');

        utterance = new SpeechSynthesisUtterance(fullText);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.1; // Velocidade levemente aumentada

        synth.speak(utterance);
    });

    document.getElementById('btn-stop').addEventListener('click', () => {
        synth.cancel();
    });
});
