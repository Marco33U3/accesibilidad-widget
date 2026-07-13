(function() {
    // 1. Inyectar CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .acc-btn-trigger { position: fixed; bottom: 25px; right: 25px; z-index: 999999; background: #e91e63; border: none; cursor: pointer; padding: 10px; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2)); transition: transform 0.3s ease; }
        .acc-btn-trigger svg { width: 40px; height: 40px; fill: white; }
        .acc-panel { position: fixed; bottom: 100px; right: 25px; width: 320px; background: #fff; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 20px; z-index: 999998; display: none; font-family: sans-serif; border: 1px solid #eee; }
        .acc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    `;
    document.head.appendChild(style);

    // 2. Inyectar HTML con SVG directo
    const container = document.createElement('div');
    container.innerHTML = `
        <button id="acc-toggle" class="acc-btn-trigger">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v12h-2v-6h-2v6H8V9H2V7h19v2z"/>
            </svg>
        </button>
        <div id="acc-panel" class="acc-panel">
            <div class="acc-header">
                <strong>Accesibilidad DIF</strong>
                <button onclick="document.getElementById('acc-panel').style.display='none'">✕</button>
            </div>
            <p>Configuración de accesibilidad</p>
        </div>
    `;
    document.body.appendChild(container);

    // 3. Lógica
    document.getElementById('acc-toggle').onclick = () => {
        const p = document.getElementById('acc-panel');
        p.style.display = (p.style.display === 'block') ? 'none' : 'block';
    };
})();
