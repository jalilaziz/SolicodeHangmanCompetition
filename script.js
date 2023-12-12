//1
fetch('hangman-game.json')
    .then((response) => response.json())
    .then(async (json) => {
        if (window.location.pathname.includes("Hangman-Game.html")) {

            let i = Math.floor(Math.random() * 7);
            let para = new URLSearchParams(window.location.search);
            let id = para.get("id");
            



        }

        //2



        //3



        //4

    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });