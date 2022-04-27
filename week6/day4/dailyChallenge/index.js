let client = "John";

let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// 1:
const displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit));
// displayGroceries()

// 2:
const cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    console.log(user); //  No because we change the var client after we defined user as client

    let shopping = groceries;
    // console.log(shopping) // The same object as groceries

    console.log(groceries)
    groceries.totalPrice = 35
    console.log(shopping) // Yes we can see the change of total price in shopping obj too because shopping it is a copy of groceries

    groceries.other.payed = false;
    console.log(shopping); // Yes it will still be changed but if we want to copy the original obj we can use json

    // If we want cloning the original obj we need to use json
    console.log(JSON.parse(JSON.stringify(groceries))); // Here we copy the original copy of groceries also after the changes that we have made
};
cloneGroceries();