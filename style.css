/* Variáveis de Identidade Visual */
:root {
    --primary: #1b5e20;
    --accent: #c6ff00;
    --bg: #ffffff;
    --text: #222222;
    --card: #f9fdf9;
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Modo Escuro */
body.dark-mode {
    --bg: #121212;
    --text: #e0e0e0;
    --card: #1e1e1e;
    --primary: #4caf50;
}

/* Reset e Configurações Globais */
* { margin: 0; padding: 0; box-sizing: border-box; transition: var(--transition); }
body { font-family: sans-serif; background-color: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.section-padding { padding: 60px 0; }
.hidden { display: none !important; }

/* Navbar */
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
.logo { font-size: 1.6rem; font-weight: bold; color: var(--primary); }
.logo span { color: var(--accent); }
.controls button { background: var(--primary); color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; margin-left: 5px; }

/* Hero */
.hero { padding: 100px 0; text-align: center; background: linear-gradient(135deg, rgba(27, 94, 32, 0.05) 0%, rgba(198, 255, 0, 0.05) 100%); border-radius: 0 0 50px 50px; }
.hero h1 { font-size: 3rem; line-height: 1.1; margin-bottom: 20px; }
.hero h1 span { color: var(--primary); border-bottom: 4px solid var(--accent); }
.form-group { margin-top: 30px; max-width: 500px; margin-left: auto; margin-right: auto; }
.input-group { display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap; justify-content: center; }

input { padding: 15px; border: 2px solid #ccc; border-radius: 8px; flex: 1 1 250px; background: white; color: black;}
button#main-action { padding: 15px 25px; background: var(--primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }

/* Vídeo - Layout Protegido contra desconfiguração */
.video-section { background: var(--primary); color: white; padding: 80px 0; }
.video-wrapper { 
    max-width: 900px; /* Previne que fique grande demais */
    margin: 40px auto; 
    background: #000; 
    border-radius: 20px; 
    overflow: hidden; 
    box-shadow: 0 15px 50px rgba(0,0,0,0.3);
}
.white-text { text-align: center; color: white !important; margin-bottom: 20px;}

/* Grid de Cartões - Responsivo e Alinhado */
.cards-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Segredo da responsividade */
    gap: 30px; 
    margin-top: 50px;
}
.card { 
    background: var(--card); 
    padding: 40px; 
    border-radius: 20px; 
    border: 1px solid rgba(0,0,0,0.03);
    text-align: center;
}
.card:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.card-icon { font-size: 3rem; margin-bottom: 20px; }

/* Mensagem de boas-vindas */
.welcome-card { background: var(--accent); color: #1b5e20; padding: 20px; border-radius: 10px; font-weight: bold; margin-top: 20px; }

footer { text-align: center; padding: 40px; opacity: 0.6; border-top: 1px solid rgba(0,0,0,0.1); }

/* Responsividade Celular */
@media (max-width: 600px) {
    .navbar { flex-direction: column; gap: 15px; }
    .hero h1 { font-size: 2rem; }
    .video-wrapper iframe { height: 250px; } /* Ajusta altura do vídeo no celular */
}
