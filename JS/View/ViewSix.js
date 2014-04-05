var ViewSix = function(container, model) {

	this.backButton = container.find("#back6to2Button");


	this.nameOfStarter = $("<span>");
	this.nameOfStarter.attr("id", "nameOfStarter");
	this.starterImage = container.find("#starterImage");
	container.find("#starterName").append(this.nameOfStarter);

	this.starterDescription = $("<div>");
	this.starterDescription.attr("id", "starterDescription");
	container.find("#starterDescription").append(this.starterDescription);
	

	this.nameOfMain = $("<span>");
	this.nameOfMain.attr("id", "nameOfMain");
	this.starterImage = container.find("#mainImage");
	container.find("#mainName").append(this.nameOfMain);

	this.mainDescription = $("<div>");
	this.mainDescription.attr("id", "mainDescription");
	container.find("#mainDescription").append(this.mainDescription);

	this.nameOfDessert = $("<span>");
	this.nameOfDessert.attr("id", "nameOfDessert");
	this.dessertImage = container.find("#dessertImage");
	container.find("#dessertName").append(this.nameOfDessert);

	this.dessertDescription = $("<div>");
	this.dessertDescription.attr("id", "dessertDescription");
	container.find("#dessertDescription").append(this.dessertDescription);

	

	this.nameOfStarter.html(model.getTitle(model.getSelectedDish('starter')));
	this.starterDescription.html(model.getDescription(model.getSelectedDish('starter')));


	this.nameOfMain.html(model.getTitle(model.getSelectedDish('main dish')));
	this.mainDescription.html(model.getDescription(model.getSelectedDish('main dish')));

	this.nameOfDessert.html(model.getTitle(model.getSelectedDish('dessert')))
	this.dessertDescription.html(model.getDescription(model.getSelectedDish('dessert')));


	model.addObserver(this);
	this.update = function(arg) {
	this.nameOfStarter.html(model.getTitle(model.getSelectedDish('starter')));
	this.starterDescription.html(model.getDescription(model.getSelectedDish('starter')));
	this.nameOfMain.html(model.getTitle(model.getSelectedDish('main dish')));
	this.mainDescription.html(model.getDescription(model.getSelectedDish('main dish')));
	this.nameOfDessert.html(model.getTitle(model.getSelectedDish('dessert')))
	this.dessertDescription.html(model.getDescription(model.getSelectedDish('dessert')));
	}

	this.hide = function() {
		container.hide();
	}

	this.show = function() {
		container.show();
	}
}