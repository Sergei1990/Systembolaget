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
		console.log(name);
		
		let age =  $('#age').val();
		console.log(age);
		if (name == "" || age == "")
			{
				return
			}
		else{
			
			localStorage.setItem("userName", name);
			localStorage.setItem("userAge", age);
			app.addUser(name, age/1);
		}

	}

}
