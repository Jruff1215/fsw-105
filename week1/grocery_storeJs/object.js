var shopper = {
    storeName: "Giant Eagle",
    storeAddress: "123 Grocery Lane",
    groceryCart: ['milk', 'eggs', 'chicken', ' and spinach'],
    groceryStore: function() {
        console.log (`I'm going to ${this.storeName} at this address ${this.storeAddress} and I have these items in my cart ${this.groceryCart}`);
    }
}

shopper.groceryStore()