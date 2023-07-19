const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards()

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      memoryGame.pickedCards.push(card);
      card.className += " turned";

      //creating variables
      let firstCard = memoryGame.pickedCards[0].getAttribute("data-card-name")
      let secondCard = memoryGame.pickedCards[1].getAttribute("data-card-name")

      console.log(memoryGame.pickedCards.length);

      if (memoryGame.pickedCards.length == 2){  
        document.querySelectorAll('.turned').forEach((element)=>{
            setTimeout(() => {
            element.className = "card"; 
            }, 1000); 
        });
          if (memoryGame.checkIfPair(firstCard, secondCard)) {
            document.querySelectorAll('.turned').forEach((e)=>{
              setTimeout(() => {
                e.className = "blocked"; 
                }, 1000); 
            });
          }

        memoryGame.pickedCards = [];
        if (memoryGame.checkIfFinished()) {
          alert("You won!")
        }
      };
      
      document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked
      document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed
      

    });
  });
});

      







