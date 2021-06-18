class Cupcake {
    constructor(batter, icing, cost) {
        this.batter = batter;
        this.icing = icing;
        this.cost = cost;
    }
    getDescription(){
        return `A $${this.cost} ${this.batter} cupcake with ${this.icing} on top`;
    }
}

class CupcakeShop {
    constructor(location) {
        this.location = location;
        this.inventory = [];
        this.cash = 0;
        // making default values for the second two- will be the same for every new instance of this class
    }
    getStatus(){
        return `The current inventory is ${this.inventory.length} cupcakes and we have $${this.cash} on hand`;
    }
    
    addToInventory(cupcake) {
        this.inventory.push(cupcake);
    }

    bakeBatch(numOfCupcakes, batter, icing, pricePer){
        for(let i=0; i< numOfCupcakes; i++){
            let newCupcake = new Cupcake(batter, icing, pricePer);
            this.addToInventory(newCupcake);
        }
    }

    sellCupcake(){
        if(this.inventory.length > 0){
            let toSell = this.inventory.pop();
            this.cash = this.cash + toSell.cost;
        } else {
            return 'no cupcakes to sell'
        }
    }
}

let cakeBakeShop = new CupcakeShop('Fishers')
console.log(cakeBakeShop.getStatus());
cakeBakeShop.bakeBatch(34, 'Banana', 'None', 5);
console.log(cakeBakeShop.getStatus());
cakeBakeShop.sellCupcake();
console.log(cakeBakeShop.getStatus());

console.log(cakeBakeShop.getStatus());