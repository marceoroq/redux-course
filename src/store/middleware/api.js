import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {
    if(action.type !== actions.apiRequested.type) return next(action);

    next(action);
    const { url, onSuccess, onError } = action.payload;
    try {
        const response = await fetch(`http://localhost:9002/api${url}`);
        const bugs = await response.json();
        // Hacemos un manejo general de errores en llamados a APIs
        dispatch(actions.apiRequestSucceeded(bugs));
        // Aqui hariamos el manejo especifico si recibimos el parametro onSuccess con el tipo de action a despachar
        if (onSuccess) dispatch({type: onSuccess, payload: bugs});
    } catch(error) {
        // General
        dispatch(actions.apiRequestFailed(error));
        // Especifico
        if (onError) dispatch({type: onError, payload: error})
    }
}

export default api;