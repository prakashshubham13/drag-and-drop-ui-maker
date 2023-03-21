import { uiReduder } from './reducer1/reducer';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(uiReduder,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);