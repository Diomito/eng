// Atualiza a barra de progresso de leitura com base na posição da página
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    // Atualiza a largura da barra de progresso
    document.getElementById('progress-bar').style.width = progress + '%';
}

// Atualiza a barra de progresso quando a página é rolada
document.addEventListener('scroll', updateProgressBar);

// Atualiza a barra de progresso quando a página é redimensionada (útil em dispositivos móveis)
window.addEventListener('resize', updateProgressBar);