import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { vehiclesReducer, vehiclesSagas } from "./vehicles";
import createSagaMiddleware from "redux-saga";
import { all } from '@redux-saga/core/effects';

const metaReducers = combineReducers({
  vehicles: vehiclesReducer
});

function* rootSaga() {
  yield all([...vehiclesSagas]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  metaReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
