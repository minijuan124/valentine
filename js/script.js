document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const musica = document.getElementById('miMusica');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // 1. Abrir sobre
    envelope.addEventListener('click', function(e) {
        if (!this.classList.contains('open')) {
            this.classList.add('open');
            musica.play().catch(e => console.log("La música requiere interacción previa"));
            
            const instructions = document.querySelector('.header-text p');
            if(instructions) instructions.style.opacity = '0';
        }
    });

    // 2. Lógica del botón NO que huye
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });

    // 3. Botón SI con ráfaga infinita de imágenes
    yesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const gifUrl = "assets/ayy.png"; 
        
        // Cambiamos el contenido de la carta
        document.getElementById('mainCard').innerHTML = `
            <div class="final-message">
                <h1 class="love-mail">Ay tontis teamo❤️</h1>
                <img src="${gifUrl}" alt="Celebración" class="celebration-gif">
            </div>
        `;

        // LISTA DE IMÁGENES (Asegúrate de que los nombres coincidan exactamente en tu carpeta assets)
        const imagenesFlotantes = [
            "assets/dog.png",
            "assets/kirby.png",
            "assets/hamster.png",
            "assets/eyebrow.png",
            "assets/1d.png",
            "assets/1a.png",
            "assets/1b.png",
            "assets/1c.png"
        ];

        function crearImagenFlotante() {
            const img = document.createElement('img');
            const imagenAzar = imagenesFlotantes[Math.floor(Math.random() * imagenesFlotantes.length)];
            img.src = imagenAzar;
            img.classList.add('floating-img');
            
            const size = Math.random() * 80 + 100; // Tamaño entre 100px y 180px
            img.style.width = size + 'px';
            img.style.height = 'auto';
            img.style.left = Math.random() * 85 + 'vw';
            img.style.top = '100vh';

            document.body.appendChild(img);

            setTimeout(() => {
                img.remove();
            }, 3500);
        }

        for(let i = 0; i < 20; i++) {
            setTimeout(crearImagenFlotante, i * 100);
        }
        setInterval(crearImagenFlotante, 400);
    });
});

function showText(event) {
    event.stopPropagation();
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
}

function showQuestion(event) {
    event.stopPropagation();
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
}