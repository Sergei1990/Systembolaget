module.exports = function() {

    //this.setDefaultTimeout(22000); 
    let {$, sleep} = require('./funcs');

    let totalQuantity = 0;
    let totalAmount = 0;
    let name1, name2;
    let quantity1 = 0;
    let quantity2 = 0
    let price1, price2;



    this.When(/^the user clicks on the LäggTill\-button to add (\d+) bottles of the beverage (\d+) in the product's list$/, async function (arg1, arg2) {
        arg2--; // element 0 is first
        let buttonName = "#addButton"+arg2;
        let button = await $(buttonName);
        assert(button, "#addButton" +arg2+ " does not exist");

        for (let i = 0; i< arg1; i++){
            await button.click();
            await sleep(2000);
        
            if (arg2/1 == 0)
                quantity1++;
            if (arg2/1 == 4)
                quantity2++;

            totalQuantity++;
        }
               
        let priceDivName = "#prodPrice"+arg2;
        let priceDiv = await $(priceDivName);
        let priceDivValue = await priceDiv.getText();
       
        let price = priceDivValue.replace("SEK", "");

        let nameDivName = "#prodName"+arg2;
        let nameDiv = await $(nameDivName);
        let name = await nameDiv.getText();
       
        if (arg2/1 == 0){
            name1 = name;
            price1 = price/1
        }
        if (arg2/1 == 4){
            name2 = name;
            price2 = price/1;
        }

        
    });

    this.Then(/^the current quantity of the added products displays on the shopping cart's icon$/, async function () {

        totalAmount = price1*quantity1 + price2*quantity2;       
        let shoppingCartIcon = await $("#basketQuantity");
        assert (shoppingCartIcon, "#basketQuantity does not exist");
        let valueShoppingCartIcon = await shoppingCartIcon.getText();
        
        assert(valueShoppingCartIcon/1 == totalQuantity, "The quantity of the added products is not correct on the shopping cart's icon")
        
    });

     this.When(/^the user clicks on the shopping cart's icon$/, async function () {
        // console.log("name1", name1);
        // console.log("quantity1", quantity1);
        // console.log("name2", name2);
        // console.log("quantity2", quantity2);
        // console.log("totalAmount", totalAmount);

        let shoppingCartIcon = await $("#varukorg");
        assert(shoppingCartIcon, "Icon #varukorg does not exist");
        await shoppingCartIcon.click();
        await sleep(2000);
    });


     this.When(/^the page "([^"]*)" is opened$/, async function (expectedURL) {
        let url = await driver.getCurrentUrl();
        assert (url == expectedURL, "The user is not in the shopping cart after clicking on he shopping cart icon")
        
    });

     this.Then(/^there are (\d+) bottles of the beverage nr (\d+) in the cart's list$/, async function (arg1, arg2) {
        arg2--; // element 0 is first
        let q, q1, q2;
        let n, n1, n2;
        let p, p1, p2;

        let nDivName = "#prodNameV"+arg2;
        let nDiv = await $(nDivName);
        assert(nDiv, "#prodNameV" + arg2 + " does not exist in the shopping cart after product's adding");
        n = await nDiv.getText();

        let qDivName = "#prodQuantityV"+arg2;
        let qDiv = await $(qDivName);
        assert(qDiv, "#prodQuantityV" + arg2 + "does not exist in the shopping cart after product's adding");
        let qValue = await qDiv.getText();
        q = qValue/1;

        let pDivName = "#prodPriceV"+arg2;
        let pDiv = await $(pDivName);
        assert(pDiv, "#prodPriceV" + arg2 + "does not exist in the shopping cart after product's adding");
        let pValue = await pDiv.getText();
        p = (pValue.replace("SEK", ""))/1;
        // console.log("p", p);
       
        if (arg2/1 == 0){
            n1 = n;
            q1 = q;
            p1=p;
            assert(n1 == name1, "The name of the added product nr" + arg2 + " has been changed after its adding to the shopping cart");
            assert(p1 == price1, "The price of the added product nr" + arg2 + " has been changed after its adding to the shopping cart");
            assert(q1 == arg1/1, "The total quantity of the added product nr" + arg2 + " is not correct in the shopping cart");
        }
        if (arg2/1 == 1){
            n2 = n;
            q2 = q;
            p2=p;
            assert(n2 == name2, "The name of the added product nr" + arg2 + " has been changed after its adding to the shopping cart");
            assert(p2 == price2, "The price of the added product nr" + arg2 + " has been changed after its adding to the shopping cart");
            assert(q2 == arg1/1, "The total quantity of the added product nr" + arg2 + " is not correct in the shopping cart");
        }

    });

    this.Then(/^the total amount  in the shopping cart is changed accordingly$/, async function () {
        
        let totAmDiv = await $("#totalAmountV");
        let totAmValue = await totAmDiv.getText();
        let totalAmountCart = (totAmValue.replace("SEK", ""))/1;
        assert(totalAmountCart == totalAmount, "The total amount of the added products is not correct in the shopping cart");

        totalQuantity = 0; // förbereddelser inför nästa scenario
        totalAmount = 0;
        quantity1 = 0;
        quantity2 = 0
            
    });    
    
    //------------------------------------SCENARIO 2------------------------------------------------------------------------


    

    this.When(/^the user clicks on the Plus\-button to add (\d+) bottles of the beverage (\d+) in the shopping cart's list$/, async function (arg1, arg2) {
        arg2--; // element 0 is first
        let buttonName = "#addButtonV"+arg2;
        let button = await $(buttonName);
        assert(button, "#addButtonV" +arg2+ " does not exist");

        for (let i = 0; i< arg1; i++){
            await button.click();
            await sleep(2000);
        
            if (arg2/1 == 0){
                quantity1++;
                totalAmount = totalAmount + price1;
            }
            if (arg2/1 == 4){
                quantity2++;
                totalAmount = totalAmount + price2;
            }

            totalQuantity++;
        }
  
    });
}
