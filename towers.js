
var towers = {

  hasClass0: false,
  hasClass1: false,
  hasClass2: false,
  hasClass3: false,
  selectedElement: -1,
  elementSelected: false,

  init: function(){
    $('.backdrops').dblclick(towers.selectBox); 
    $('.backdrops').click(towers.placeBox); 
    $('button').click(towers.newGameIsClicked);
  },
  selectBox: function(){
    if (towers.elementSelected === false){
      towers.hasClass0 = false;
      towers.hasClass1 = false;
      towers.hasClass2 = false;
      towers.hasClass3 = false;
      if($(this).children().children().hasClass('0')){
         towers.hasClass0 = true;
         $('#size0').addClass('selected');
         towers.selectedElement = $('#size0').clone();
         towers.elementSelected = true;
      }else if ($(this).children().children().hasClass('1')){
         towers.hasClass1 = true;
         $('#size1').addClass('selected');
         towers.selectedElement = $('#size1').clone();
         towers.elementSelected = true;
      }else if ($(this).children().children().hasClass('2')){
         towers.hasClass2 = true;
         $('#size2').addClass('selected');
         towers.selectedElement = $('#size2').clone();
         towers.elementSelected = true;
      }else if ($(this).children().children().hasClass('3')){
         towers.hasClass2 = true;
         $('#size3').addClass('selected');
         towers.selectedElement = $('#size3').clone();
         towers.elementSelected = true;
      }
    }else{
      $('.backdrops').siblings().children().children().removeClass('selected');
      towers.elementSelected = false
    }
  },
  placeBox: function(){
    if ($('#rightContainer').children().children().hasClass('0') && $('#rightContainer').children().children().hasClass('1') && $('#rightContainer').children().children().hasClass('2') && $('#rightContainer').children().children().hasClass('3')){
      console.log('gameOver!');
      towers.gameOver();
    } 
     
    if (towers.elementSelected === true){
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
    }
  },
  gameOver: function(){
    $('h1, h4, p').text('');
    $('h1').text("YOU WON!!  Let's Play Again");
    $('.backdrops').attr('disabled', 'disabled');
  },
  newGameIsClicked: function(){
    hasClass0 = false;
    hasClass1 = false;
    hasClass2 = false;
    hasClass3 = false;
    selectedElement = -1;
    elementSelected = false;
    $('.backdrops').removeAttr('disabled');
    $('#leftContainer').append($('#size3'));
    $('#leftContainer').append($('#size2'));
    $('#leftContainer').append($('#size1'));
    $('#leftContainer').append($('#size0'));


  }
}

$(document).ready(towers.init)