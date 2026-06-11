// Função disparada ao clicar no botão "Saber Mais"
function mensagemBoasVindas() {
    alert("Obrigado pelo interesse! O verdadeiro Agro Forte protege o solo de hoje para garantir o alimento de amanhã.");
}

// Efeito de contador dinâmico (Simulação de dados de impacto ambiental)
function simularMetricas() {
    let arvores = 1250;
    let agua = 45000;

    const elementoArvores = document.getElementById('arvoresCounter');
    const elementoAgua = document.getElementById('aguaCounter');

    // Atualiza os números na tela simulando crescimento contínuo a cada 2 segundos
    setInterval(() => {
        arvores += Math.floor(Math.random() * 3);        // Adiciona de 0 a 2 árvores de forma aleatória
        agua += Math.floor(Math.random() * 50) + 10;     // Adiciona entre 10 e 60 litros de água economizados

        // Atualiza o texto formatando o número para o padrão brasileiro (Ex: 1.250)
        elementoArvores.innerText = arvores.toLocaleString('pt-BR');
        elementoAgua.innerText = agua.toLocaleString('pt-BR') + "L";
    }, 2000); 
}

// Garante que a simulação dos contadores inicie assim que a página terminar de carregar totalmente
window.onload = simularMetricas;