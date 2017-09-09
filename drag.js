$( function() 
{
  $( "#playfieldZone, #handZone" ).droppable(
  {
    drop: function( event, ui ) 
    {
       var dropped = document.getElementById(ui.draggable.context.id);
       var droppedOn = document.getElementById(this.id);
       $(dropped).detach().appendTo(droppedOn);
       $(dropped).css({position: 'relative'});
       $(dropped).css({top: '0px', left: '0px'});
    }//drop
  });//droppable
} );//function



$( function() 
{
  $( "#discardZone, #deckZone" ).droppable(
  {
    drop: function( event, ui ) 
    {
       var dropped = document.getElementById(ui.draggable.context.id);
       var droppedOn = document.getElementById(this.id);
       var cards = droppedOn.getElementsByClassName('card');
       console.log(cards);

       for (i = 0; i < cards.length(); i++)
       {
         var id = cards[i].id;
         $(id).css({visibility: 'hidden'});
       }

       $(dropped).detach().appendTo(droppedOn);
       $(dropped).css({top: '0px', left: '0px'});
       $(dropped).css({position: 'relative'});
    }//drop
  });//dropable
} );//function
