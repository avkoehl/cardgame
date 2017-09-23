$( function() 
{
  $( "#playfield, #handZone" ).droppable(
  {
    drop: function( event, ui ) 
    {
      var dropped = document.getElementById(ui.draggable.context.id);
      var droppedOn = document.getElementById(this.id);
      var droppedParent = dropped.parentElement.id;

      if (droppedParent == "deckZone")
      {
        console.log(dropped);

        // this isnt working, need to search that array for the value 'dropped'
        console.log(deck.cards[dropped]);
        deck.inplay.unshift(deck.cards[dropped]);

        console.log(deck.inplay.length);
        console.log(deck.cards.length);
      }

      $(dropped).detach().appendTo(droppedOn);
      $(dropped).css({position: 'relative'});
      $(dropped).css({top: '10px', left: '10px'});
    }//drop
  });//droppable
});//function



$( function() 
{
  $( "#discardZone, #deckZone" ).droppable(
  {
    drop: function( event, ui ) 
    {
      var dropped = document.getElementById(ui.draggable.context.id);
      var droppedOn = document.getElementById(this.id);

      cards = droppedOn.getElementsByClassName('card');
      //get index in card array using value (name)
      //remove dropped from inplay list

      $(dropped).detach().appendTo(droppedOn);
      $(dropped).css({top: '0px', left: '0px'});
      $(dropped).css({position: 'relative'});
    }//drop
  });//dropable
} );//function
