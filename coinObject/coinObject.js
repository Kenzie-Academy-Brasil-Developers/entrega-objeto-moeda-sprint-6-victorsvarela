const coin = {
    state: 0,

    flip: function () {
        // Use "this.state" para acessar a propriedade "state".
        this.state = Math.floor(Math.random() * (2 - 0) + 0);
        // Configure de forma randômica a propriedade “state” do
        // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
    },

    toString: function (state) {
        if (this.state === 0) {
            return 'Heads';
        }
        if (this.state === 1){
            return 'Tails';
        }
        // Se o valor de "state" for 0, retorne "Heads"
        // Se o valor de "state" for 1, retorne "Tails"
    },

    toHTML: function (state) {
        const image = document.createElement("img");
        // Colocar uma imagem correspondente a essa valor.
        if (this.state === 0){
            image.style.width = '100px';
            image.style.height = '100px';
            image.src = "./CAMINHO/CARA.jpg";
            image.alt = "Heads";
            return image;
        }
        if (this.state === 1){
            image.style.width = '100px';
            image.style.height = '100px';
            image.src = "./CAMINHO/COROA.jpg";
            image.alt = "Tails";
            return image;
        }
    },
};


function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    let corpo = document.getElementById('body');
    corpo.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        coin.flip();
        let txt = ` ${coin.toString()}`;
        corpo.append(txt);
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".

    return results
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}

function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    let corpo = document.getElementById('body');
    corpo.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        coin.flip();
        let image = coin.toHTML();
        corpo.append(image);
    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    return results;
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
}