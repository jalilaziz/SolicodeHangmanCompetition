//1
fetch('hangman-game.json')
    .then((response) => response.json())
    .then(async (json) => {
        if (window.location.pathname.includes("Hangman-Game.html")) {

            let i = Math.floor(Math.random() * 7);
            let para = new URLSearchParams(window.location.search);
            let id = para.get("id");
            let questionData = json[id][i].question
            let answerData = json[id][i].answer.split('')

            let question = document.getElementById("id")
            question.innerHTML = questionData

            let answer = document.getElementById("answer")

            for(let i =0 ; i< answerData.length;i++){
                let div = document.createElement("div")
                div.classList.add("")
                div.setAttribute("id",answer[i])
                answer.appendChild(div)
            }




        }

        //2



        //3



        //4

    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });