document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Acordeão (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
            header.querySelector('span').innerText = item.classList.contains('active') ? '-' : '+';
        });
    });

    // 2. Lógica de Filtro da Galeria
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.feature-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Mudar botão ativo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Botão "Ver Mais" - Alerta Simples (Pode ser um modal)
    document.querySelectorAll('.btn-more').forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Em breve: Detalhes técnicos sobre esta inovação!");
        });
    });
});
