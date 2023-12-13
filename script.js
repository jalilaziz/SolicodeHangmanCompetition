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
            let i = Math.floor(Math.random() * 6);

            // Retrieve question and answer data for the selected category and question
            let questionData = json[id][i].question;
            let answerData = json[id][i].answer.splice(" ").split('');

            // Find the HTML elements to update with the question and answer data
            let question = document.getElementById("id");
            question.innerHTML = questionData;

            let answer = document.getElementById("answer");

            // Create div elements for each character in the answerData
            for (let j = 0; j < answerData.length; j++) {
                let div = document.createElement("div");
                div.className = "answer_place";
                div.id + answerData[j];
                answer.appendChild(div);
            }

            let x = 0;

            // Define the alphabet for keyboard buttons
            let alphabet = "qwertyuiopasdfghjklzxcvbnm";

            // Create keyboard buttons dynamically
            for (let k = 0; k < alphabet.length; k++) {
                let key
                let keyboard = document.createElement("button");
                keyboard
                keyboard.id = alphabet[k];
                keyboard.innerHTML = alphabet[k];

                // Add click event handler to each button
                keyboard.onclick = function () {
                    let all_divs = document.querySelectorAll(".answer_place")
                    if () {
                        
                    } 
                    else if (x <= 5) {
                        if (answerData.includes(keyboard.id)) {
                            let div = document.querySelectorAll(`#${keyboard.id}`);
                            for (let h = 0; h < div.length; h++) {
                                div[h].innerHTML = keyboard.id;
                            }
                            keyboard.className = "checked";
                        }
                            
                        }
                        else {
                            x++;
                            keyboard.className = "faulse";
                        }
                    else {
                        
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
