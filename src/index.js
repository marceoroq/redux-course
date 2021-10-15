import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';

const store = configureStore();
console.log(store);

store.subscribe(() => {
    console.log("[!] Store changed!:", store.getState());
})

store.dispatch(bugAdded({ description: 'bug1' }));
store.dispatch(bugAdded({ description: 'bug2' }));
store.dispatch(bugAdded({ description: 'bug3' }));
store.dispatch(bugAdded({ description: 'bug4' }));
store.dispatch(bugResolved({ id: 3 }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugRemoved({ id: 9 }));

console.log(store.getState());