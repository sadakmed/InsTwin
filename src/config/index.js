import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDYcY2wXll4BI3Gd-qokG6F6KQZB5zzrkg",
    authDomain: "insta-13694.firebaseapp.com",
    databaseURL: "https://insta-13694.firebaseio.com",
    projectId: "insta-13694",
    storageBucket: "insta-13694.appspot.com",
    messagingSenderId: "898466627488",
    appId: "1:898466627488:web:6c749772a9401815d0eec5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

export const  f = firebase;
export const fDb= firebase.database()
export const fAuth= firebase.auth()
export const fStorage= firebase.storage()



export default {

    images:{
        heartIcon: require('../../assets/heart.png'),
        arrowIcon: require('../../assets/arrow.png'),
        bubbleIcon: require('../../assets/bubble.png')

    }


}