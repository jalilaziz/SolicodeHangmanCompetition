// Fetch JSON data from 'hangman-game.json'
fetch('hangman-game.json')
    .then((response) => response.json()) // Parse the response as JSON
    .then(async (json) => {
        // Check if the current page is Hangman-Game.html
        if (window.location.pathname.includes("Hangman-Game.html")) {

            // Extract 'id' parameter from the URL query string using URLSearchParams
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            // Generate a random index 'i' to select a question from the specified category
            let i = Math.floor(Math.random() * 7);

            // let para = new URLSearchParams(window.location.search);
            // let id = para.get("id");
            // let questionData = json[id][i].question
            // let answerData = json[id][i].answer.split('')

            // let question = document.getElementById("id")
            // question.innerHTML = questionData

            // let answer = document.getElementById("answer")

            // for(let i =0 ; i< answerData.length;i++){
            //     let div = document.createElement("div")
            //     div.classList.add("")
            //     div.setAttribute("id",answer[i])
            //     answer.appendChild(div)
            // }

            // Access the data for the selected category and question
            let category_data = json[id][i];

            // Display the question on the HTML page
            let question = document.getElementById("question");
            question.innerHTML = category_data.question;

            // Get the answer for the selected question
            let answer = category_data.answer;

            // Split the answer string into an array of characters using ', ' as the delimiter
            let answerArray = answer.split(', ');
            

        }

        //2

//3


//4


    })
    .catch((error) => {
        // Handle errors that may occur during the fetch operation
        console.error('Error fetching data:', error);
    });
