/*
 Write a function called buildObject. (20 pts)
The function takes a 2D array of objects and returns a nested object with a start key of 1.

Each item in the nested array contains an object with the key 'property' and the value 'assign'

These property and assigns are used to build key/value pairs in the return object.
 */

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
        for(let z = 0; z < items.length; z++) {
            if((z+1)%2 == 0) {
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