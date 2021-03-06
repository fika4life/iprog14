var ViewThree = function (container, model) {

	this.backButton = container.find("#back3to2Button");
	this.confirmButton = container.find("#confirmButton");
	this.removeButton = container.find("#removeButton");
	this.people = container.find("#peopleInputTwo");
	this.confirmDinner = container.find("#confirmDinner");




	this.nameOfDish = $("<span>");
	this.nameOfDish.attr("id", "nameOfDish");
	this.pictureOfDish = container.find("#dishPicture");
	container.find("#dishHeader").append(this.nameOfDish);
	container.find("#bild");
	
	this.dishDescription = $("<div>");
	this.dishDescription.attr("id", "DescriptionOfDish");
	container.find("#dishPreparation").append(this.dishDescription);

	var nameStarter = $("<div>");
	this.nameOfStarter = $("<span>");
	this.nameOfStarter.attr("id", "nameOfStarter");
	nameStarter.append(this.nameOfStarter);

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
	
	var ingAmount = $("<div>");
	this.amountOfIngredients = $("<span>");
	this.amountOfIngredients.attr("id", "amount");
	ingAmount.append(this.amountOfIngredients);
	container.find("#amount").append(ingAmount);
	
	var ingName = $("<div>");
	this.nameOfIngredients = $("<span>");
	this.nameOfIngredients.attr("id", "amount");
	ingName.append(this.nameOfIngredients);
	container.find("#ing").append(ingName);
	
	var ingPrice = $("<div>");
	this.priceOfIngredients = $("<span>");
	this.priceOfIngredients.attr("id", "amount");
	ingPrice.append(this.priceOfIngredients);
	container.find("#price").append(ingPrice);
	
	var ing = $("<div>");
	this.ingSek = $("<span>");
	this.ingSek.attr("id", "sek");
	ing.append(this.ingSek);
	container.find("#sek").append(ing);
	
	
	
	var id = 0;

	this.nameOfDish.html(model.getTitle(id));
	model.addObserver(this);
	this.update = function(arg) {
		id = model.idOfDish;
		this.nameOfDish.html(model.getTitle(id));
		//this.nameOfDish.html(model.getTitle(model.menu['starter'].id))
		this.dishDescription.html(model.getDescription(id));
		//this.pictureOfDish.attr("src", model.getPicture(id));

		this.nameOfStarter.html(model.getNameOfDish('starter'));
		this.priceOfStarter.html(model.getPriceOfDish('starter'));
		
		this.nameOfMain.html(model.getNameOfDish('main dish'));
		this.priceOfMain.html(model.getPriceOfDish('main dish'));
	
		this.nameOfDessert.html(model.getNameOfDish('dessert'));
		this.priceOfDessert.html(model.getPriceOfDish('dessert'));

		this.totalMenuPrice.html(model.getTotalMenuPrice());
		this.populateIngredients();
		this.numberOfPeople();
	}
	
	this.numberOfPeople = function() {
		var i = model.getNumberOfGuests()
		document.getElementById('peopleInputTwo').value = i;
	}
	
	this.populateIngredients = function() {
		var dish = model.getDish(id);
		ingredients = dish.ingredients;
		var i = 0;
		var sAmount = "";
		var sName = "";
		var sPrice = "";
		var s = "";
		for(key in ingredients) {
			sName = sName + ingredients[key].name + "<br>";
			sAmount = sAmount + ingredients[key].quantity + "<br>";
			sPrice = sPrice + ingredients[key].price + "<br>";
			s = s + "SEK <br>"
			i++;
		}
		this.amountOfIngredients.html(sAmount);
		this.priceOfIngredients.html(sPrice);
		this.nameOfIngredients.html(sName);
		this.ingSek.html(s);
	}

	this.hide = function() {
		container.hide();
	}

	this.show = function() {
		container.show();
	}
}
