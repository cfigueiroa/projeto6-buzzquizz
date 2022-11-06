const api = 'https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes/';
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page31 = document.querySelector('.page31');
const page32 = document.querySelector('.page32');
const page33 = document.querySelector('.page33');
const page34 = document.querySelector('.page34');
const container = document.querySelector(".container")
const form31 = document.getElementById('form31');
form31.addEventListener('submit', logSubmit31);
const form33 = document.getElementById('form33');
const form32 = document.getElementById('form32');
let obj = { title: "", image: "", questions: [], levels: [] }
let title = document.getElementById("title");
let image = document.getElementById("image");
let questionsQty = document.getElementById("questions-qty");
let levelsQty = document.getElementById("levels-qty");
let contador = 0; let acertos = 0;
let finalResponse, finalObj
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
            const quizzes = response.data;
            const cards = document.querySelector('.bot .cards');
            const mycards = document.querySelector('.top .cards');
            cards.innerHTML = '';

            if (localStorage.length > 0) {

                let lowestValidId = quizzes[quizzes.length - 1].id;
                let biggestLocalId = localStorage.key(localStorage.length - 1)

                if (lowestValidId > biggestLocalId) {
                    localStorage.clear();

                } else {

                    for (var i = 0; i < localStorage.length; i++) {
                        if (localStorage.key(i) < lowestValidId) {
                            localStorage.removeItem(localStorage.key(i));
                        }
                    }

                }
            }

            if (localStorage.length > 0) {
                let empty = document.querySelector('.empty');
                empty.classList.add('hidden');
                mycards.innerHTML = '';
                let added = document.querySelector('.added');
                added.classList.remove('hidden');
            }

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
                if (localStorage.length > 0 && localStorage.getItem(quizzes[i].id)) {
                    let newDivClone = mycards.appendChild(newDiv.cloneNode(true));
                    newDivClone.addEventListener('click', function () {
                        loadQuiz(quizzes[i].id);
                    });
                }
                newDiv.addEventListener('click', function () {
                    loadQuiz(quizzes[i].id);
                });
            }

        })
        .catch(function (error) { });
}

function loadQuiz(id) {
    currentId = id;
    if (id !== 0) {
        axios.get(api + id)
            .then(function (response) {
                currentObj = response.data;
                changePage(page1, page2);
                criarQuizz()
            })
            .catch(function (error) { });
    }

}

//page2
function reloadPage() {
    location.reload(true);
}

function rolaPraBaixo(proxCaixa) {
    const elementoQueQueroQueApareca = document.getElementById(proxCaixa);
    elementoQueQueroQueApareca.scrollIntoView();
}

function selecionarCaixa(seletor) {
    const caixaClicada = seletor.parentNode;
    const click = caixaClicada.parentNode;
    const p = click.querySelectorAll("p")
    caixaClicada.classList.add("clicado")

    for (let i = 0; i < p.length; i++) {
        if (p[i].classList.contains("correct")) {
            p[i].classList.add("acertou")
        } else {
            p[i].classList.add("errou")
        }
    }

    const caixas = click.querySelectorAll(`.caixa`)
    for (let i = 0; i < caixas.length; i++) {
        if ((caixas[i].classList.contains("clicado") === false)) {
            caixas[i].innerHTML += `
            <div class="esconder"></div>
            `
        }
        else {
            seletor.removeAttribute("onclick")
        }
    }

    const paragrafo = seletor.parentNode.querySelector("p")
    if (paragrafo.classList.contains("correct")) {
        acertos++
    }
    const percentual = ((acertos / currentObj.questions.length) * 100).toFixed(0)

    if (contador === currentObj.levels.length) {
        let candidata = 0;
        let indice = 0;

        for (let i = 0; i < currentObj.levels.length; i++) {
            if (currentObj.levels[i].minValue <= percentual && currentObj.levels[i].minValue > candidata) {
                candidata = currentObj.levels[i].minValue;
                indice = i;
            }
        }

        container.innerHTML += `
        <div class="final" id="final">
                <div class="titulo-final">${percentual}% de acerto: ${currentObj.levels[indice].title}</div>
                    <div class="conteudo-final">
                        <div class="img-final"></div>
                        <div class="paragrafo-final"><p>${currentObj.levels[indice].text}</p></div>
                    </div>
                </div>
            <div class="button-final"><button onclick="loadQuiz(currentId)" class="reiniciar-quizz">Reiniciar Quizz</button></div>
            <div class="button"><button onclick="reloadPage()" class="home">Voltar pra home</button></div>
        `
        let imgFinal = document.querySelector(".img-final")
        imgFinal.style.background = `url(${currentObj.levels[indice].image})`
        imgFinal.style.backgroundSize = "100% 100%"
    }
    contador++

    let proxCaixa = "caixa" + (Number(click.parentNode.id.replace("caixa", "")) + 1);
    if (document.getElementById(proxCaixa)) {
        setTimeout(rolaPraBaixo, 2000, proxCaixa);
    } else {
        setTimeout(rolaPraBaixo, 2000, "final");
    }

}

