console.log("================ Question No.1 ================");
/*
*Use the .map() method on the heros array to return a new array. (5 pts)
*The new array should rename the 'name' key to 'hero'
*The 'name' key should not appear in the new array
*The new array should have a new key added called (id)
*The key 'id' should be based off the index
 */
const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
];

const newHeros = heros.map(hero => {
    hero.id = heros.indexOf(hero) + 1;
    const name = hero.name;
    hero.hero = name;
    delete hero.name;
    return hero;
});

console.log(newHeros);
/*
  EXPECTED OUTPUT (array of objects):
  [
      { id: 0, hero: 'Spider-Man' },
      { id: 1, hero: 'Thor' },
      { id: 2, hero: 'Black Panther' },
      { id: 3, hero: 'Captain Marvel' },
      { id: 4, hero: 'Silver Surfer' }
  ]
 */
console.log();
console.log("================ Question No.2 ================");
/*
*Use the .filter() method on the consoles array to return a new array. (5 pts)
*Only the consoles from the specified manufacturer given should be in the new array.
*Assume all consoles will have the console manufacturer name in the item key.
*FOR FULL credit use the provided manufacturer variable as is (you cannot edit it).
 */
const manufacturer = 'nintendo';
const consoles = [
    { item: 'Sony PS4 Pro', price: 399.99 },
    { item: 'Microsoft Xbox One X', price: 499.99 },
    { item: 'Nintendo Switch', price: 299.99 },
    { item: 'Sony PS2 Console', price: 299.99 },
    { item: 'Nintendo 64', price: 199.999 }
];

const newConsoles = consoles.filter(game => {
    // console.log(game.item);
    const manufacturerName = game.item.toLowerCase();
    // console.log(manufacturerName.includes(manufacturer));
    if (manufacturerName.includes(manufacturer)) {
        return game;
    }
});

console.log(newConsoles);

/* 
*EXPECTED OUTPUT (array of objects):
*[
*    { item: 'Nintendo Switch', price: 299.99 },
*    { item: 'Nintendo 64', price: 199.999 }
*]
*/
console.log();
console.log("================ Question No.3 ================");
/*
*Use the .reduce() method on the marvel array to return the count of villains (5)
*A character is considered a villain when the object has a key hero
*with a value of false.
*The output should use a template literal to print: 
*'Total Villains Count: n' where n is the count of the villains.
*/
const marvel = [
    { name: 'Spider-Man', hero: true },
    { name: 'Thor', hero: true },
    { name: 'Thanos', hero: false },
    { name: 'Black Panther', hero: true },
    { name: 'Loki', hero: false },
    { name: 'Captain Marvel', hero: true },
    { name: 'Silver Surfer', hero: true },
    { name: 'Magneto', hero: false },
    { name: 'Venom', hero: false }
];

const marvelVillain = marvel.reduce((accumulator, item) => {
    // console.log(accumulator);
    if (item.hero == false) {
        return accumulator + 1;
    }
    else {
        return accumulator;
    }

}, 0);// ,0 means the intial value for accumulator will be zero

function printVillainCount() {
    const sentence = (`Total Villains Count: ${marvelVillain}`);
    console.log(sentence);
}

printVillainCount();


// EXPECTED OUTPUT (string): 'Total Villains Count: 4'

console.log();
console.log("================ Question No.4 ================");

/*
*Write a higher order function called iterateInventory (15 pts)
*This iterateInventory function returns an updated inventory array with status
*This iterateInventory function accepts two arguments an inventory array
*and an evaluateInventory function
*The iterateInventory function iterates over the inventory array
*using .forEach() and performs evaluateInventory
*The evaluateInventory function adds a status to each item based
*on stock count and returns the item
*Stock count of 3 or more the status is 'OK'
*Stock count of 1 to 2 the status is 'LOW'
*Stock count of 0 is OUT OF STOCK
 */

const inventory = [
    { item: 'Sony PS4 Pro', price: 399.99, stock: 3 },
    { item: 'Atari', price: 125.0, stock: 0 },
    { item: 'Microsoft Xbox One X', price: 499.99, stock: 1 },
    { item: 'Nintendo Switch', price: 299.99, stock: 4 },
    { item: 'Sony PS2 Console', price: 299.99, stock: 1 },
    { item: 'Nintendo 64', price: 199.999, stock: 2 },
    { item: 'Sega Genesis', price: 104.0, stock: 0 }
];

console.log(iterateInventory(inventory, evaluateInventory));

function iterateInventory(inventoryArray, evaluateInventory) {
    inventoryArray.forEach(element => {

        return evaluateInventory(element);
    });
    return inventoryArray;
}

function evaluateInventory(inventory) {
    const stock = inventory.stock;
    const statusArray = ['OK', 'LOW', 'OUT OF STOCK'];
    let status = null;
    if (stock < 1) {
        status = statusArray[2];
    }
    else if (stock < 3) {
        status = statusArray[1];
    } else {
        status = statusArray[0];
    }
    inventory.stock = status;
    return inventory;
}
/*EXPECTED OUTPUT (array of objects):
[
    { item: 'Sony PS4 Pro', price: 399.99, stock: 3, status: 'OK' },
    { item: 'Atari', price: 125, stock: 0, status: 'OUT OF STOCK' },
    { item: 'Microsoft Xbox One X', price: 499.99, stock: 1, status: 'LOW' },
    { item: 'Nintendo Switch', price: 299.99, stock: 4, status: 'OK' },
    { item: 'Sony PS2 Console', price: 299.99, stock: 1, status: 'LOW' },
    { item: 'Nintendo 64', price: 199.999, stock: 2, status: 'LOW' },
    { item: 'Sega Genesis', price: 104, stock: 0, status: 'OUT OF STOCK' }
]
*/

console.log();
console.log("================ Question No.5 ================");
/*
*Write a function called calculateSalesTotals (20)
    *This function should return an array with
        *new two new keys (sale and total)
    *The key 'sale' equals the calculated sale price based on
        *orginal price and the discount.
    *The key 'total' equals the calculated total based
        *on stock, the original price and the discount
    *For FULL credit the solution should use Object Destructuring
        *on the objects in the sales array
    *For FULL credit the solution should use Object Default Values
    *for the discount key. The default value would be 0.0.
*/
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

console.log(calculateSalesTotals(sales));

function calculateSalesTotals(sales) {
    sales.forEach(element => {
        const { item, stock, original, discount, total, sale} = element;
         let discounted = 0.0;
        if (discount != null) {
            discounted = discount;
        }

        element.discount = discounted;
        element.sale = original - (original * discounted);
        element.total = element.sale * stock;
    });
    return sales;
}

/*
EXPECTED OUTPUT (array of objects):
[
    {
        item: 'PS4 Pro',
        stock: 3,
        original: 399.99,
        total: 1199.97,
        sale: 399.99
    },
    {
        item: 'Xbox One X',
        stock: 1,
        original: 499.99,
        discount: 0.1,
        total: 449.99100000000004,
        sale: 449.99100000000004
    },
    {
        item: 'Nintendo Switch',
        stock: 4,
        original: 299.99,
        total: 1199.96,
        sale: 299.99
    },
    {
        item: 'PS2 Console',
        stock: 1,
        original: 299.99,
        discount: 0.8,
        total: 59.99799999999999,
        sale: 59.99799999999999
    },
    {
        item: 'Nintendo 64',
        stock: 2,
        original: 199.99,
        discount: 0.65,
        total: 139.993,
        sale: 69.9965
    }
]
*/