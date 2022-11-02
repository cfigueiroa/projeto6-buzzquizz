const api = 'https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes/';
// const api = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
let currentId = 0;
let currentObj = {};
//page1

// for (let i = 0; i < 50; i++) {
//     axios.post(api, quizzTemplate);
// }

function loadQuizzes() {
    axios.get(api)
        .then(function (response) {
            console.log(response.data);
            const quizzes = response.data;
            const cards = document.querySelector('.bot .cards');
            cards.innerHTML = '';

            for (let i = 0; i < quizzes.length; i++) {
                const newDiv = document.createElement("div");
                newDiv.classList.add('card');
                newDiv.innerHTML = `<p>${quizzes[i].title}</p>`;
                newDiv.style.background = `linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%,
                    #000000 100%
                  ),url(${quizzes[i].image})`;
                cards.appendChild(newDiv);
                newDiv.addEventListener('click', function () {
                    loadQuiz(quizzes[i].id);
                });
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

function loadQuiz(id) {
    console.log(id);
    currentId = id;
    if (id !== 0) {
        axios.get(api + id)
            .then(function (response) {
                currentObj = response.data;
                console.log(currentObj);
                page1.classList.add('hidden');
                page2.classList.remove('hidden');
                criarQuizz()
            })
            .catch(function (error) { console.log(error); });
    }

}

function createQuizz(ele) {
    page1.classList.add('hidden');
    page3.classList.remove('hidden');
}

loadQuizzes();



//page2
function selecionarCaixa(seletor) {
    const caixaClicada = seletor.parentNode;
    const p = caixaClicada.querySelector("p")
    caixaClicada.classList.add("clicado")
    p.classList.add("acertou")

    const caixas = document.querySelectorAll(".caixa")
    for (let i = 0; i < caixas.length; i++) {
        if (caixas[i].classList.contains("clicado") === false) {
            caixas[i].innerHTML += `
            <div class="esconder"></div>
            `
        }
        else {
            seletor.removeAttribute("onclick")
        }
    }
}

function criarQuizz(){
    // Alterando o Fundo
    const fundo = document.querySelector(".fundo")
    let title = currentObj.title
    let back = currentObj.image
    fundo.style.backgroundImage =`url("${back}")`;
    fundo.innerHTML = title;
    back = "";
    title = "";


    const container = document.querySelector(".container")
    container.innerHTML = ""
    
    
    for(let i = 0; i < currentObj.questions.length; i++){
        container.innerHTML += `
        <div class="quizz-caixa">
            <div id= "titulo${i}" class="titulo-quizz">${currentObj.questions[i].title}</div>
            <div class="conteudo-quizz">
              <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img"></div>
                <p>gatinho</p>
              </div>
              <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img"></div>
                <p>gatinho</p>
              </div>
              <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img"></div>
                <p>gatinho</p>
              </div>
              <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img"></div>
                <p>gatinho</p>
              </div>
            </div>
          </div>
        `
        let titulo = document.querySelector(`#titulo${i}`)
        titulo.style.backgroundColor = currentObj.questions[i].color
        titulo = ""
    }
}

//page3