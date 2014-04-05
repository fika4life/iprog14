var ViewTwo = function (container, model) {

	this.iceCreamButton = container.find("#iceCream");
	this.people = container.find("#peopleInput");
	
	var nameDiv = $("<div>");
	nameDiv.html("test");

	container.find("#nameOfDish").append(nameDiv);
	this.priceOfDish = $("<span>");
	this.priceOfDish.attr("id", "priceOfDish");
	
	var priceDiv =$("<div>");
	priceDiv.append(this.priceOfDish);
	container.find("#priceDish");
	

	this.priceOfDish.html(model.getNumberOfGuests());
	
	this.update = function(arg) {	
	}

	this.hide = function() {
		container.hide();
	}

	this.show = function() {
		container.show();
	}
}
