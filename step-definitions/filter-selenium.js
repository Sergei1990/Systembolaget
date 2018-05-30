module.exports = function() {

    //this.setDefaultTimeout(22000); 

    let {$, sleep} = require('./funcs');

    let chosenParameter; //#prLabCheck2,    #labCatCustomCheck20
    let parameter;   //Kategorier
    let parameter1;  //Gin
    let parameter2;  //Brandy och Vinsprit

    // Koden till de första tre stegen finns i sort-selenium.js:
    // Given that the user is "Anna" who is 22 years old
    // And the user is on the "http://localhost:3000/AllaDrycker.html"
    // When user click on "#filterButton"

	this.Then(/^the list with filtrering options appears$/, async function () {

        let mainFilterField = await $("#filterOptions");
        assert(mainFilterField, "The #filterOptions-div doesn't exist");

        for (let i = 1; i<=4; i++){

           let typeOfMainOption = await $("#customCheck" + i);
           let mainType = await typeOfMainOption.getAttribute("type");
           assert(mainType == "checkbox", "The type of filtering's option #customCheck" + i + " is not a checkbox");
           // console.log(mainType);
        }

        let mainOption1 = await $("#optionCheck1");
        let mainOptionText1 = await mainOption1.getText();
        assert( mainOptionText1 == "I lager", "The filtering's option nr 1 shoul be called I Lager instead of " +  mainOptionText1);
        // console.log(mainOptionText1);

        let mainOption2 = await $("#optionCheck2");
        let mainOptionText2 = await mainOption2.getText();
        assert( mainOptionText2 == "Priser", "The filtering's option nr 1 shoul be called Priser instead of " +  mainOptionText2);

        let mainOption3 = await $("#optionCheck3");
        let mainOptionText3 = await mainOption3.getText();
        assert(mainOptionText3 == "Kategorier", "The filtering's option nr 1 shoul be called Kategorier instead of " +  mainOptionText3);

        let mainOption4 = await $("#optionCheck4");
        let mainOptionText4 = await mainOption4.getText();
        assert( mainOptionText4 == "Ursprungsländer", "The filtering's option nr 1 shoul be called Ursprungsländer instead of " +  mainOptionText4);
               
    });

    this.Then(/^parameter I lager "([^"]*)" is checked by default$/, async function (arg1) {
        let checkedOption = await $(arg1);
        let isChecked = await checkedOption.isSelected();
        assert(isChecked, "Filtering's parameter I Lager is not checked by default");
    });

    this.When(/^user choose to filter the products by "([^"]*)" "([^"]*)" with check\-box "([^"]*)"$/, async function (arg1, arg2, arg3) {
        if (arg1 == "option"){
            parameter = arg2;
            chosenParameter = arg3;
        }
        if (arg1 == "option1"){
            parameter1 = arg2;
            chosenParameter = arg3;
        }
        if (arg1 == "option2"){
            parameter2 = arg2; 
            chosenParameter = arg3;
        }
        let optionToFilter = await $(chosenParameter); 
        assert(optionToFilter, "The checkbox " + chosenParameter + " doesn't exist");
        await optionToFilter.click();
        assert(optionToFilter.isSelected(), "Filtering's input " + chosenParameter + " is not clickable");

        await sleep (1000);
    });

    // Koden till detta steg finns i sort-selenium.js:
    // And click on the OK-button "#filterOK"

    this.Then(/^the list of the products is filtered according to the chosen parameter$/, async function () {
        // console.log("parameter", parameter);
        // console.log("parameter1", parameter1)
        // console.log("parameter2", parameter2)

        let prodDiv = await $("#productDescription"); 
        assert(prodDiv, "The container #productDescription doesn't exist");
        // let quantityOfProdOnPage = await prodDiv.childElementCount;
        let ind = 0;
        let filterIsWorking = false;
        
        do{

            if(parameter == "Priser"){ // if filtering by prices
                let priceDiv = await $("#prodPrice"+ind);
                if(!priceDiv){
                    break;
                }
                let textPriceDiv = await priceDiv.getText();
                let price = (textPriceDiv.replace("SEK",""))/1;
                // console.log(price);
                if ((price > 100 && price <=500) || (price > 1000)){
                    filterIsWorking = false;
                    break;
                }
                else{
                    filterIsWorking = true;
                }
            } 

            if(parameter == "Kategorier"){ // if filtering by categories

                let spritDiv = await $("#prodAlcohol"+ind);
                if(!spritDiv){
                    break;
                }
                let textFiltredAlc = await spritDiv.getText();
                let filtredAlc = (textFiltredAlc.replace("%",""))/1;
               
                ;
                if (filtredAlc < 35){
                    filterIsWorking = false;
                    break;
                }
                 else{
                    filterIsWorking = true;
                }
                // console.log("filterIsWorking"+ind, filterIsWorking);
            }   

            if(parameter == "Ursprungsländer"){ // if filtering by länder
                let countryDiv = await $("#prodCountry"+ind);
                if(!countryDiv){
                    break;
                }
                let country = await countryDiv.getText();
                
               // console.log(country);
                if (country  == parameter1 || country  == parameter2){
                    filterIsWorking = true;
                }
                else{
                    
                    filterIsWorking = false;
                    break;
                }              
            }

            ind++;
        }while (true)

        assert (filterIsWorking == true, "Filtering is not working correctly for the chosen parameter " +  chosenParameter);
        
    });


    //////-----------------------------------------SCENARIO 2 --------------------------------------------------------------------


    this.Then(/^just one category "([^"]*)" is available$/, async function (categoryUnderAge) {

        let availableOption = await $("#labCatCustomCheck0"); 
        assert(availableOption, "The checkbox #labCatCustomCheck0 doesn't exist");

        let potentielOption = await $("#labCatCustomCheck1"); 
        assert(!potentielOption, "The checkbox #labCatCustomCheck1 should not exist");

        nameOfAvaiilableOption = await availableOption.getText();
        assert(nameOfAvaiilableOption == categoryUnderAge, "The category which is available for the user under age is not 'Alkoholfritt'");
        await sleep (1000);       
    });

    this.Then(/^the filtered products on the page contain less than "([^"]*)" of alcohol$/, async function (arg1){
        let alc = arg1.replace("%", "")/1;
        //console.log(alc); 

        let ind = 0;
        let filterIsWorking = false;

        do{
            let spritDiv = await $("#prodAlcohol"+ind);
                if(!spritDiv){
                    break;
                }
                let textFiltredAlc = await spritDiv.getText();
                let filtredAlc = (textFiltredAlc.replace("%",""))/1;
               
                ;
                if (filtredAlc > alc){
                    filterIsWorking = false;
                    break;
                }
                 else{
                    filterIsWorking = true;
                }
               // console.log("filterIsWorking"+ind, filterIsWorking);
            ind++;
        }while(true)

        assert (filterIsWorking == true, "The product list of the under age oerson should not contain beverages over 0.5% of the alcohol " +  chosenParameter);
        
    });
    
}