function criarQuizz() {
    // Alterando o Fundo
    const fundo = document.querySelector(".fundo");
    fundo.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url("${currentObj.image}"), center`;
    fundo.style.backgroundSize = '100% 100%';
    const h1 = fundo.querySelector("h1");
    h1.innerHTML = currentObj.title

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
            if (currentObj.questions[i].answers[j].isCorrectAnswer) {
                caixas.innerHTML += `
                <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img" id="img${j}"></div>
                <p class="correct" id="paragrafo${j}">gatinho</p>
                </div>
                `
            } else {
                caixas.innerHTML += `
                <div class="caixa">
                <div onclick="selecionarCaixa(this)" class="img" id="img${j}"></div>
                <p id="paragrafo${j}">gatinho</p>
                </div>
                `
            }
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

    var content = document.querySelectorAll(".conteudo-quizz");
    
    for (let i = 0; i < content.length; i++) {
        for (let j = content[i].children.length; j >= 0; j--) {
            content[i].appendChild(content[i].children[Math.random() * j | 0]);
        }
    }
}

//page3
//3.1
function logSubmit31(event) {
    obj = { title: "", image: "", questions: [], levels: [] }
    //build objtit
    obj.title = event.srcElement[0].value
    obj.image = event.srcElement[1].value
    for (let i = 0; i < event.srcElement[2].value; i++) {
        obj.questions.push({ title: "", color: "", answers: [] })
    }
    for (let i = 0; i < event.srcElement[3].value; i++) {
        obj.levels.push({ title: "", text: "", image: "", minValue: 0 })
    }
    //clear fields
    for (let i = 0; i <= 3; i++) {
        event.srcElement[i].value = ""
    }
    buildForm32();
    changePage(page31, page32);
    event.preventDefault();
}

function changePage(origin, dest) {
    origin.classList.add('hidden');
    dest.classList.remove('hidden');
    window.scrollTo(0, 0);
}

//3.2
function buildForm32() {
    for (let i = 0; i < obj.questions.length; i++) {
        const pergunta = `
        <div class="forms">
            <h3>Pergunta ${i + 1}</h3>
            <img class="vector" onclick="mostrarFoms(this)" src="./img/Vector.png">
            <div class="hidden inputs"> 
                <input type="text" name="" id="q${i}title" placeholder="Texto da pergunta" minlength="20" required><br>
                <input type="text" name="" id="q${i}color" placeholder="Cor de fundo da pergunta" pattern="#([0-9]|[A-F]|[a-f]){6}" required><br>
                <h3>Resposta correta</h3>
                <input type="text" name="" id="q${i}ansText0" placeholder="Resposta correta" required><br>
                <input type="url" name="" id="q${i}ansUrl0" placeholder="URL da imagem" required><br>
                <h3>Respostas incorretas</h3>
                <input type="text" name="" id="q${i}ansText1" placeholder="Resposta incorreta 1" required><br>
                <input type="url" name="" id="q${i}ansUrl1" placeholder="URL da imagem 1" class="id1" required><br>
                <input type="text" name="" id="q${i}ansText2" placeholder="Resposta incorreta 2"><br>
                <input type="url" name="" id="q${i}ansUrl2" placeholder="URL da imagem 2" class="id2"><br>
                <input type="text" name="" id="q${i}ansText3" placeholder="Resposta incorreta 3"><br>
                <input type="url" name="" id="q${i}ansUrl3" placeholder="URL da imagem 3" class="id3"><br>
            </div>
        </div>
        `
        form32.insertAdjacentHTML('beforeend', pergunta);
    }
    form32.insertAdjacentHTML('beforeend', '<button>Prosseguir pra criar níveis</button>');
    form32.addEventListener('submit', logSubmit32);
    setTimeout(removerHidden, 0)
}

function removerHidden(){
    const a = document.querySelector("#form32 .forms");
    a.querySelector(".inputs").classList.remove("hidden");
    const b = a.querySelector(".vector");
    b.remove();
}

function mostrarFoms(seletor){
    seletor.parentNode.querySelector(".inputs").classList.toggle("hidden")
}

function logSubmit32(event) {
    for (let i = 0; i < obj.questions.length; i++) {
        obj.questions[i].title = document.getElementById(`q${i}title`).value;
        obj.questions[i].color = document.getElementById(`q${i}color`).value;
        for (let j = 0; j < 4; j++) {
            if (document.getElementById(`q${i}ansText${j}`).value !== "" && document.getElementById(`q${i}ansUrl${j}`).value !== "") {
                obj.questions[i].answers.push({ text: "", image: "" });
                obj.questions[i].answers[j].text = document.getElementById(`q${i}ansText${j}`).value;
                obj.questions[i].answers[j].image = document.getElementById(`q${i}ansUrl${j}`).value;
                obj.questions[i].answers[j].isCorrectAnswer = j === 0 ? true : false;
            }
        }
    }
    buildForm33();
    changePage(page32, page33);
    event.preventDefault();
}

//3.3
function buildForm33() {
    for (let i = 0; i < obj.levels.length; i++) {
        const level = `
        <div class="forms">
        <h3>Nível ${i + 1}</h3>
        <input type="text" name="" id="l${i}title" placeholder="Título do nível" minlength="10" required><br>
        <input type="number" name="" id="l${i}minValue" placeholder="% de acerto mínima" min="0" max="100" required><br>
        <input type="url" name="" id="l${i}image" placeholder="URL da imagem do nível" required><br>
        <input type="text" name="" id="l${i}text" placeholder="Descrição do nível" minlength="30" required><br>
        </div>
        `
        form33.insertAdjacentHTML('beforeend', level);
    }
    form33.insertAdjacentHTML('beforeend', '<button>Finalizar Quizz</button>');
    form33.addEventListener('submit', logSubmit33);
}

function logSubmit33(event) {
    for (let i = 0; i < obj.levels.length; i++) {
        if (document.getElementById(`l${i}minValue`).value === "0") {
            break;
        }
        if (i = obj.levels.length - 1) {
            alert("O valor de % de acerto mínima de algum nível deve ser igual à 0!");
            event.preventDefault();
            return;
        }
    }
    for (let i = 0; i < obj.levels.length; i++) {
        obj.levels[i].title = document.getElementById(`l${i}title`).value;
        obj.levels[i].image = document.getElementById(`l${i}image`).value;
        obj.levels[i].text = document.getElementById(`l${i}text`).value;
        obj.levels[i].minValue = document.getElementById(`l${i}minValue`).value;
    }
    buildPage34();
    event.preventDefault();
}

//3.4
function buildPage34() {

    axios.post(api, obj)
        .then(function (response) {
            finalResponse = response;
            finalObj = response.data;
            localStorage.setItem(finalObj.id, finalObj.key);
            page34.innerHTML = "";
            page34.innerHTML = `
            <h2>Seu quizz está pronto!</h2>
            <div class="quizz-look">
            <image src="${finalObj.image}" class="image-quizz">
            <h3>${finalObj.title}</h3>
            </div>
            <button class="acesso" onClick="loadQuiz2(${finalObj.id})">Acessar Quizz</button><br>
            <button class="voltar-home" onClick="window.location.href=window.location.href">Voltar pra home</button>
            `;
            changePage(page33, page34);
        })
        .catch(function (error) { });
}

function loadQuiz2(id) {
    currentId = id;
    if (id !== 0) {
        axios.get(api + id)
            .then(function (response) {
                currentObj = response.data;
                changePage(page34, page2);
                criarQuizz()
            })
            .catch(function (error) { });
    }

}
