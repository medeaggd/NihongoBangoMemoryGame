/*
 * Create a list that holds all of your cards
 */
const cardList = [
     "一", "二", "三", "四", "五", "六", "七", "八",
     "一", "二", "三", "四", "五", "六", "七", "八"
];
const deck = document.querySelector('#deck');
const cards = deck.querySelectorAll('.card');
const newBoard = document.getElementByID('reset');
let openedCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 --?.shuffle(cardList);
 *   - loop through each card and create its HTML
 --cardList.forEach.createHTML()?
 *   - add each card's HTML to the page
 --document.ul.li.appendChild()?
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/* Create a card */
function createCardList(card) {
	return `<li class="card"><i class="${card}"></i></li>"`;
}

 /* Initial load of cards after page loads */
window.onload = function() {
     shuffle(cardList);
     cardList.forEach(function(number) {
          let cardSpan = document.createElement('span');
          for (let card of cards) {
               card.appendChild(cardSpan);
               cardSpan.classList.add(number);
               cardSpan.innerHTML(number);
          };
     });
});

/* Resets the board when the "New Board" button is clicked */
newBoard.addEventListener('click', {
     document.getElementsByClass('card').removeChild('span'); /* clear old spans*/
     shuffle(cardList);
     cardList.forEach(function createCard(number) {
          let cardSpan = document.createElement('span');
          let cards = deck.querySelectorAll('li');
          for (let card of cards) {
               card.appendChild(cardSpan);
               cardSpan.classList.add(cardList);
               cardSpan.innerHTML(cardList);
          };
     });
});

deck.addEventListener('click', function(evt) {
     if (evt.target.classList.contains('card')) {
          toggleCardDisplay(evt.target);
          pushCard(evt.target);
               if (openedCards.length === 2) {
                    checkMatch();
               }
     }
});

function toggleCardDisplay(evt.target) {
     evt.target.classList.toggle('show');
     evt.target.classList.toggle('open');
};

function pushCard(evt.target) {
     openedCards.push(evt.target);
};

function checkMatch() {
     if (openedCards.classList[0] === openedCards.classList[1]) {
          openedCards.classList.toggle('matched');
          openedCards.pop();
          openedCards.pop();
     } else {
          toggleCardDisplay(openedCards[0]);
          toggleCardDisplay(openedCards[1]);
          openedCards.pop();
          openedCards.pop();
     }
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
