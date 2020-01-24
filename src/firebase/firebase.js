import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'mele',
//     note: 'belle mele',
//     amount: 4,
//     createdAt: 1000
// });

// database.ref('expenses').push({
//     description: 'pere',
//     note: 'belle pere',
//     amount: 7,
//     createdAt: 3000
// });

// database.ref('expenses').push({
//     description: 'sedie',
//     note: 'belle sedie',
//     amount: 4,
//     createdAt: 6000
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });










// const company = database.ref('job/company').on('value', (snapshot) => {
//     console.log(snapshot.val())
// });
// const job = database.ref('job/title').on('value', (snapshot) => {
//     console.log(snapshot.val())
// });
// const name = database.ref('name').on('value', (snapshot) => {
//     console.log(snapshot.val())
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('This didnt work', e)
//     });

// database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     });

// setTimeout(() => {
//     database.ref('age').set(34);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 10500);


// database.ref().set({
//     name: 'Antonio Maiocchi',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Milano',
//         country: 'Italy'
//     },
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This did not work', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     isSingle: true,
//     'job/company': 'Amazon',
//     'location/city': 'Berlin'
// });

// database.ref('location/city').set('Berlin');
// database.ref('age').set(33);

// database.ref('attributes').set({
//     height: 187,
//     weight: 75
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('removed');
//     })
//     .catch((e) => {
//         console.log('remove unsuccessful', e)
//     });