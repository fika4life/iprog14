var ViewTwo = function (container, model) {

	
	this.toastButton = container.find("#toast");
	this.sourdoughButton = container.find("#sourdough");
	this.bakedbrieButton = container.find("#bakedbrie");

	this.meatballsButton = container.find("#meatballs");
	this.bakedbrieMain = container.find("#bakedbrie2");
	this.meatballsTwoButton = container.find("#meatballs2");
	this.meatballsThreeButton = container.find("#meatballs3");
	
	this.chocolateIceCreamButton = container.find("#iceCream");
	this.vanillaIceCreamButton = container.find("#iceCream2");
	this.strawBerryIceCreamButton = container.find("#iceCream3");


	this.people = container.find("#peopleInput");
	this.dish = container.find("#dropdownMenu");
	this.searchBox = container.find("#searchBoxClick");
	var nameStarter = $("<div>");
	this.nameOfStarter = $("<span>");
	this.nameOfStarter.attr("id", "nameOfStarter");
	nameStarter.append(this.nameOfStarter);
	this.confirm = container.find("#confirmDinner");

	this.starterDiv = $("#starters");

	container.find("#nameOfStarter").append(nameStarter);
	this.priceOfStarter = $("<span>");
	this.priceOfStarter.attr("id", "priceOfStarter");
	
	var priceStarter =$("<div>");
	priceStarter.append(this.priceOfStarter);
	container.find("#priceOfStarter").append(priceStarter);

	this.nameOfStarter.html(model.getNameOfDish('starter'));
	this.priceOfStarter.html(model.getPriceOfDish('starter'));

	var nameMain = $("<div>");
	this.nameOfMain = $("<span>");
	this.nameOfMain.attr("id", "nameOfMain");
	nameMain.append(this.nameOfMain);

	container.find("#nameOfMain").append(nameMain);
	this.priceOfMain = $("<span>");
	this.priceOfMain.attr("id", "priceOfMain");
	
	var priceMain =$("<div>");
	priceMain.append(this.priceOfMain);
	container.find("#priceOfMain").append(priceMain);

	this.nameOfMain.html(model.getNameOfDish('main dish'));
	this.priceOfMain.html(model.getPriceOfDish('main dish'));

	var nameDessert = $("<div>");
	this.nameOfDessert = $("<span>");
	this.nameOfDessert.attr("id", "nameOfDessert");
	nameDessert.append(this.nameOfDessert);

	container.find("#nameOfDessert").append(nameDessert);
	this.priceOfDessert = $("<span>");
	this.priceOfDessert.attr("id", "priceOfDessert");
	
	var priceDessert =$("<div>");
	priceDessert.append(this.priceOfDessert);
	container.find("#priceOfDessert").append(priceDessert);

	this.nameOfDessert.html(model.getNameOfDish('dessert'));
	this.priceOfDessert.html(model.getPriceOfDish('dessert'));

	var totalPrice = $("<div>");
	this.totalMenuPrice = $("<span>");
	this.totalMenuPrice.attr("id", "priceOfMenu");
	totalPrice.append(this.totalMenuPrice);
	container.find("#priceOfMenu").append(totalPrice);

	this.totalMenuPrice.html(model.getTotalMenuPrice());

	model.addObserver(this);	

	
	this.showDish = function(id) {
		alert(id);
	}
	this.update = function(arg) {
		this.nameOfStarter.html(model.getNameOfDish('starter'));
		this.priceOfStarter.html(model.getPriceOfDish('starter'));
		
		this.nameOfMain.html(model.getNameOfDish('main dish'));
		this.priceOfMain.html(model.getPriceOfDish('main dish'));
	
		this.nameOfDessert.html(model.getNameOfDish('dessert'));
		this.priceOfDessert.html(model.getPriceOfDish('dessert'));

		this.totalMenuPrice.html(model.getTotalMenuPrice());
	}
		
	
	this.test = function() {
	}

	this.hide = function() {
		container.hide();
	}

	this.show = function() {
		$(".bg").removeClass("bg");
		container.show();
	}
}
