function requiredFieldValidation() 
{
	var control = event.currentTarget;

	if($(control).hasClass('empty-field')) {
		$(control).removeClass('empty-field');
	}

	if($(control).val().length == 0){
		$(control).addClass('empty-field');
	}
};

$(function(){ 
	//Init Dropdowns
	$('.dropdown-toggle').dropdown()

	//Expansive Boxes
	$('.expansive-box h2').click(function(){
		var box = $(this).parent();
		$(this).next('div').slideToggle(150);
		box.toggleClass('opened');
	});

	//Click para ativar/desativar coluna da tabela
	$('.drop-menu-clients-list label').click(function(){
		refreshTableClients();
	});

	//Loopa os contadores e inicia os clocks
	$('.wait-counter').each(function(){
		var actual = $(this).attr("data-init");
		var limit = $(this).attr("data-limit");
		display = $(this);
    	startTimer( actual, limit, display);
	});

	$('#cmdAddClient').click(function(){
		validate_add_client();
	});

	$('#cmdAddCompany').click(function(){
		validate_add_company();
	});

	$('.history-title .dropdown-item').click(function(){
		$('.history-title .dropdown-item').removeClass('active');
		$(this).addClass('active');
		var label = $(this).text();
		var filter = $(this).attr('data-type');
		$('#filter-type').html(label);
	});

	$('.input-datepicker').datepicker({
		language: "pt-BR"
	})

	// .on('changeDate', function(e) {
	// 	$('.input-datepicker').val(e.date.toLocaleDateString());
	// 	// sessionStorage.setItem("BirthDate", e.date.toLocaleDateString());
	// 	$('.input-datepicker').blur();
	// 	$('.input-datepicker').focusout();
	// 	$(this).datepicker('hide');
	// 	// alert(e.date.toLocaleDateString();
    // });

	// $('.list-status a').click(function(){

	// 	if(!$(this).hasClass('active')){
	// 		$('.list-status a').removeClass('active');
	// 		$(this).addClass('active');
	// 		var status = $(this).attr('data-status');
	// 		$('.btn-featured').attr('data-status',status);
	// 		$('.modal-status').toggleClass('opened');
	// 	}

	// });

	// $('.btn-featured').click(function(){
	// 	$('.modal-status').toggleClass('opened');
	// });

	$('.modal-close').click(function(){
		$(this).parents('.opened').removeClass('opened');
	});

	// $('.btn-notifications').click(function(){
	// 	$('#modal-tasks').addClass('opened');
	// });

	// $('.btn-user').click(function(){
	// 	$('#modal-user').addClass('opened');
	// });

	$('.btn-today-news-detail').click(function(){
		$('#modal-news-detail').addClass('opened');
	});

	$('.modal-status .white-overlay').click(function(){
		$(this).parent().removeClass('opened');
	});

	$('.categories-subject-list > li > a, .subcategories-subject-list > li > a').click(function(){
		$(this).toggleClass('opened');
	});

	$('.tree-list a:not(.article-tree-link)').click(function(){
		$(this).parent('li').toggleClass('opened');
	});

	$('.category-articles-list-block a').click(function(){
		$(this).parents('.category-articles-list-block').hide();
		$('.articles-list-block').show();
	});

	$('.title-article-category a').click(function(){
		
		$('.articles-list-block').hide();
		$('.category-articles-list-block').show();
	});

	$('.article-tree-link,.article-link').click(function(){
		$('#modal-article').addClass('opened');
	});

	$('.timeline-expansive-header, .expansive-timeline-item > a').click(function(){
		$(this).parents('.timeline-item').toggleClass('closed');
	});

});

//Exibe ou não uma coluna da lista
function refreshTableClients(){
	$('.drop-menu-clients-list input[type=checkbox]').each(function(){
		var name_cell = $(this).attr('name');
		if($(this).is(":checked")){
			$('table .'+name_cell).show();
		}else{
			$('table .'+name_cell).hide();
		}
	});
}

//Inicia contador
function startTimer( duration, limit,  display ) {
	var element = display
    var timer = duration, minutes, seconds;
    setInterval(function () {
    	//Divide os segundos e monta o clock
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        //Exibe o clock
        display.text(minutes + ":" + seconds);

        if (++timer < 0) {
            timer = duration;
        }
        //Chama a função de progress bar
       	percentTimer( element, timer , limit );
        
    }, 1000);
}

//Atualiza Progress Bar
function percentTimer( element, actual, limit ){
	//Aponta o elemento manipulado
    var element = element.parent().find('.percent-circle');
    //Calcula a porcentagem de evolução
	var percent = Math.round(actual*100/limit);
	if(percent<=100){
		//Define o estilo baseado na %;
		if(percent<34){
			element.attr('data-percent','green');
		}else if(percent < 66){
			element.attr('data-percent','yellow');
		}else if(percent < 99){
			element.attr('data-percent','red');
		}else{
			element.attr('data-percent','finish');
		}
		//Seta a % na linha de progresso %;
		element.attr('stroke-dasharray',percent+',100');
	}
}

function validate_add_company(){
	var return_add_company = $('#formAddCompany').validate({
		rules: {
			txtCompanyName:{
				required:true,
				minlength:3
			}
		},
		messages: {
			txtCompanyName:{
				required:'Digite o usuário',
				minlength:'Digite o usuário'
			}
		}
	}).form();	
	return return_add_company;
}

function validate_add_client(){
	var return_add_client = $('#formAddClient').validate({
		rules: {
			txtFirstName:{
				required:true,
				minlength:3
			}
		},
		messages: {
			txtFirstName:{
				required:'Digite o usuário',
				minlength:'Digite o usuário'
			}
		}
	}).form();	
	return return_add_client;
}