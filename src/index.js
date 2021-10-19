import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } from './store/entities/bugs';
import { projectAdded } from './store/entities/projects';
import { userAdded } from './store/entities/users';
import * as actions from './store/api';

const store = configureStore();
console.log(store);

store.subscribe(() => {
    console.log("[!] Store changed!:", store.getState());
})

store.dispatch(() => {
    // Call an API
    // If promise is resolved:
        store.dispatch({ type: "bugisReciped", bugs: [1, 2, 3] });
});

store.dispatch({
    type: 'error',
    payload: { message: "An error ocurred." }
});

store.dispatch({
    type: actions.apiRequested.type,
		payload: {
				url: '/bugs',
				onSuccess: 'bugsReceived',
		}
});

// store.dispatch(userAdded({ name: "Juan Carlo" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(bugAdded({ description: 'bug1' }));
// store.dispatch(bugAdded({ description: 'bug2' }));
// store.dispatch(bugAdded({ description: 'bug3' }));
// store.dispatch(bugResolved({ id: 3 }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(projectAdded({ name: 'Project 1' }));
// store.dispatch(bugAssignedToUser({ bugId: 4, userId: 1 }));
// console.log(store.getState());