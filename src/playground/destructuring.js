// const person = {
//     name: 'Antonio',
//     age: 32,
//     location: {
//         city: 'Milano',
//         temp: 10
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);


// const { city, temp } = person.location;
// if (city && temp) {
//     console.log(`Its ${temp} in ${city} today`)
// }


// const book = {
//     title: 'Inferno',
//     author: 'Dante',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self published' } = book.publisher

// console.log(publisherName);

// const address = ['via Taccioli 12', 'Milano', 'Lombardia', '20162']
//     //const [street, city, region, zip] = address;
//     //const [, city, region] = address;
// const [, , region = 'New York'] = address;
// console.log(`you are in ${city}, ${region}`)

const item = ['coffee (hot)', '$2.0', '$2.5', '$5.0'];

const [coffee, , med, ] = item;

console.log(`A medium ${coffee} costs ${med}`);