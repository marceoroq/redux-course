import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId, 
                description: action.payload.description,
                resolved: false,
            });
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            index >= 0 ? bugs.splice(index, 1) : bugs;
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId);
            index >= 0 ? bugs[index].assignedTo = userId : bugs;
        }
    }
});

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

// Selector
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);

export const getBugsAssignedTo = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.assignedTo = userId)
);

