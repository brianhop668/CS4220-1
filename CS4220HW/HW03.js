/*
 * Huy Francis Nguyen
 * CS 4220
 * Homework 03
 */

/** Question 1
 Using callbacks syntax write a set of functions that checks and makes a list of websites running. (20)
Requirements:

checkResponseTime(website, callaback)
This function accepts a website object.

It uses a setTimeout() to mock checking a website's responseTime associated to it.
If it does have a responseTime then it callsback after the responseTime for each website object.
If it does not have a responseTime then it callsbacks immediately (0ms) with an error.
websiteResponseTimes(websites)
This function accepts an array of objects.

It prints the results ONLY when the entire todo array has been iterated.
It should print each the working array and the error array separately.
 */
function checkResponseTime(website, callback) {
    // console.log(`${website.site}`);
    setTimeout(() => {
        //check website's response time
        if (website.responseTime === null) {
            callback('No Response Time', website)
        } else {
            callback(null, website);
        }
    }, website.responseTime);
};

function websiteResponseTimes(websites) {
    let errors = [];
    let responseful = [];
    let count = 0;
    websites.forEach(website => {
        checkResponseTime(website, (err, result) => {
            if (count < websites.length) {
                if (!err) {
                    responseful.push({ site: result.site, responseTime: result.responseTime });
                    // console.log(result);
                } else {
                    errors.push(result.site);
                    // console.log(err);
                }
            }
            count++;
            if (count === websites.length) {
                console.log('Responses: ');
                console.log(responseful);

                console.log('No Response: ');
                console.log(errors);
            }
            // console.log(count);
        })
    });
};//end of function

const websites = [{
    site: 'yahoo.com',
    responseTime: 50,
    unit: 'ms'
},
{
    site: 'google.com',
    responseTime: 10,
    unit: 'ms'
},
{
    site: 'reddit.com',
    responseTime: null,
    unit: 'ms'
},
{
    site: 'slack.com',
    responseTime: 80,
    unit: 'ms'
},
{
    site: 'github.com',
    responseTime: 30,
    unit: 'ms'
}
];

websiteResponseTimes(websites);

/*
Expected Output:
 Responses:  [
    { site: 'google.com', responseTime: 10 },
    { site: 'github.com', responseTime: 30 },
    { site: 'yahoo.com', responseTime: 50 },
    { site: 'slack.com', responseTime: 80 }
]
No Response: [ 'reddit.com' ]
*/

/** Question 2
 * Using Promises syntax write a set of functions that performs operations the given db. (20)
Requirements:

Use Promises syntax with .then() and .catch() syntax
Create a Promise with setTimeout() of 10ms in bucketTwitters() function.
bucketTwitters(account)
This function accepts an account object.

If the account has a twitter handle then it is considered found
If the account does not have twitter handle it is considered missing
Use resolve/reject to handle the cases listed above
loopAccountsPromises(database)
This function accepts an array of objects to be evaluated.

It prints an object with the keys 'found' and 'missing' which contain the array of found and missing twitter accounts.
It ONLY console.logs when all accounts been processed.
 */

const database = [
    {
        id: 1,
        entry: 'Space X',
        twitter: '@spacex'
    },
    {
        id: 2,
        entry: 'NASA',
        twitter: null
    },
    {
        id: 3,
        entry: 'Apple',
        twitter: '@apple'
    },
    {
        id: 4,
        entry: 'Microsoft',
        twitter: '@microsoft'
    },
    {
        id: 5,
        entry: 'Reddit',
        twitter: null
    }
];
loopAccountsPromises(database);

// Expected Output:
// {
//     found: [
//         { id: 1, entry: 'Space X', twitter: '@spacex' },
//         { id: 3, entry: 'Apple', twitter: '@apple' },
//         { id: 4, entry: 'Microsoft', twitter: '@microsoft' }
//     ],
//     missing: [
//         { id: 2, entry: 'NASA', twitter: null },
//         { id: 5, entry: 'Reddit', twitter: null }
//     ]
// }