
(function() {
    // 1. Inyectar CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .acc-btn-trigger { position: fixed; bottom: 20px; left: 20px; z-index: 999999; background: #e91e63; border: none; cursor: pointer; padding: 15px; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        .acc-panel { position: fixed; bottom: 90px; left: 20px; width: 350px; background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); padding: 25px; z-index: 999998; display: none; font-family: sans-serif; border: 1px solid #ddd; }
        .acc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .acc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
        .acc-btn { background: #f8f8f8; border: 1px solid #eee; padding: 10px; border-radius: 10px; cursor: pointer; text-align: center; }
        .acc-btn:hover { background: #e91e63; color: white; }
    `;
    document.head.appendChild(style);

    // 2. Inyectar el HTML del panel completo
    const container = document.createElement('div');
    container.innerHTML = `
        <button id="acc-toggle" class="acc-btn-trigger">
            <svg viewBox="0 0 24 24" fill="white" width="30" height="30"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v12h-2v-6h-2v6H8V9H2V7h19v2z"/></svg>
        </button>
        <div id="acc-panel" class="acc-panel">
            <div class="acc-header">
                <h3 style="margin:0;">Accesibilidad DIF</h3>
                <button onclick="document.getElementById('acc-panel').style.display='none'">✕</button>
            </div>
            <p><strong>TAMAÑO DE TEXTO</strong></p>
            <div class="acc-grid">
                <button class="acc-btn">A-</button>
                <button class="acc-btn">Normal</button>
                <button class="acc-btn">A+</button>
            </div>
            <p><strong>AJUSTES VISUALES</strong></p>
            <div class="acc-grid">
                <button class="acc-btn">Contraste</button>
                <button class="acc-btn">Grises</button>
                <button class="acc-btn">Cursor</button>
            </div>
            <button class="acc-btn" style="width: 100%; margin-top: 10px;">Restablecer Ajustes</button>
        </div>
    `;
    document.body.appendChild(container);

    // 3. Lógica para abrir/cerrar
    document.getElementById('acc-toggle').onclick = () => {
        const p = document.getElementById('acc-panel');
        p.style.display = (p.style.display === 'block') ? 'none' : 'block';
    };
})();
