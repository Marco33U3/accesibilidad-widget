(function() {
    // Esta función se asegura de que el código corra al final
    window.addEventListener('load', function() {
        
        // Inyectar CSS con !important para ganar a cualquier estilo del sitio
        const style = document.createElement('style');
        style.innerHTML = `
            #acc-widget-btn { position: fixed !important; bottom: 20px !important; left: 20px !important; z-index: 999999 !important; background: #e91e63 !important; border-radius: 50% !important; width: 60px !important; height: 60px !important; border: none !important; cursor: pointer !important; color: white !important; display: flex !important; align-items: center !important; justify-content: center !important; }
        `;
        document.head.appendChild(style);

        // Crear el botón
        const btn = document.createElement('button');
        btn.id = 'acc-widget-btn';
        btn.innerHTML = 'DIF';
        document.body.appendChild(btn);

        // Acción
        btn.onclick = function() { alert('Panel de accesibilidad funcionando'); };
    });
})();
