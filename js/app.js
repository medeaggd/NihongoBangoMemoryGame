window.onload = function() {
	startGame();
}
/*
 * Create a list that holds all of your cards
 */
const cardList = [
     "/img/ichi.jpg", "/img/ni.jpg", "/img/san.jpg", "/img/shi.jpg",
	"/img/go.jpg", "/img/roku.jpg", "/img/nana.jpg", "/img/hachi.jpg",
     "/img/ichi.jpg", "/img/ni.jpg", "/img/san.jpg", "/img/shi.jpg",
	"/img/go.jpg", "/img/roku.jpg", "/img/nana.jpg", "/img/hachi.jpg"
];
const deck = document.getElementById('deck');
const newBoard = document.getElementById('reset');
let openedCards = [];
let matchCount = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
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

/* Create each card */
function createDeck(cardList) {
     for (let card of cards) {
	         return `<li class="card"><img src="${card}"></li>`;
     };
};

function createGameBoard() {
	const cardHTML = cardList.map(function(card) {
		return cardList(card);
	});
	deck.innerHTML = cardHTML.join('');
	return deck;
}

 /* Initial load of cards after page loads */
function startGame() {
     shuffle(cardList);
	createGameBoard();
	/* Initialize clock */
};

/* Resets the board when the "New Board" button is clicked */
newBoard.addEventListener('click', function() {
     //TODO: Add an if statement with listeners to prompt user if they really want to restart game.
	openedCards = [];
	startGame();
});

deck.addEventListener('click', function(evt) {
     if (clickedCard.classList.contains('card') && !clickedCard.classList.contains('match') && openedCards.length < 2) {
          let clickedCard = evt.target;
          toggleCardDisplay(clickedCard);
          openedCards.push(clickedCard);
               if (openedCards.length === 2) {
                    checkMatch();
               }
		matchCount += 1;
     }
});

function toggleCardDisplay(clickedCard) {
     clickedCard.classList.add('show', 'open');
};

function clearOpened(openedCards) {
     for (let open of openedCards) {
		open.classList.toggle('open');
		open.classList.toggle('show');
          openedCards = [];
	}
};

function checkMatch(clickedCard) {
     if (openedCards[0].firstElementChild.HTMLImageElement.src === openedCards[1].firstElementChild.HTMLImageElement.src) {
          makeMatch(openedCards);
     } else {
          clearOpened(openedCards);
     }
}

function makeMatch(openedCards) {
	openedCards[1].classList.add('match');
	openedCards[0].classList.add('match');
	if (matchCount === 16) {
		//end game: stop timer, pop-up with stats
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
