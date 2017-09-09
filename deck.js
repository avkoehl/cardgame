// =================================================================================
// Deck Functions
// =================================================================================
function initDeck()
{
  deck = new Deck();
  deck.drawCard();
  var card = document.getElementById(deck.cards[0].name);
  card.classList.add('ui-draggable');
  $('#' + card.id).draggable();
  return;
}










// =================================================================================
// Deck Class
// =================================================================================
class Deck {
  constructor() {
    // make all the cards add them to cards list
    var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
    var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    this.cards = [];
    this.inplay = [];
    for (var i = 0; i < suits.length; i++) 
      for (var j = 0; j < values.length; j++) 
        this.cards.push(new Card(values[j], suits[i]));

  }// constructor

  drawCard() {
    this.cards[0].addToPage();
    this.inplay[0] = this.cards[0];
  }//drawCard

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
  }//constructor

  addToPage()
  {
    var cardDiv = document.createElement('div');
    cardDiv.id = this.name;
    cardDiv.className = 'card';
    cardDiv.classList.add('facedown');


    if (this.suit == "Clubs") {
        cardDiv.innerHTML = '\u2663' + this.value;
        cardDiv.classList.add("black");
    }

    else if (this.suit == "Hearts") {
      cardDiv.innerHTML = '\u2665' + this.value;
      cardDiv.classList.add("red");
    }

    else if (this.suit == "Diamonds") {
      cardDiv.innerHTML = '\u2666' + this.value;
      cardDiv.classList.add("red");
     }

    else {
      cardDiv.innerHTML = '\u2660' + this.value;
      cardDiv.classList.add("black");
    }

    cardDiv.onclick = function () {
      if (cardDiv.classList.contains('facedown')) {
        cardDiv.classList.remove('facedown');
      }
      else {
        cardDiv.classList.add('facedown');
      }
    }//onclick

    deckZone.appendChild(cardDiv);
  }//addToPage
    

}//class




