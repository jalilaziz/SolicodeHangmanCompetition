function startAgain() {
    // Fetch JSON data from 'hangman-game.json'
    fetch('hangman-game.json')
        .then((response) => response.json()) // Parse the response as JSON
        .then(async (json) => {

            // Extract 'id' parameter from the URL query string using URLSearchParams
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            // Generate a random index 'i' to select a question from the specified category
            let i = Math.floor(Math.random() * 6);

            // Retrieve question and answer data for the selected category and question
            let questionData = json[id][i].question;
            let answerData = json[id][i].answer.replaceAll(" ", "").split('');

            // Find the HTML elements to update with the question and answer data
            let question = document.getElementById("question");
            question.innerHTML = questionData;

            let answer = document.querySelector("#answers");
            answer.innerHTML = "";

            // Create div elements for each character in the answerData
            for (let j = 0; j < answerData.length; j++) {
                let div = document.createElement("div");
                div.classList.add("answer_place");
                div.setAttribute("id", j);
                answer.appendChild(div);
            }

            // Define the alphabet for keyboard buttons
            let alphabet = "qwertyuiopasdfghjklzxcvbnm";

            // For validating if you lose or win 
            let x = 0;
            let keyboardDiv = document.getElementById("button");
            keyboardDiv.innerHTML = "";

            // Create keyboard buttons dynamically
            for (let k = 0; k < alphabet.length; k++) {
                let keyboard = document.createElement("button");
                keyboardDiv.appendChild(keyboard);
                keyboard.id = alphabet[k];
                keyboard.innerHTML = alphabet[k];

                // Add click event handler to each button
                keyboard.onclick = function () {
                    if (x <= 5) {
                        for (let y = 0; y < answerData.length; y++) {
                            // Check if the clicked letter is in the answer
                            if (answerData[y].toLowerCase().includes(keyboard.id)) {
                                let div = document.getElementById(y)
                                div.innerHTML = answerData[y];
                                keyboard.style.backgroundColor = "#0A7308"; // Set background color to green for correct guesses
                                keyboard.style.color = "white";
                            }
                        }
                        // Check if the clicked letter is not in the answer
                        if (!answerData.includes(keyboard.id.toLowerCase()) && !answerData.includes(keyboard.id.toUpperCase())) {
                            x++;
                            keyboard.style.backgroundColor = "red"; // Set background color to red for incorrect guesses
                            keyboard.style.color = "white"
                        }
                    } else {
                        console.log("You won!")
                    }
                };
            }
        });
}
startAgain();