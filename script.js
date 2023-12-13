// Fetch JSON data from 'hangman-game.json'
fetch('hangman-game.json')
    .then((response) => response.json()) // Parse the response as JSON
    .then(async (json) => {
<<<<<<< HEAD
        console.log(json)
        // Extract 'id' parameter from the URL query string using URLSearchParams
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        // Generate a random index 'i' to select a question from the specified category
        let i = Math.floor(Math.random() * 6);
        console.log(json[id][i].question)
=======
>>>>>>> d650ed47957405e5353c07b7f26b7e185a3d1d87

            // Extract 'id' parameter from the URL query string using URLSearchParams
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            // Generate a random index 'i' to select a question from the specified category
            let i = Math.floor(Math.random() * 6);

            // Retrieve question and answer data for the selected category and question
            let questionData = json[id][i].question;
            let answerData = json[id][i].answer.replaceAll(" ","").split('');

            // Find the HTML elements to update with the question and answer data
            let question = document.getElementById("question");
            question.innerHTML = questionData;

            let answer = document.querySelector(".answers");

        // Create div elements for each character in the answerData
        for (let j = 0; j < answerData.length; j++) {
            let div = document.createElement("div");
            div.classList.add("answer_place");
            div.setAttribute("id", j);
            answer.appendChild(div);
        }

        // Define the alphabet for keyboard buttons
        let alphabet = "qwertyuiopasdfghjklzxcvbnm";

        //for validing if u lose or won 
        let x = 0;
        let keyboardDiv = document.getElementById("button")

        // Create keyboard buttons dynamically
        for (let k = 0; k < alphabet.length; k++) {
            let keyboard = document.createElement("button");
            keyboardDiv.appendChild(keyboard)
            keyboard.classList = "letter"
            keyboard.id = alphabet[k];
            keyboard.innerHTML = alphabet[k];

            // Add click event handler to each button
            keyboard.onclick = function () {
                if (x <= 5) {
                    for (let y = 0; y < answerData.length; y++) {
                        console.log(keyboard.id)
                        console.log(answerData[y])
                        if (answerData[y].toLowerCase().includes(keyboard.id)) {
                            let div = document.getElementById(y)
                            div.innerHTML = answerData[y]
                            keyboard.id.classList
                        }

                    }
                    if (!answerData.includes(keyboard.id.toLowerCase()) == true && !answerData.includes(keyboard.id.toUpperCase()) == true) {
                        keyboard.id.className = "faulse"
                        x++;
                        console.log(x)
                    }
                } else {
                    console.log("u won")
                }

            };

        }

    })