import { createAction, createReducer } from '@reduxjs/toolkit';

/* Action Creators */
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

/* Reducers */
let lastId = 0;

export default createReducer([], {
    [bugAdded.type]: (state, action) => {
        console.log("Entre?");
        state.push({
            id: ++lastId, 
            description: action.payload.description,
            resolved: false
        });
    },
    [bugRemoved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        index >= 0 ? state.splice(index, 1) : state;
    },
    [bugResolved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    }
});
