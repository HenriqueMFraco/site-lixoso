document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Tempo de animação variado entre 2 e 5 segundos
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Tamanho variado entre 10px e 20px
        snowContainer.appendChild(snowflake);

        // Remove o floco de neve após a animação para evitar acumulação
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Cria flocos de neve a cada 100ms
    setInterval(createSnowflake, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    // Selecione os elementos que você deseja associar o evento de clique
    const caminhao1 = document.querySelector('#caminhao1div img');
    const caminhao2 = document.querySelector('#caminhao2div img');

    // Selecione o elemento de áudio
    const carCrashSound = document.getElementById('carCrashSound');

    // Função para tocar o som e animar o caminhão
    const playSound = (element) => {
        carCrashSound.currentTime = 0; // Reinicia o áudio
        carCrashSound.play();
        
        // Adiciona a classe de animação ao elemento clicado
        element.classList.add('rotate');

        // Remove a classe de animação após o término da reprodução do áudio
        carCrashSound.addEventListener('ended', () => {
            element.classList.remove('rotate');
        }, { once: true }); // Ouvinte removido após a execução
    };

    // Adicione o evento de clique para cada caminhão
    if (caminhao1) {
        caminhao1.addEventListener('click', () => playSound(caminhao1));
    }

    if (caminhao2) {
        caminhao2.addEventListener('click', () => playSound(caminhao2));
    }
});
