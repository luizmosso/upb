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
});

var Category_Click = function(){

	$(selCatBlock).bind('click', function(e){

		var categoria = $(e.target);
		if (!$(e.target).hasClass(clsCatBlock)) {
			categoria = $(categoria).parents(selCatBlock);
		}
		var box = $(categoria).parents(selBox);

    	if ($(box).offset().top === 0) { // If we are expanding

    		$(categoria).css(
    		{
    			'z-index' : 			'1000',
    			'opacity' : 			'1',
    			'-webkit-box-shadow': 	'none',
    			'-moz-box-shadow':    	'none',
    			'box-shadow':         	'none'
    		}
    		);

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
   //      	$(selCatBlock).css({'z-index' : '1000', 'opacity' : '0.2'}); // Bluring all the categories
   //      	$(box).animate({ top : '-100%' }, 800 ); // Rolling the page up

   //      	for (var c in categorias){	// Getting the correct category
   //      		if ($(categoria).hasClass(categorias[c].class)) {

   //      			$(categoria).css(
   //      			{
   //      				'z-index' : 			'1005',
   //      				'opacity' : 			'1',
   //      				'-webkit-box-shadow' : 	'2px 2px 5px 0px rgba(50, 50, 50, 0.75)',
   //      				'-moz-box-shadow' :    	'2px 2px 5px 0px rgba(50, 50, 50, 0.75)',
   //      				'box-shadow' :         	'2px 2px 5px 0px rgba(50, 50, 50, 0.75)'
   //      			}
   //      			);

			// 		// Animating to show products page
			// 		var top = (100 - (25 * categorias[c].position)).toString() + '%';

			// 		$(categoria).animate({ top : top, height : '40px' }, 800, function(){
			// 			$(selSearch).animate({'opacity' : '1' });
			// 			$(selUpArrow).css('opacity','1' );
			// 		});

			// 		$(categoria).find(selCatImg).animate({'width' : '30px', 'height' : '30px' }, 800 );        	       	
			// 		$(categoria).find(selCatTitle).animate({'height' : '30px', 'line-height' : '30px' }, 800 );
			// 		$('#btnFinalizar').removeClass();
			// 		$('#btnFinalizar').addClass(categorias[c].class);
			// 	}
			// }
			// $(categoria).addClass('selected');			
		}
	});
}