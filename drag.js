$( function() 
{
  $( "#playfield, #handZone" ).droppable(
  {
    drop: function( event, ui ) 
    {
       
       var dropped = document.getElementById(ui.draggable.context.id);
       var droppedOn = document.getElementById(this.id);
       var droppedParent = dropped.parentElement.id;
       console.log(droppedParent);

       if (droppedParent) {
         deck.returnCard();
         deck.drawCard();
        }

       $(dropped).detach().appendTo(droppedOn);
       $(dropped).css({position: 'relative'});
       $(dropped).css({top: '10px', left: '10px'});

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
       returncard();

       $(dropped).detach().appendTo(droppedOn);
       $(dropped).css({top: '0px', left: '0px'});
       $(dropped).css({position: 'relative'});
    }//drop
  });//dropable
} );//function
