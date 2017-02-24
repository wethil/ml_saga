import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers'
import rootSaga from '../sagas' //TODO : next step


/* eslint-disable no-underscore-dangle */
const configureStore= () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return {
        ...createStore(rootReducer,/* preloadedState, */ composeEnhancers (applyMiddleware(sagaMiddleware)) ),
        runSaga:sagaMiddleware.run(rootSaga)

    }
}

/* eslint-enable */

export default configureStore;