var PageTwoController = function(view, model ) { 


	view.toastButton.click(function(){
		model.setId(1);
		view.hide();
		window.viewThree.show();
	});

	view.confirm.click(function() {
		view.hide();
		window.viewSix.show();
	});

	view.sourdoughButton.click(function(){
		model.setId(2);
		view.hide();
		window.viewThree.show();
	});

	view.bakedbrieButton.click(function(){
		model.setId(3);
		view.hide();
		window.viewThree.show();
	});


	view.meatballsButton.click(function(){
		model.setId(100);
		view.hide();
		window.viewThree.show();
	});

	view.bakedbrieMain.click(function(){
		model.setId(101);
		view.hide();
		window.viewThree.show();
	});

	view.meatballsTwoButton.click(function(){
		model.setId(102);
		view.hide();
		window.viewThree.show();
	});

	view.meatballsThreeButton.click(function(){
		model.setId(103);
		view.hide();
		window.viewThree.show();
	});

	view.chocolateIceCreamButton.click(function(){
		model.setId(200);
		view.hide();
		window.viewThree.show();
	});

	view.vanillaIceCreamButton.click(function() {
		model.setId(201);
		view.hide();
		window.viewThree.show();
	});

	view.strawBerryIceCreamButton.click(function() {
		model.setId(202);
		view.hide();
		window.viewThree.show();
	});

	view.people.click(function() {
		var num = document.getElementById('peopleInput').value;
		model.setNumberOfGuests(num);
	});

	view.dish.click(function() {
		var i = document.getElementById('dropdownMenu').value;
		var dishes = null;
		if(i == "all") {
			dishes = model.getAllDishes;
		} else {
			dishes = model.getAllDishes(i);
		}
		alert(dishes);
		model.setDishesToShow(dishes);
	});

	view.searchBox.click(function() {
		var i = document.getElementById('searchbox').value;
	});
}
	 

