import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCN64r1vkSTtgJshDNEhiNE9XoEU_VDGDQ",
	authDomain: "pc19-dashboard.firebaseapp.com",
	databaseURL: "https://pc19-dashboard.firebaseio.com", 
	projectId: "pc19-dashboard",
	storageBucket: "pc19-dashboard.appspot.com",
	messagingSenderId: "659322157045"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;