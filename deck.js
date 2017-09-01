// make a draw function
// make a flip up and down on click function
// make different zones "deck, playfield ...
$( function() {
  $( "#board, #playfieldZone, #handZone" ).droppable({
    drop: function( event, ui ) {
       var dropped = document.getElementById(ui.draggable.context.id);
       var droppedOn = document.getElementById(this.id);
       $(dropped).detach().appendTo(droppedOn);
       $(dropped).css({position: 'relative'});
       $(dropped).css({top: '0px', left: '0px'});
    }
  });
} );
$( function() {
  $( "#discardZone, #deckZone" ).droppable({
    drop: function( event, ui ) {
       var dropped = document.getElementById(ui.draggable.context.id);
       var droppedOn = document.getElementById(this.id);
       $(dropped).detach().appendTo(droppedOn);
       $(dropped).css({top: '0px', left: '0px'});
       $(dropped).css({position: 'relative'});
    }
  });
} );

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
    cardDiv.classList.add('facedown');

    cardDiv.onclick = function () {
      if (cardDiv.classList.contains('facedown')) {
        cardDiv.classList.remove('facedown');
      }
      else {
        cardDiv.classList.add('facedown');
      }
    }//onclick

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

    deckZone.appendChild(cardDiv);

    $( function () 
    {
      $('#' + cardDiv.id).draggable( {
        stack: '#'+cardDiv.id,
        zIndex: 10000
    });//draggable function
    });//function

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


