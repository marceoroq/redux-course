import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();
console.log(store);

store.subscribe(() => {
    console.log("[!] Store changed!:", store.getState());
})
store.dispatch(userAdded({ name: "Juan Carlo" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(bugAdded({ description: 'bug1' }));
store.dispatch(bugAdded({ description: 'bug2' }));
store.dispatch(bugAdded({ description: 'bug3' }));
store.dispatch(bugAdded({ description: 'bug4' }));
store.dispatch(bugResolved({ id: 3 }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugRemoved({ id: 9 }));
store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(bugAssignedToUser({ bugId: 4, userId: 1 }));
console.log(store.getState());