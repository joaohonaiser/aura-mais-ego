
    const btn = document.getElementById('btn-start');
    const audio = document.getElementById('audio-trovao');
    const raioPath = document.getElementById('raio-path');
    const container = document.querySelector('.aura-container');

    // Cores para os raios (estilo neon/RGB)
    const coresRaios = ['#ffffff', '#00ffff', '#ff00ff', '#ffff00', '#00ff00'];

    function gerarRaio() {
        const width = 600;  // Largura do viewBox do SVG
        const height = 600; // Altura do viewBox do SVG
        
        // O raio começa sempre no centro (atrás do texto)
        let x = width / 2;
        let y = height / 2;
        let d = `M ${x} ${y}`;

        // Cria 10 segmentos aleatórios para o raio
        for (let i = 0; i < 10; i++) {
            x += (Math.random() - 0.5) * 250; // Oscilação horizontal
            y += (Math.random() - 0.5) * 250; // Oscilação vertical
            d += ` L ${x} ${y}`;
        }

        // Aplica o caminho ao SVG
        raioPath.setAttribute('d', d);
        
        // Escolhe uma cor aleatória da lista
        const corAleatoria = coresRaios[Math.floor(Math.random() * coresRaios.length)];
        raioPath.setAttribute('stroke', corAleatoria);

        // Efeito de clarão no fundo (flash)
        document.body.style.backgroundColor = "#1a1a1a";
        
        // Remove o raio e reseta o fundo após um curto tempo (milissegundos)
        setTimeout(() => {
            raioPath.setAttribute('d', "");
            document.body.style.backgroundColor = "#000";
        }, 80);
    }

    // Inicia a experiência ao clicar no botão
    btn.addEventListener('click', () => {
        // Toca o som
        audio.play().catch(e => console.log("Erro ao tocar áudio:", e));
        
        // Esconde o botão
        btn.style.display = 'none';

        // Cria um loop para gerar raios em intervalos aleatórios
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% de chance de cair um raio a cada ciclo
                gerarRaio();
            }
        }, 200); // Tenta gerar a cada 200ms
    });
