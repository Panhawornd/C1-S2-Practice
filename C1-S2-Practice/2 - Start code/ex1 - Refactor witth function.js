// THE CONTEXT
// In the provided code, there's an array named shoppingCart representing a user's shopping cart with items containing 'name', 'price', and 'quantity' properties.
// The current code calculates the total price of items in the shopping cart without using functions.

// THE PROBLEM
// - This code works only for this specific shopping cart. But we want to be able to compute the total price for any shopping cart

// YOUR JOB
// Your task is to refactor the code by extracting the logic for calculating the total price into a reusable function.
// Write a function named calculateTotalPrice that takes the shoppingCart array as a parameter and returns the total price.

// TO CHECK
// Check that your code still produce the same result
// Check that your code can work with myny shopping carts

// Function to calculate the total price of a shopping cart
function calculateTotalPrice(cart) {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  console.log("Total price:", totalPrice);
}

let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];
// Additional carts for testing
// let clothingCart = [
//   { name: "Shirt", price: 15, quantity: 3 },
//   { name: "Pants", price: 20, quantity: 5 },
//   { name: "T-shirt", price: 18, quantity: 8},
// ];
// let groceryCart = [
//   { name: "Carrot", price: 0.5, quantity: 10 },
//   { name: "Spinach", price: 2, quantity: 6 },
//   { name: "Garlic", price: 0.25, quantity: 12 },
// ];

// Calling the function
calculateTotalPrice(shoppingCart);
// calculateTotalPrice(clothingCart);
// calculateTotalPrice(groceryCart);
// Calculate total price without using functions
/*let totalPrice = 0;
for (let item of shoppingCart) {
  totalPrice += item.price * item.quantity;
}
console.log("Total price:", totalPrice);*/
