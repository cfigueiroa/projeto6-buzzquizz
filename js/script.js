const api = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
// const api = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/';
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page31 = document.querySelector('.page31');
const page32 = document.querySelector('.page32');
const page33 = document.querySelector('.page33');
const page34 = document.querySelector('.page34');
let currentId = 0;
let currentObj = {};

//page1

// for (let i = 0; i < 1; i++) {
//     axios.post(api, quizzTemplateFull);
// }

loadQuizzes();

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
                newDiv.style.backgroundSize = '100% 100%';
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
                changePage(page1, page2);
                criarQuizz()
            })
            .catch(function (error) { console.log(error); });
    }

}

//page2
function selecionarCaixa(seletor) {
    const caixaClicada = seletor.parentNode;
    const click = caixaClicada.parentNode;
    const p = caixaClicada.querySelector("p")
    caixaClicada.classList.add("clicado")
    p.classList.add("acertou")

    const caixas = click.querySelectorAll(`.caixa`)
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

function criarQuizz() {
    // Alterando o Fundo
    const fundo = document.querySelector(".fundo");
    fundo.style.backgroundImage = `url("${currentObj.image}")`;
    fundo.style.backgroundSize = 'cover';
    fundo.innerHTML = currentObj.title;

    const container = document.querySelector(".container")
    container.innerHTML = ""

    for (let i = 0; i < currentObj.questions.length; i++) {
        container.innerHTML += `
        <div class="quizz-caixa" id="caixa${i}">
            <div id="titulo${i}" class="titulo-quizz">${currentObj.questions[i].title}</div>
            <div class="conteudo-quizz">         
            </div>
          </div>
        `
        let caixas = document.querySelector(`#caixa${i} .conteudo-quizz`);
        for (let j = 0; j < currentObj.questions[i].answers.length; j++) {
            caixas.innerHTML += `
            <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img" id="img${j}"></div>
                <p id="paragrafo${j}">gatinho</p>
            </div>
        `
            let imagem = document.querySelector(`#caixa${i} #img${j}`)
            imagem.style.backgroundImage = `url("${currentObj.questions[i].answers[j].image}")`
            imagem.style.backgroundSize = '100% 100%';
            let paragrafo = document.querySelector(`#caixa${i} #paragrafo${j}`)
            paragrafo.innerHTML = `${currentObj.questions[i].answers[j].text}`
        }
        let titulo = document.querySelector(`#titulo${i}`)
        titulo.style.backgroundColor = currentObj.questions[i].color
        titulo = ""
    }
}

//page3

//3.1

let obj = { title: "", image: "", questions: [], levels: [] }

let title = document.getElementById("title");
let image = document.getElementById("image");
let questionsQty = document.getElementById("questions-qty");
let levelsQty = document.getElementById("levels-qty");

const form31 = document.getElementById('form31');
form31.addEventListener('submit', logSubmit31);


function logSubmit31(event) {
    obj = { title: "", image: "", questions: [], levels: [] }
    //build obj
    obj.title = event.srcElement[0].value
    obj.image = event.srcElement[1].value
    for (let i = 0; i < event.srcElement[2].value; i++) {
        obj.questions.push({ title: "", color: "", answers: [] })
    }
    for (let i = 0; i < event.srcElement[3].value; i++) {
        obj.levels.push({ title: "", text: "", image: "", minValue: 0, maxValue: 0 })
    }
    //clear fields
    for (let i = 0; i <= 3; i++) {
        event.srcElement[i].value = ""
    }
    buildForm32();
    changePage(page31, page32);
    console.log(obj)
    event.preventDefault();
}

function changePage(origin, dest) {
    origin.classList.add('hidden');
    dest.classList.remove('hidden');
}

//3.2


const form32 = document.getElementById('form32');

function buildForm32() {
    for (let i = 0; i < obj.questions.length; i++) {
        const pergunta = `
        <h3>Pergunta ${i + 1}</h3>
        <input type="text" name="" id="q${i}title" placeholder="Texto da pergunta" required><br>
        <input type="text" name="" id="q${i}color" placeholder="Cor de fundo da pergunta" required><br>
        <h3>Resposta correta</h3>
        <input type="text" name="" id="q${i}ansText0" placeholder="Resposta correta" required><br>
        <input type="url" name="" id="q${i}ansUrl0" placeholder="URL da imagem" required><br>
        <h3>Respostas incorretas</h3>
        <input type="text" name="" id="q${i}ansText1" placeholder="Resposta incorreta 1" required><br>
        <input type="url" name="" id="q${i}ansUrl1" placeholder="URL da imagem 1" required><br>
        <input type="text" name="" id="q${i}ansText2" placeholder="Resposta incorreta 2"><br>
        <input type="url" name="" id="q${i}ansUrl2" placeholder="URL da imagem 2"><br>
        <input type="text" name="" id="q${i}ansText3" placeholder="Resposta incorreta 3"><br>
        <input type="url" name="" id="q${i}ansUrl3" placeholder="URL da imagem 3"><br>
        `
        form32.insertAdjacentHTML('beforeend', pergunta);
    }
    form32.insertAdjacentHTML('beforeend', '<button>Prosseguir pra criar níveis</button>');
    form32.addEventListener('submit', logSubmit32);
}

function logSubmit32(event){
    for (let i = 0; i < obj.questions.length; i++) {
        obj.questions[i].title = document.getElementById(`q${i}title`).value;
        obj.questions[i].color = document.getElementById(`q${i}color`).value;
        for (let j = 0; j < 4; j++) {
            if (document.getElementById(`q${i}ansText${j}`).value !== "") {
                obj.questions[i].answers.push({ text: "", image: "" });
                obj.questions[i].answers[j].text = document.getElementById(`q${i}ansText${j}`).value;
                obj.questions[i].answers[j].image = document.getElementById(`q${i}ansUrl${j}`).value;
                obj.questions[i].answers[j].isCorrectAnswer = j === 0 ? true : false;
            }
        }
    }
    //buildForm33();
    changePage(page32, page33);
    console.log(obj);
    event.preventDefault();
}


