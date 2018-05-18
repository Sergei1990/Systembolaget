
class AllaDrycker {

	constructor() {

	$('#sortOptions').hide();
	$('#filterOptions').hide();

	$('#sortButton').click(function() {
		$('#sortOptions').show(200);	
	});

	$('#filterButton').click(function() {
		$('#filterOptions').show(200);	
	});

	$('#sorteringOK').click(function() {
		$('#sortOptions').hide(200);	
	});

	$('#filtreringOK').click(function() {
		$('#filterOptions').hide(200);	
	});


   //  $('#optionsRadios1').on('change', function(){ // human vs human
	  //   $('#player1').show(200);
	  // 	$('#player2').show(200);
	  //   $('#startsFirst').hide(200);
  	// })
  	$('#productlist').empty();

  	for(let p of app.allProducts){
  		$('#productlist').append('<div>'+p.namn+ '</div>')
  	}
	}
}


