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
