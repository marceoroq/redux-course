import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId, 
                name: action.payload.name,
            });
        },
        userRemoved: (users, action) => {
            const index = users.findIndex(user => user.id === action.payload.id);
            index >= 0 ? users.splice(index, 1) : users;
        }
    }
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;