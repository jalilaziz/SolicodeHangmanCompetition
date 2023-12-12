//1
// Fetch JSON data from 'hangman-game.json'
fetch('hangman-game.json')
    .then((response) => response.json()) // Parse the response as JSON
    .then(async (json) => {
        // Check if the current page is Hangman-Game.html
        if (window.location.pathname.includes("Hangman-Game.html")) {

            // Get the 'id' parameter from the URL
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            // Generate a random index 'i' to select a question from the specified category
            let i = Math.floor(Math.random() * 7);

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
