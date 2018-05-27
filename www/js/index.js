module.exports = class Index {

	constructor() {

		// Don't run in node js
		if(typeof window !== "object"){ return; }

		$('#welcomeBtn').click(()=>{
			this.logIn();
		});			 	

	} //constructor

	logIn(){
		let name =  $('#name').val();
		
		let age =  $('#age').val();
		if (name == "" || age == "")
			{
				location.href = 'http://localhost:3000/index.html';
			}
		else{
			
			localStorage.setItem("userName", name);
			localStorage.setItem("userAge", age);
			app.addUser(name, age/1);
		}

	}

}
