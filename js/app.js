window.onload = function() {
	startGame();
}
/*
 * Create a list that holds all of your cards
 */
const cardList = [
     "img/ichi.jpg", "img/ni.jpg", "img/san.jpg", "img/shi.jpg",
	"img/go.jpg", "img/roku.jpg", "img/nana.jpg", "img/hachi.jpg",
	"img/ichi.jpg", "img/ni.jpg", "img/san.jpg", "img/shi.jpg",
	"img/go.jpg", "img/roku.jpg", "img/nana.jpg", "img/hachi.jpg"
];
const deck = document.querySelector('#deck');
const cards = deck.querySelectorAll('.card');
const newBoard = document.getElementByID('reset');
let openedCards = [];
let matched = 0;
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
newBoard.addEventListener('click', {
	openedCards = [];
	startGame();
});

deck.addEventListener('click', function(evt) {
	let clickedCard = evt.target;
     if (clickedCard.classList.contains('card') && !clickedCard.classList.contains('match') && openedCards.length < 2) {
          toggleCardDisplay(clickedCard);
          openedCards.push(clickedCard);
               if (openedCards.length === 2) {
                    checkMatch();
               }
     }
});

function toggleCardDisplay(clickedCard) {
     clickedCard.classList.toggle('show');
     clickedCard.classList.toggle('open');
};

function clearOpened(openedCards) {
     for (let open of openedCards) {
		open.classList.toggle('open');
		open.classList.toggle('show');
	}
};

function checkMatch(clickedCard) {
     if (openedCards[0].firstElementChild.className === openedCards[1].firstElementChild.className) {
          makeMatch(openedCards);
     } else {
          openedCards = [];
     }
}

function makeMatch(openedCards) {
	openedCards[1].classList.toggle('match');
	openedCards[0].classList.toggle('open');
	// add moves?
	if (matched === 16) {
		//end game conditions
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
