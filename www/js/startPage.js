
module.exports = class StartPage {

	constructor() {
		// Don't run in node js
		if(typeof window !== "object"){ return; }

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
