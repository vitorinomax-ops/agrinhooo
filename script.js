"use strict";

const App = {
    init() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.header = document.getElementById('main-header');
        
        this.setupTheme();
        this.setupScrollEffect();
        this.revealOnScroll();
    },

    setupTheme() {
        const currentTheme = localStorage.getItem('agro-theme') || 'light';
        document.body.classList.toggle('dark', currentTheme === 'dark');

        this.themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            localStorage.setItem('agro-theme', isDark ? 'dark' : 'light');
        });
    },

    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.header.style.padding = "12px 0";
                this.header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
            } else {
                this.header.style.padding = "18px 0";
                this.header.style.boxShadow = "none";
            }
        });
    },

    revealOnScroll() {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.media-card, .video-card').forEach(el => {
            el.style.opacity = "0";
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            observer.observe(el);
        });
    }
};

// CSS adicional para a animação do JS
const style = document.createElement('style');
style.textContent = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

App.init();
