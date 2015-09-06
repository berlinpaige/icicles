
var towers = {

  hasClass0: false,
  hasClass1: false,
  hasClass2: false,
  hasClass3: false,
  selectedElement: -1,
  
  init: function(){
    $('.backdrops').mousedown(towers.selectBox);
    $('.backdrops').mousedown(towers.draggable);
    $('button').click(towers.newGameIsClicked);
    towers.droppable();
  },

  draggable: function(){
    $('.blocks').draggable({
      helper: 'clone'
    });
  },
  droppable: function(){
    $('.backdrops').droppable({
      drop: function(event, ui){ 
         if (towers.selectedElement.hasClass('0')){
            $('#size0').remove();
            $(this).children().append(towers.selectedElement);
          }else if (towers.selectedElement.hasClass('1') && $(this).children().children().hasClass('0') === false){
            $('#size1').remove();
            $(this).children().append(towers.selectedElement);
          }else if(towers.selectedElement.hasClass('2') && $(this).children().children().hasClass('0') === false && $(this).children().children().hasClass('1') === false){
            $('#size2').remove();
            $(this).children().append(towers.selectedElement);
          }else if(towers.selectedElement.hasClass('3') && $(this).children().children().hasClass('0') === false && $(this).children().children().hasClass('1') === false && $(this).children().children().hasClass('2') === false){
            $('#size3').remove();
            $(this).children().append(towers.selectedElement);
          }  
      towers.isGameOver();
      }
    });
  },
  isGameOver: function(){
    if ($('#rightContainer').children().children().hasClass('0') && $('#rightContainer').children().children().hasClass('1') && $('#rightContainer').children().children().hasClass('2') && $('#rightContainer').children().children().hasClass('3')){
        console.log('gameOver!');
        towers.gameOver();
      } 
  },
  selectBox: function(){
    if($(this).children().children().hasClass('0')){
       towers.hasClass0 = true;
       towers.selectedElement = $('#size0').clone();
       towers.class0 = $('#size0').clone();
    }else if ($(this).children().children().hasClass('1')){
       towers.hasClass1 = true;
       towers.selectedElement = $('#size1').clone();
       towers.class1 = $('#size1').clone();
    }else if ($(this).children().children().hasClass('2')){
       towers.hasClass2 = true;
       towers.selectedElement = $('#size2').clone();
       towers.class2 = $('#size2').clone();
    }else if ($(this).children().children().hasClass('3')){
       towers.hasClass2 = true;
       towers.selectedElement = $('#size3').clone();
       towers.class3 = $('#size3').clone();
    }
  }, 
  gameOver: function(){
    $('h1, h4, p').text('');
    $('h1').text("YOU WON!!  Let's Play Again");
    $('.backdrops').attr('disabled', 'disabled');
  },
  newGameIsClicked: function(){
    $('.backdrops').removeAttr('disabled');
    document.location.reload();
  }
}

$(document).ready(towers.init)
