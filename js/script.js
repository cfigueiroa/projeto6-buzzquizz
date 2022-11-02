const api = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
//page1
//page2
function selecionarCaixa(seletor){
    const caixaClicada = seletor.parentNode;
    const p = caixaClicada.querySelector("p")
    caixaClicada.classList.add("clicado")
    p.classList.add("acertou")

    const caixas = document.querySelectorAll(".caixa")
    for (let i = 0; i < caixas.length; i++){
        if(caixas[i].classList.contains("clicado") === false){
            caixas[i].innerHTML+= `
            <div class="esconder"></div>
            `
        }
        else {
            seletor.removeAttribute("onclick")
        }
    }
}
//page3