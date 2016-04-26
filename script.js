function addComment(star,comment)
{
	var html = '<div class="col-md-4 col-sm-6 text-left">';

	if(!$.isNumeric(star))
		return false;

	for(var i = 1;i <= star;i++)
		html = html+'<i class="glyphicon glyphicon-star"></i>';

	if(star < 4)
	{
		for(var i = 1;i <= (4 - star);i++)
			html = html+'<i class="glyphicon glyphicon-star-empty"></i>';
	}

	if(comment.length == 0 || comment == null || comment == " ")
		comment = '...';

	$('#comments').prepend(html+'<p>'+comment+'</p></div>');
}

$(document).ready(function(){

	var botao = $('button');
	var botaoTitle = $('#botaoTitle');

	$('button').not('[disabled]').click(function(e){
		
		e.preventDefault();

		botao.prop('disabled', true);
		botaoTitle.html('Enviando...');

		var avaliacao = $('[name="avaliacao"]:checked');
		var sugestao  = $('[name="sugestao"]');

		if (avaliacao.length == 0) 
		    alert('Por favor, selecione uma das opções de avaliação');

		//simulando um ajax
		setTimeout(function(){ 
			botaoTitle.html('Enviar');
			addComment(avaliacao.val(),sugestao.val());
			$('input[name=avaliacao][value="4"]').prop('checked', 'checked');
			sugestao.val(null);
			botao.prop('disabled', false);
		}, 1000);

		return false;

	})
})
