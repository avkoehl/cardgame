// NOT USING CANVAS
// just div card with some classes = faceup facedown
// look up drag div function 
// moving the create div to the deck rather than on the card
// try to fiugre out how to get the deck to stack in one place
// make a draw function

// =================================================================================
// Deck Class
// =================================================================================
class Deck {
  constructor() {
    var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
    var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    this.cards = [];
    for (var i = 0; i < suits.length; i++) 
      for (var j = 0; j < values.length; j++) 
        this.cards.push(new Card(values[j], suits[i]));
  } 

  shuffle() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
     }
  } 
}

// =================================================================================
// Card Class
// =================================================================================
class Card {
  constructor(value, suit){
    this.value = value;
    this.suit = suit;
    this.name = this.suit + "_" + this.value;

    var cardDiv = document.createElement('div');
    cardDiv.id = this.name;
    cardDiv.className = 'card' + ' red';
    cardDiv.innerHTML = this.name;
    console.log("adding card");
    document.getElementById("playfield").appendChild(cardDiv);
    $( function() {
      $(".card").draggable();
    });

    cardDiv.onclick = function () {
      console.log("flipping card");
      // if revealed, flip uspide down
      if (!this.classList.contains("red")) {
        this.classList.add("red");
        console.log("turning upside down");
        console.log(this.id);
       }
      else {
        this.classList.remove("red");
        console.log("turning upside down");
        console.log(this.id);
      }
    }
  }
}



// =================================================================================
// WRAPPER FUNCTIONS
// =================================================================================

function drawCard() {
  console.log("drawing card");
  card = new Card(3, 'hearts');
}
function initDeck () {
  deck = new Deck();
  document.getElementById("deck").style.visibility = "visible";
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


