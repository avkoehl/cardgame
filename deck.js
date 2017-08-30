// make a draw function
// make a flip up and down on click function
// make different zones "deck, playfield ...

// =================================================================================
// Deck Class
// =================================================================================
class Deck {
  constructor() {
    // make all the cards add them to cards list
    var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
    var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    this.cards = [];
    for (var i = 0; i < suits.length; i++) 
      for (var j = 0; j < values.length; j++) 
        this.cards.push(new Card(values[j], suits[i]));

        // make a the deckzone div visible
        var deckZone = document.getElementById('deckZone');
        deckZone.style.visibility = 'visible';

  }// constructor

  shuffle() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
     }
  }// shuffle 
}//deck Class

// =================================================================================
// Card Class
// =================================================================================
class Card 
{
  constructor(value, suit)
  {
    this.value = value;
    this.suit = suit;
    this.name = this.suit + "_" + this.value;

    var cardDiv = document.createElement('div');
    cardDiv.id = this.name;
    cardDiv.className = 'card';

    if (this.suit == "Clubs") {
      cardDiv.innerHTML = '\u2663' + this.value;
      cardDiv.classList.add("black");
    }

    else if (this.suit == "Hearts") {
      cardDiv.innerHTML = '\u2661' + this.value;
      cardDiv.classList.add("red");
    }

    else if (this.suit == "Diamonds") {
      cardDiv.innerHTML = '\u2662' + this.value;
      cardDiv.classList.add("red");
    }

    else {
      cardDiv.innerHTML = '\u2663' + this.value;
      cardDiv.classList.add("black");
    }

    deckZone.appendChild(cardDiv);

    $( function () 
    {
      $('#' + cardDiv.id).draggable();
    });//draggable

  }//constructor
}//class



// =================================================================================
// WRAPPER FUNCTIONS
// =================================================================================

function drawCard() {
  console.log("drawing card");
  card = new Card(3, 'hearts');
}
function initDeck () {
  deck = new Deck();
  return;
}

function revealCard(element){
  console.log(element);
  //deck.cards[0].reveal();
  return;
}

function shuffle() {
  deck.shuffle();
  return deck;
}

// =================================================================================
// MISCELLANEOUS FUNCTIONS
// =================================================================================



//function lessThan(this, Card){
//  if indexOf(this.suit) < indexOf(Card.suit):
//    return true
//  if indexOf(this.suit) > indexOf(Card.suit):
//    return false
//  else:
//    return this.value < Card.value
//}


