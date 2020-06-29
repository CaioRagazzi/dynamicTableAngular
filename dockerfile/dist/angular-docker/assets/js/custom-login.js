
function loading_form(action){
	
	if(action=='add'){
		if(!$('.box-login').hasClass('loading')){
			$('.box-login').addClass('loading');
		}
	}else{
			$('.box-login').removeClass('loading');
	}
}

// function validate_login(){
// 	var return_login = $('#formLogin').validate({
// 		rules: {
// 			txtUserName:{
// 				required:true
// 			},
// 			txtPassword:{
// 				required:true
// 			}
// 		},
// 		messages: {
// 			txtUserName:{
// 				required:'Digite o usuário',
// 				minlength:'Digite o usuário'
// 			},
// 			txtPassword:{
// 				required:'Digite sua senha',
// 				minlength:'Digite sua senha'
// 			}
// 		}
// 	}).form();	
// 	return return_login;
// }

// function validate_recovery(){
// 	var return_recovery = $('#formForgotPassword').validate({
// 		rules: {
// 			txtUserName:{
// 				required:true,
// 				minlength:3
// 			}
// 		},
// 		messages: {
// 			txtUserName:{
// 				required:'Digite o usuário',
// 				minlength:'Digite o usuário'
// 			}
// 		}
// 	}).form();	
// 	return return_recovery;
// }
