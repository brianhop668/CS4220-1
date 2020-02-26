/*
Write a function called countingLetters. (15 pts)
The countingLetters function accepts a string and array arguments.

The return should be an object with the key as the lowercase letter and the count as the value.

The function should not include counts with anything from the punctions array.

There should not be duplicate letters in the object including counts for capital letters vs lowercase letters

(T and t) should just be t.
*/

console.log('=====================Question 4=====================');
const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
countingLetters(quote, punctuations);

/*
 EXPECTED OUTPUT (object):
  { t: 6,h: 1,e: 10,g: 5,r: 5,a: 3, s: 3,l: 7,o: 2,y: 2,i: 10,n: 8,v: 3,f: 2,b: 1,u: 1,m: 1,w: 1 }
*/

function countingLetters(obj1, obj2) {
    let output = {};
    for (let i = 0; i < obj1.length; i++) {
        if (!(obj2.includes(obj1[i]))) {
            let letter = obj1[i].toLowerCase();
            if (output['' + letter] != null) {
                output['' + letter]++;
            } else {
                output['' + letter] = 0;
                output['' + letter]++;
            }
        }
    }
    console.log(output);
}


/*
Write a Function called compareArrays. (15 pts)
The function takes two arrays as arguments.

The function compares the contents of each array to determine if they are equal and return a boolean.

DO NOT use JSON.stringify()
*/
console.log('=====================Question 5=====================');
const a1 = [1, 2, 3]
const a2 = [1, 2, 3]
var a = compareArray(a1, a2);
console.log(a);
// EXPECTED OUTPUT (boolean): true

const b1 = [1, 2, 3]
const b2 = ['1', '2', '3']
var b = compareArray(b1, b2);
console.log(b);
// EXPECTED OUTPUT (boolean): false

function compareArray(obj1, obj2) {
    if (obj1.length == obj2.length) {
        for (let i = 0; i < obj1.length; i++) {
            if (!(obj2.includes(obj1[i]))) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

/*
Write a Function called convertToObject. (20 pts)
The function takes a 2D array as an argument and returns an object.

Each nested array contains the key, value pair that should be added to the object.

The first item in the nested array always the key and the second is the value.
*/
console.log('=====================Question 6=====================');
const game_array = [
    ['developer', 'Respawn'],
    ['producer', 'EA'],
    ['game', 'Star Wars Jedi: Fallen Order'],
    ['year', 2019]
]
var gameObject = convertToObject(game_array);
console.log(gameObject);

/*
EXPECTED OUTPUT (object):
{ developer: 'Respawn', 'producer': 'EA', game: 'Star Wars Jedi: Fallen Order', year: 2019 }
*/

function convertToObject(array) {
    let output = {};
    for (let i = 0; i < array.length; i++) {
        let key = array[i][0];
        let value = array[i][1];
        output['' + key] = value;
    }
    return output;
}

/*
 Write a function called buildObject. (20 pts)
The function takes a 2D array of objects and returns a nested object with a start key of 1.

Each item in the nested array contains an object with the key 'property' and the value 'assign'

These property and assigns are used to build key/value pairs in the return object.
 */
console.log('=====================Question 7=====================');
const products = [
    [{
        property: 'product',
        assign: 'PS4'
    }, {
        property: 'company',
        assign: 'Sony'
    }, {
        property: 'release',
        assign: '2013'
    }],
    [{
        property: 'product',
        assign: 'Xbox One X'
    }, {
        property: 'company',
        assign: 'Microsoft'
    }, {
        property: 'release',
        assign: '2016'
    }],
    [{
        property: 'product',
        assign: 'Switch'
    }, {
        property: 'company',
        assign: 'Nintendo'
    }, {
        property: 'release',
        assign: '2017'
    }]
]

var matrix = buildObject(products);
console.log(matrix);

/*
EXPECTED OUTPUT (object):
{
  '1': { product: 'PS4', company: 'Sony', release: '2013' },
  '2': { product: 'Xbox One X', company: 'Microsoft', release: '2016' },
  '3': { product: 'Switch', company: 'Nintendo', release: '2017' }
}
 */

function buildObject(matrix) {
    let output = {};
    for (let x = 0; x < matrix.length; x++) {
        // console.log(matrix[x]); //Prints the ARRAY of Objects
        var items = [];
        for (let y = 0; y < matrix[x].length; y++) {
            // console.log(matrix[x][y]);//Prints OUT THE OBJECTS OF THAT ARRAY
            for (let item in matrix[x][y]) {
                // console.log(x + " " + y);
                // console.log((matrix[x][y])[item]);//Prints out value of the Objects

                //Gets all items and puts them into array
                var francis = ((matrix[x][y])[item]);
                items.push(francis);
            }
        }
        // console.log(items);
        //!!!Create function to make first item the prop and the second item as the value
        let tempObject = {};
        for (let z = 0; z < items.length; z++) {
            if ((z + 1) % 2 == 0) {
                tempObject[items[z - 1]] = items[z];
            }
        }
        let n = x + 1;
        output[n] = tempObject
        // console.log(tempObject);
    }
    // console.log(output);
    return output;
}