const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Antonio',
            surname: 'Maiocchi'
        })
    }, 3000);
});

console.log('before');

promise.then((data) => console.log(data));

console.log('after');


//promise chaining
promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('does this run?');
}).catch((error) => {
    console.log('error', error)
});