import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import { Provider } from "react-redux"
import { StoreReducer } from './reducers/reducer';
import thunk from "redux-thunk"
import logger from "redux-logger"
import { createStore,applyMiddleware } from "redux"
// import { loadState, saveState } from './localStorage';
const rootElement = document.getElementById('root')
const store = createStore(StoreReducer,applyMiddleware(thunk,logger))

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
<App />
</React.StrictMode>
</Provider>
, rootElement)
