
let lastAnswers = [];





function startAgain() {

    document.getElementById("failed").style.display = "none"
    // Fetch JSON data from 'hangman-game.json'
    fetch('hangman-game.json')
        .then((response) => response.json()) // Parse the response as JSON
        .then(async (json) => {

            // Extract 'id' parameter from the URL query string using URLSearchParams
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            // Generate a random index 'i' to select a question from the specified category
            let i = Math.floor(Math.random() * 6);

            // Retrieve question and answer data and image for the selected category and question
            let questionData = json[id][i].question;
            let answerData = json[id][i].answer.replaceAll(" ", "").split('');
            let images = json.images[id]
            // ----creat image that show when u won 
            let image = document.querySelector(".showimage")
            let icon = document.createElement("img")
            icon.setAttribute("src", images)
            image.appendChild(icon)
            //------------------------------cheack if the question repeat ------------------
            if (lastAnswers.includes(answerData.toString().replaceAll(",", ""))) {
                startAgain();
            }
            else {
                lastAnswers.push(answerData.toString().replaceAll(",", ""))

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
                let hight = document.querySelector(".showimage img")
                let hightNumber = -100

                // Define the alphabet for keyboard buttons
                let alphabet = "AZERTYUIOPQSDFGHJKLMWXCVBN";

                // For validating if you lose or win 
                let x = 0;
                let tentative = document.getElementById("numberTent")
                tentative.innerHTML = "0"


                let keyboardDiv = document.getElementById("button");
                keyboardDiv.innerHTML = "";

                let messajFail = document.getElementById("failed")
                messajFail.innerHTML = ""

                // Create keyboard buttons dynamically
                for (let k = 0; k < alphabet.length; k++) {
                    let keyboard = document.createElement("button");
                    keyboardDiv.appendChild(keyboard);
                    keyboard.id = alphabet[k];
                    keyboard.innerHTML = alphabet[k];



                    hight.style.bottom = hightNumber + "%"

                    let hightChange = 100 / answerData.length

                    // Add click event handler to each button
                    keyboard.onclick = function () {


                        if (x < 4) {
                            for (let y = 0; y < answerData.length; y++) {
                                // Check if the clicked letter is in the answer
                                if (answerData[y].toUpperCase().includes(keyboard.id)) {
                                    let div = document.getElementById(y)
                                    div.innerHTML = answerData[y];
                                    keyboard.style.backgroundColor = "#0A7308"; // Set background color to green for correct guesses
                                    keyboard.style.color = "white";

                                    hightNumber += hightChange
                                    hight.style.bottom = hightNumber + "px"
                                    keyboard.disabled = true
                                }
                            }
                            // Check if the clicked letter is not in the answer
                            if (!answerData.includes(keyboard.id.toLowerCase()) && !answerData.includes(keyboard.id.toUpperCase())) {
                                if (keyboard.style.backgroundColor != "red") {
                                    keyboard.style.backgroundColor = "red"; // Set background color to green for correct guesses
                                    keyboard.style.color = "white";
                                    x++;
                                    keyboard.disabled = true
                                }

                            }
                        } else {
                            //------------------------------- if u lose ----------------
                            messajFail.innerHTML = "You lose try again </br>"

                            let imageFail = document.createElement("img")
                            imageFail.setAttribute("src", "")
                            messajFail.appendChild(imageFail)

                            let retry = document.createElement("img")
                            retry.setAttribute("src", "images/repeat-solid.svg")
                            retry.setAttribute("onclick", "startAgain()")
                            messajFail.appendChild(retry)

                            document.getElementById("failed").style.display = "block"
                            x++

                        }


                        tentative.innerHTML = x

                    }
                }
            }

        });
}
startAgain();