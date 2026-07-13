(function() {
    // 1. Inyectar CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .acc-btn-trigger { position: fixed; bottom: 25px; right: 25px; z-index: 999999; background: none; border: none; cursor: pointer; padding: 0; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); transition: transform 0.3s ease; }
        .acc-btn-trigger:hover { transform: scale(1.1); }
        .acc-panel { position: fixed; bottom: 90px; right: 25px; width: 340px; background: #fff; border-radius: 28px; box-shadow: 0 10px 40px rgba(0,0,0,0.15); padding: 30px; z-index: 999998; display: none; border: 1px solid rgba(0,0,0,0.05); font-family: sans-serif; }
        .acc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .acc-title { font-size: 20px; font-weight: 700; color: #1a1a1a; margin: 0; }
        .acc-close { cursor: pointer; border: none; background: #f4f4f4; border-radius: 50%; width: 30px; height: 30px; }
    `;
    document.head.appendChild(style);

    // 2. Inyectar HTML
    const container = document.createElement('div');
    container.innerHTML = `
        <button id="acc-toggle" class="acc-btn-trigger" title="Accesibilidad">
            <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#e91e63" />
                <path d="M50 25c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-15 4c-3.3 0-6 2.7-6 6v15h4v-13h4v13h4v-13h4v13h4v-15c0-3.3-2.7-6-6-6h-8z" fill="white"/>
            </svg>
        </button>
        <div id="acc-panel" class="acc-panel">
            <div class="acc-header">
                <h2 class="acc-title">Accesibilidad DIF</h2>
                <button class="acc-close" id="acc-close">✕</button>
            </div>
            <p>Panel de ajustes activado.</p>
        </div>
    `;
    document.body.appendChild(container);

    // 3. Lógica JS
    const toggle = document.getElementById('acc-toggle');
    const panel = document.getElementById('acc-panel');
    const close = document.getElementById('acc-close');

    toggle.addEventListener('click', () => {
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });

    close.addEventListener('click', () => {
        panel.style.display = 'none';
    });
})();