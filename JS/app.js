$(function() {
	window.stage = "starter";
	

	var model = new DinnerModel();

	window.viewOne = new ViewOne($("#pageOne"), model);
	window.viewTwo = new ViewTwo($("#pageTwo"), model);
	window.viewTwo.hide();
	window.viewThree = new ViewThree($("#pageThree"), model);
	window.viewThree.hide();
	/*window.pageFour = new ViewFour($("#pageFour"), model);
	window.pageFive = new ViewFive($("#pageFive"), model);*/
	window.viewSix = new ViewSix($("#pageSix"), model);
	
	window.p1controller = new PageOneController(viewOne, model);
	window.p2controller = new PageTwoController(viewTwo, model);
	window.p3controller = new PageThreeController(viewThree, model);
	/*window.p4controller = new PageFourController(viewFour, model);
	window.p5controller = new PageFiveController(viewFive, model);*/
	window.p6controller = new PageSixController(viewSix, model);
	
	/*window.pageFour.hide();
	window.pageFive.hide();*/
	window.viewSix.hide();
})
