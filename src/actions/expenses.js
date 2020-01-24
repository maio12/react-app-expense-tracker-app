import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

//WITH ASYNCHRONOUS ACTIONS
// component calls action generator
// action generator returns function
// component dispatches function (?) need an external module (middleware) to make redux accept functions
// function runs, has the ability to dispatch other actions and do whatever it wants. Here we put FireBase code, like push
// function returns an object that chnges the redux store

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// export const addExpense = ({
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
// } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

// export const startAddExpense = (expenseData = {}) => {
//     // action generator returns function, just going to work thanks to redux thunk
//     return (dispatch) => {
//         const {
//             description = '',
//                 note = '',
//                 amount = 0,
//                 createdAt = 0
//         } = expenseData;
//         const expense = { description, note, amount, createdAt };
//         // function runs, has the ability to dispatch other actions and do whatever it wants. Here we put FireBase code, like push
//         database.ref('expenses').push(expense).then((ref) => {
//             // function returns an object that chnges the redux store
//             dispatch(addExpense({
//                 id: ref.key,
//                 ...expense
//             }));
//         })
//     }
// }

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});