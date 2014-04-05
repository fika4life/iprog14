var PageOneController = function(view, model ) { 

	view.createButton.click(function(){ 
		view.hide();
		window.viewTwo.show();
	 }); 
}
