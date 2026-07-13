document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('acc-toggle');
    const panel = document.getElementById('acc-panel');
    if (!panel) return;

    // --- MANEJADOR DE VOZ GLOBAL ---
    const speakHandler = (e) => {
        const text = e.target.innerText || e.target.textContent;
        if (text && text.trim().length > 0) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text.trim());
            utterance.lang = 'es-ES';
            window.speechSynthesis.speak(utterance);
        }
    };

    // --- TOGGLE PANEL ---
    trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
    });

    // --- DELEGACIÓN DE EVENTOS (Aquí reside la estabilidad) ---
    panel.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || btn.classList.contains('acc-close')) return;
        
        const action = btn.dataset.action;
        if (!action) return;

        // Reset Total
        if (action === 'reset') {
            window.speechSynthesis.cancel();
            document.removeEventListener('click', speakHandler, true);
            localStorage.clear();
            location.reload();
            return;
        }

        // Toggle visual
        if (action.startsWith('text-')) {
            panel.querySelectorAll('[data-action^="text-"]').forEach(b => b.classList.remove('acc-active'));
        }
        btn.classList.toggle('acc-active');
        const isActive = btn.classList.contains('acc-active');

        // Ejecutar acción
        try {
            applyAction(action, isActive);
            localStorage.setItem(action, isActive);
        } catch (err) {
            console.error("Error en acción " + action, err);
        }

        
    });

    function applyAction(action, isActive) {
        // Limpiamos estilos de voz si cambiamos de acción
        if(action !== 'read-mode') {
            document.removeEventListener('click', speakHandler, true);
            document.body.style.cursor = 'default';
        }

        switch(action) {
            case 'text-small': document.body.style.fontSize = '14px'; break;
            case 'text-normal': document.body.style.fontSize = '16px'; break;
            case 'text-large': document.body.style.fontSize = '20px'; break;
            case 'toggle-contrast': document.body.classList.toggle('acc-toggle-contrast', isActive); break;
            case 'toggle-grayscale': document.body.classList.toggle('acc-toggle-grayscale', isActive); break;
            case 'toggle-cursor': document.body.classList.toggle('acc-toggle-cursor', isActive); break;
            case 'toggle-dyslexia': document.body.classList.toggle('acc-toggle-dyslexia', isActive); break;
            case 'toggle-images': document.querySelectorAll('img').forEach(img => img.style.display = isActive ? 'none' : ''); break;
            case 'toggle-links': document.querySelectorAll('a').forEach(a => a.style.outline = isActive ? '2px solid #e91e63' : ''); break;
            case 'toggle-animations':
                const styleId = 'acc-no-anim';
                if(isActive) {
                    const style = document.createElement('style');
                    style.id = styleId;
                    style.innerHTML = '* { animation: none !important; transition: none !important; }';
                    document.head.appendChild(style);
                } else { document.getElementById(styleId)?.remove(); }
                break;
            case 'toggle-reading-guide':
                let guide = document.getElementById('acc-guide');
                if(isActive) {
                    guide = document.createElement('div');
                    guide.id = 'acc-guide';
                    guide.className = 'acc-reading-guide';
                    document.body.appendChild(guide);
                    document.addEventListener('mousemove', (e) => { if(guide) guide.style.top = (e.clientY - 10) + 'px'; });
                } else { guide?.remove(); }
                break;
            case 'read-mode':
                if (isActive) {
                    document.body.style.cursor = 'crosshair';
                    document.addEventListener('click', speakHandler, true);
                } else {
                    window.speechSynthesis.cancel();
                    document.body.style.cursor = 'default';
                    document.removeEventListener('click', speakHandler, true);
                }
                break;
        }
    }
});
