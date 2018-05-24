
class StartPage {

	constructor() {
		this.toggleLogOut();
	}

	toggleLogOut(){		

		if (!localStorage.getItem("userName")){
			$('#logUtDiv').hide();
		}
		else{
			$('#logUtDiv').show();
		}
	}
}
