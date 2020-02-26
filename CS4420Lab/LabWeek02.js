//Lab 1.1
const phrase = 'helxlo x worxxld';
const letter = 'x';
console.log(removeLetters(phrase, letter));

function removeLetters(phrase, letter) {
    let output = '';
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] != letter) {
            output = output + phrase[i];
        }
    }
    return output;
}

//Lab 1.2
const nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];
console.log(flattenArray(nested));

function flattenArray(nested) {
    let output = [];
    for (let x = 0; x < nested.length; x++) {
        for (let y = 0; y < nested[x].length; y++) {
            // console.log(nested[x][y]);
            output.push(nested[x][y]);
        }
    }
    return output;
}

//Lab 1.3
const dc = {
    name: ['Bruce', 'Wayne'],
    hero: 'Batman'
};
const marvel = {
    name: ['Peter', 'Benjamin', 'Parker'],
    hero: 'SpiderMan'
};
console.log(adjustName(dc));

function adjustName(object) {
    object.firstName = object.name.shift();//O(n)
    object.lastName = object.name.pop();//O(1)
    delete object.name;

    return object;
};

// EXPECTED OUTPUT (object):
// { hero: 'Batman', firstName: 'Bruce', lastName: 'Wayne' }

console.log(adjustName(marvel));
// EXPECTED OUTPUT (object):
// { hero: 'SpiderMan', firstName: 'Peter', lastName: 'Parker' }