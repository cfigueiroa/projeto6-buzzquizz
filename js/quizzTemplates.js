const quizzTemplate = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [
        {
            title: "Título da pergunta 1",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 2",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 3",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 2",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 2",
            minValue: 50
        }
    ]
}


const quizzTemplateFull = {
    title: "Super Teste de Template v2",
    image: "https://http.cat/411.jpg",
    questions: [
        {
            title: "Título da pergunta 1",
            color: "#FF0000",
            answers: [
                {
                    text: "Texto da resposta 1.1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2.1",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 3.1",
                    image: "https://http.cat/413.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 4.1",
                    image: "https://http.cat/414.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 2",
            color: "#0000FF",
            answers: [
                {
                    text: "Texto da resposta 1.2",
                    image: "https://http.cat/415.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 2.2",
                    image: "https://http.cat/416.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 3.2",
                    image: "https://http.cat/417.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 4.2",
                    image: "https://http.cat/418.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 3",
            color: "#00FF00",
            answers: [
                {
                    text: "Texto da resposta 1.3",
                    image: "https://http.cat/419.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 2.3",
                    image: "https://http.cat/420.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 3.3",
                    image: "https://http.cat/421.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 4.3",
                    image: "https://http.cat/422.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 4",
            color: "#FFFF00",
            answers: [
                {
                    text: "Texto da resposta 1.4",
                    image: "https://http.cat/423.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 2.4",
                    image: "https://http.cat/424.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 3.4",
                    image: "https://http.cat/425.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 4.4",
                    image: "https://http.cat/266.jpg",
                    isCorrectAnswer: true
                }
            ]
        }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 2",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 2",
            minValue: 50
        },
        {
            title: "Título do nível 3",
            image: "https://http.cat/413.jpg",
            text: "Descrição do nível 3",
            minValue: 100
        }
    ]
}

// Deve haver pelo menos 3 perguntas por quizz. Cada pergunta deve ter entre 2 e 4 respostas.
// Deve haver pelo menos 2 níveis por quizz.

const successMessage = {
    "data": {
        "id": 15701,
        "title": "Meu titulo do quizz!!!",
        "image": "http://127.0.0.1:5500/index.html",
        "questions": [
            {
                "title": "Texto da pergunta 1",
                "color": "#FFFFFF",
                "answers": [
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": true
                    },
                    {
                        "text": "Resposta incorreta 1",
                        "image": "http://127.0.0.1:5500/respostaincorreta1.html",
                        "isCorrectAnswer": false
                    },
                    {
                        "text": "Resposta incorreta 2",
                        "image": "http://127.0.0.1:5500/respostaincorreta2.html",
                        "isCorrectAnswer": false
                    },
                    {
                        "text": "Resposta incorreta 3",
                        "image": "http://127.0.0.1:5500/respostaincorreta3.html",
                        "isCorrectAnswer": false
                    }
                ]
            },
            {
                "title": "incorreta",
                "color": "#FFFFFF",
                "answers": [
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": true
                    },
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": false
                    },
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": false
                    },
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": false
                    }
                ]
            },
            {
                "title": "Resposta correta",
                "color": "#FFFFFF",
                "answers": [
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": true
                    },
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": false
                    },
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": false
                    },
                    {
                        "text": "Resposta correta",
                        "image": "http://127.0.0.1:5500/respostacorreta.html",
                        "isCorrectAnswer": false
                    }
                ]
            }
        ],
        "levels": [
            {
                "title": "414124",
                "text": "nivel legal",
                "image": "http://127.0.0.1:5500/index.html",
                "minValue": "0"
            },
            {
                "title": "5121251",
                "text": "nivel legal2",
                "image": "http://127.0.0.1:5500/index.html",
                "minValue": "44"
            }
        ],
        "key": "b37378e5-7c15-447f-ae5b-f466b0068102",
        "updatedAt": "2022-11-03T18:43:47.818Z",
        "createdAt": "2022-11-03T18:43:47.818Z"
    },
    "status": 201,
    "statusText": "Created",
    "headers": {
        "content-length": "1886",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        "method": "post",
        "url": "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/",
        "data": "{\"title\":\"Meu titulo do quizz!!!\",\"image\":\"http://127.0.0.1:5500/index.html\",\"questions\":[{\"title\":\"Texto da pergunta 1\",\"color\":\"#FFFFFF\",\"answers\":[{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":true},{\"text\":\"Resposta incorreta 1\",\"image\":\"http://127.0.0.1:5500/respostaincorreta1.html\",\"isCorrectAnswer\":false},{\"text\":\"Resposta incorreta 2\",\"image\":\"http://127.0.0.1:5500/respostaincorreta2.html\",\"isCorrectAnswer\":false},{\"text\":\"Resposta incorreta 3\",\"image\":\"http://127.0.0.1:5500/respostaincorreta3.html\",\"isCorrectAnswer\":false}]},{\"title\":\"incorreta\",\"color\":\"#FFFFFF\",\"answers\":[{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":true},{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":false},{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":false},{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":false}]},{\"title\":\"Resposta correta\",\"color\":\"#FFFFFF\",\"answers\":[{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":true},{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":false},{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":false},{\"text\":\"Resposta correta\",\"image\":\"http://127.0.0.1:5500/respostacorreta.html\",\"isCorrectAnswer\":false}]}],\"levels\":[{\"title\":\"414124\",\"text\":\"nivel legal\",\"image\":\"http://127.0.0.1:5500/index.html\",\"minValue\":\"0\"},{\"title\":\"5121251\",\"text\":\"nivel legal2\",\"image\":\"http://127.0.0.1:5500/index.html\",\"minValue\":\"44\"}]}"
    },
    "request": {}
}