import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// PROJECT RETIRED FROM "THE NET NINJA" youtube channel. playlist = https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3


const store = createStore(rootReducer, 
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig, { 
			useFirestoreForProfile: true,
			userProfile: 'users',
			attachAuthIsReady: true
		})
	)
);

store.firebaseAuthIsReady.then (() => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
	serviceWorker.unregister();
})





