var dot 			= '.';
var clsBox 			= 'box';
var clsCatBlock 	= 'catBlock';
var clsCatTitle 	= 'catTitle';
var clsUpArrow 		= 'up_arrow';

var selBox 			= dot + clsBox;
var selCatBlock 	= dot + clsCatBlock;
var selCatTitle 	= dot + clsCatTitle;
var selUpArrow 		= dot + clsUpArrow;


$(document).ready(function(){
	$('.box').animate({'opacity' : '1'}, 500);
	Category_Click();
  Money_Click();
});

var Category_Click = function(){

	$(selCatBlock).bind('click', function(e){

		var categoria = $(e.target);

		if (!$(e.target).hasClass(clsCatBlock)) {
			categoria = $(categoria).parents(selCatBlock);
		}
		var box = $(categoria).parents(selBox);
  	if ($(box).offset().top === 0) { // If we are expanding

      $(selCatBlock).css({'opacity': '0'});
      $(categoria).css({'z-index' : '1001', 'opacity' :	'1'});

  		// Animating back to original
  		$(box).animate({ top : '-100%' }, 800);
  		$('#mainQuote').animate({'opacity':'0'}, 500);

  		var top = 80 - (15 * parseInt($(categoria).attr('ordem')));
  		$('.page').css({'display':'none'});

  		$(categoria).animate({ 'top' : top.toString() + '%' }, 800, function(){    			
  			$(this).find('.catBlockContent').css({'display': 'block', 'margin-top' : '45px'});    			
  			$(this).find(selUpArrow).animate({'opacity' : '1'}, 500 );
  			$(this).find('.logo_mini').animate({'opacity' : '1'}, 500 );  
  			$(this).animate({'height':'100%'}, 500, function(){
  				$(this).find('.page').css({'display':'block'});
  				$(this).find('.page').animate({'opacity':'1'}, 1000);
  			});
  		});

  		$(categoria).removeClass('selected');    		    		
  	}
    else{ // If we are retracting

      if ($(e.target).hasClass(clsUpArrow)) {        

        $(categoria).find('.page').animate({'opacity':'0'}, 300, function(){          
          $(this).css({'display':'none'});

          $(categoria).animate({'height':'15%'}, 400, function(){            
            $(selCatBlock).css({'opacity': '1'});  
            $(box).animate({ top : '0' }, 800);
            $(categoria).find('.logo_mini').animate({'opacity' : '0'}, 300);  
            $(categoria).animate({ 'top' : '30px' }, 800, function(){         
              $(this).find('.catBlockContent').css({'display': 'table-cell', 'margin-top' : 'auto'});          
              $(this).find(selUpArrow).animate({'opacity' : '0'}, 500 );            
              $('#mainQuote').animate({'opacity':'1'}, 500);
            });
          });
        });     
      }
    }
  });
}

var Money_Click = function(){
  $('.money').bind('click', function(){
    var money = $(this);
    var heart = 'heart';

    if(!$(money).hasClass(heart)){
      $(money).addClass(heart);  
      $('.moneyText').animate({'opacity' : '1'}, 800 );  
    }
    else{
      $(money).removeClass(heart); 
      $('.moneyText').animate({'opacity' : '0'}, 500 );  
    }  
  });
}