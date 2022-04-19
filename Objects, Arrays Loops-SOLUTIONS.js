/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let array = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let person = {
  name: "NameTest",
  surname: "SurnameTest",
  email: "test@strive.school",
  age: 25,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

person.drivingLicense = true;
// person["drivingLicense"] = true

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete person.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let secondPerson = {
  name: "Second",
  surname: "Surname",
  email: "second@strive.school",
};

console.log(
  "The email is equal to the previous one: ",
  person.email !== secondPerson.email
);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 100;
if (totalShoppingCart <= 50) {
  totalShoppingCart += 10; // totalShoppingCart = totalShoppingCart + 10
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoppingCart2 = 100;
if (totalShoppingCart2 <= 50) {
  totalShoppingCart2 += 10; // totalShoppingCart = totalShoppingCart + 10
}

let discount = totalShoppingCart2 * 0.2;
totalShoppingCart2 = totalShoppingCart2 - discount;

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car = { brand: "Toyota", model: "Yaris", licensePlate: "AZXSASS" };

let car1 = {}
Object.assign(car1, car)
car1.licensePlate = "KQHYFKJ"

let car2 = {}
Object.assign(car2, car)
car2.licensePlate = "HGKSJDH"

let car3 = {}
Object.assign(car3, car)
car3.licensePlate = "KAUSHDN"

let car4 = {}
Object.assign(car4, car)
car4.licensePlate = "LQUSHGR"

let car5 = {}
Object.assign(car5, car)
car5.licensePlate = "BSHDJWU"

console.log("\n CARS \n", car, car1, car2, car3, car4, car5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car, typeof car.licensePlate, typeof car.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

let carsForSale = [car1, car5, car2];
let totalCars = {
  carsForSale: carsForSale.length,
  carsForRent: carsForRent.length,
};

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i].brand);
  console.log(carsForSale[i].model);
  console.log(carsForSale[i].licensePlate);
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/