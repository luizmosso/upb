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
  Evento_Click();
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
    var beat = $('#heart');
    
    if(!$(money).hasClass(heart)){
      money.addClass(heart);
      $(beat).addClass('heartbeat');
      $('.moneyText').animate({'opacity' : '1'}, 800 );  
    }
    else{
      money.removeClass(heart); 
      $(beat).removeClass('heartbeat');
      $('.moneyText').animate({'opacity' : '0'}, 500 );  
    }  
  });
}

var Fullscreen_Click = function(){
  $('#btnFullScreen').bind('click', function(){
    console.log('veio aqui');
    launchIntoFullscreen(document.documentElement);
  });
}

var Evento_Click = function(){

  $('.icInfo').bind('click', function(e){

    var nome = $(e.target).parents('.rowProjeto').find('.icLabel').text();
    var conteudo = '';

    console.log(nome)  ;
    switch(nome){
      case 'Horta Solidária':
      conteudo =  '<p>'                                                                               +
      'Projeto concebido no início de 2016, tem o intuito de melhorar a qualidade da '    +
      'alimentação das famílias atendidas além do incentivo a prática da atividade do '   + 
      'cultivo, provendo assim uma ocupação a aqueles que agora tem a possibilidade de '  + 
      'produzir parte do seu sustento.'                                                   +
      '</p><br><img src="/images/horta.jpg"><br><br><p>'                                   +
      'São fornecidos para as famílias todo o material de cultivo inicial, assim como '   +
      'ferramentas e sementes, onde é construída a infra-estrutura de proteção da horta ' +
      'de acordo com o espaço físico de cada moradia.'                                    +
      '</p><p>'                                                                            +
      'A oportunidade é concedida as famílias que , após análise caso a caso, se mostra '  +
      'empenhada no seu reerguimento social e em seguida existe o acompanhamento '        + 
      'constante do andamento da horta pois esse comprometimento e dedicação da família ' +
      'também é levado em conta na inclusão de futuros projetos e benefícios.'            +
      '</p><p>'                                                                           +
      'Hoje estamos com 4 hortas montadas e aguardando ansiosos pela colheita <strong>: )'+ 
      '</strong></p>';
      break;
      case 'Inclusão Digital':
      conteudo =  '<p>'                                                                               +
      'Projeto teve início em 2016, fruto de uma parceria entre os '                      +
      '<strong>UPB</strong> e o Centro de Formação People.'                                                        + 
      '</p><br><img src="/images/curso.jpg"><br><br><p>'                                   +
      'Trazendo para às crianças e adolescentes das famílias carentes, um curso '         +
      'de informática de alto nível em certificação respeitada por todas as '             +
      'empresas atuais. '                                                                 +
      '</p><p>'                                                                            +
      'O curso tem dois anos de duração e tem o intúito de alavancar a '                  +
      'motivação e as habilidades dos jovens para assumirem cada vez '                    + 
      'mais desafios e conquistas na área da educação. '                                  +
      '<br><br><img src="/images/people.png" style="max-width: 200px;">';
      break;
      case 'Doação de Sangue':
      conteudo =  '<p>' +
      'Projeto que se desenrola a 3 anos com grande sucesso e crescendo a cada ano.   '   +
      'Neste a oportunidade é para você que respeita a vida, onde não são necessários '   + 
      'bens materiais, dinheiro e afins. '                                                +
      '</p><p>Venha conosco salvar vidas doando amor em forma de sangue.'                 +
      '</p><br><img src="/images/sangue.jpg"><br><br><p>'                                 +
      'Os <strong>UPB</strong> fazem todo ano uma parceria com alguma instituição que '   +
      'promove infra-estrutura e profissionais especializados para '                      +
      'a coleta do sangue. Realizamos o trabalho primeiramente na cidade de Araxá MG '    +
      'porém no ano de 2016 na cidade de Uberaba. '                                       +
      '</p><p>'                                                                           +
      '<strong>Fique atento às nossas mídias sociais para saber quando será a próxima! </strong>' ;      
      break;
    }
    SetAndFireModal(nome, conteudo);  
  });
}

var SetAndFireModal = function(title, content){
  $('#upbModal').find('.modal-title').text(title);
  $('#upbModal').find('.modal-body').text('');
  $('#upbModal').find('.modal-body').append(content);
  $('#upbModal').modal('toggle');
}

// Find the right method, call on correct element
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}