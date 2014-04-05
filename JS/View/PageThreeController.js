var PageThreeController = function(view, model ) { 
	 
	 view.backButton.click(function(){ 
		view.hide(); 
		window.viewTwo.show();
	 });

	 view.confirmDinner.click(function(){ 
		view.hide(); 
		window.viewSix.show();
	 });

	view.removeButton.click(function() {
		model.removeDishFromMenu(model.idOfDish);
	});

	view.confirmButton.click(function(){
		model.addDishToMenu(model.idOfDish);
	});

	view.people.click(function() {
		var num = document.getElementById('peopleInputTwo').value;
		model.setNumberOfGuests(num);
	});
	
}
