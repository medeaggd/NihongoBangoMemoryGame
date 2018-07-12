/*
 * Create a list that holds all of your cards
 */
const cardList = [
     "一", "二", "三", "四", "五", "六", "七", "八",
     "一", "二", "三", "四", "五", "六", "七", "八"
];
const deck = document.querySelector('#deck');
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

deck.addEventListener('click', function(evt) {
     if (evt.target.classList.contains('card')) {
          displayCard(evt.target);
          pushCard(evt.target);
               if (openedCards.length === 2) {
                    checkMatch();
               }
     }
});
function displayCard(evt.target) {
     evt.target.classList.toggle('show');
     evt.target.classList.toggle('open');
};
function pushCard(evt.target) {
     openedCards.push(evt.target);
};
function checkMatch() {
     if (openedCards.classList[0] === openedCards.classList[1]) {
          openedCards.classList.toggle('matched');
          /*Need to clear cards from openedCards list*/
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
