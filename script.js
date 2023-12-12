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

            // Retrieve question and answer data for the selected category and question
            let questionData = json[id][i].question;
            let answerData = json[id][i].answer.split('');

            // Find the HTML elements to update with the question and answer data
            let question = document.getElementById("id");
            question.innerHTML = questionData;

            let answer = document.getElementById("answer");

            // Create div elements for each character in the answerData
            for (let j = 0; j < answerData.length; j++) {
                let div = document.createElement("div");
                div.classList.add("answer_place");
                div.setAttribute("id", answerData[j]);
                answer.appendChild(div);
            }

            // Define the alphabet for keyboard buttons
            let alphabet = "qwertyuiopasdfghjklzxcvbnm";

            // Create keyboard buttons dynamically
            for (let k = 0; k < alphabet.length; k++) {
                let keybord = document.createElement("button");
                keybord.id = alphabet[k];
                keybord.innerHTML = alphabet[k];

                // Add click event handler to each button
                keybord.onclick = function () {
                    if (answerData.includes(keybord.id)) {
                        let div = document.querySelectorAll(`#${keybord.id}`);
                        for (let h = 0; h < div.length; h++) {
                            div[h].innerHTML = keybord.id;
                        }
                        keybord.className = "checked";
                    }
                    else {
                        keybord.className = "faulse";
                    }
                };

                // Append the created button to the DOM or perform other necessary actions
            }
        }
    })
    .catch((error) => {
        // Handle errors that may occur during the fetch operation
        console.error('Error fetching data:', error);
    });
