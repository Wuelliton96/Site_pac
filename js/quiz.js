let respostasQuiz = [2, 4, 4, 3, 2];
let respostasValues = [0, 0, 0, 0, 0];

function respostas(index, value){
    respostasValues[index] = value;
}

function checkQuiz(event){
    let acertos = 0;
    let erros = 0;

    for(let i = 0; i < respostasValues.length; i++) {
        if(respostasValues[i] == respostasQuiz[i]) {
            acertos += 1
        } else erros += 1
    }

    document.getElementById("acertos").innerHTML = acertos;
    document.getElementById("erros").innerHTML = erros;
    openTab(event, 'tab7', 'flex'); 
}