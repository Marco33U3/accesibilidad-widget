(function() {
    // 1. Inyectar CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .acc-btn-trigger { position: fixed; bottom: 25px; right: 25px; z-index: 999999; background: #e91e63; border: none; cursor: pointer; width: 60px; height: 60px; border-radius: 50%; color: white; }
        .acc-panel { position: fixed; bottom: 90px; right: 25px; width: 300px; background: #fff; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); padding: 20px; z-index: 999998; display: none; font-family: sans-serif; }
        .acc-active { background: #e91e63 !important; color: white !important; }
        .acc-reading-guide { position: fixed; top: 0; left: 0; width: 100%; height: 2px; background: red; z-index: 999997; pointer-events: none; }
    `;
    document.head.appendChild(style);

    // 2. Inyectar HTML del Panel
    const container = document.createElement('div');
    container.innerHTML = `
        <button id="acc-toggle" class="acc-btn-trigger">Acc</button>
        <div id="acc-panel" class="acc-panel">
            <h3>Accesibilidad DIF</h3>
            <button data-action="text-small">A-</button>
            <button data-action="text-normal">Normal</button>
            <button data-action="text-large">A+</button>
            <hr>
            <button data-action="toggle-contrast">Contraste</button>
            <button data-action="read-mode">Modo Lectura</button>
            <button data-action="reset">Reset</button>
        </div>
    `;
    document.body.appendChild(container);

    // 3. Lógica (Tú script corregido)
    const trigger = document.getElementById('acc-toggle');
    const panel = document.getElementById('acc-panel');

    const speakHandler = (e) => {
        const text = e.target.innerText || e.target.textContent;
        if (text && text.trim().length > 0) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text.trim());
            utterance.lang = 'es-ES';
            window.speechSynthesis.speak(utterance);
        }
    };

    trigger.addEventListener('click', () => {
        panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
    });

    panel.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || !btn.dataset.action) return;
        
        const action = btn.dataset.action;
        if (action === 'reset') { location.reload(); return; }

        btn.classList.toggle('acc-active');
        const isActive = btn.classList.contains('acc-active');
        applyAction(action, isActive);
    });

    function applyAction(action, isActive) {
        switch(action) {
            case 'text-small': document.body.style.fontSize = '14px'; break;
            case 'text-normal': document.body.style.fontSize = '16px'; break;
            case 'text-large': document.body.style.fontSize = '20px'; break;
            case 'toggle-contrast': document.body.style.filter = isActive ? 'invert(1)' : 'none'; break;
            case 'read-mode':
                if (isActive) {
                    document.body.style.cursor = 'crosshair';
                    document.addEventListener('click', speakHandler, true);
                } else {
                    document.body.style.cursor = 'default';
                    document.removeEventListener('click', speakHandler, true);
                }
                break;
        }
    }
})();
