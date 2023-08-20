import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyADZmVkLH14l5kU-bLRDwVc-anG5043hSI",
    authDomain: "paul-s-hut.firebaseapp.com",
    projectId: "paul-s-hut",
    storageBucket: "paul-s-hut.appspot.com",
    messagingSenderId: "6543606383",
    appId: "1:6543606383:web:1bb5ebc4ca4d234968839a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const promotionsCollectionRef = collection(db, "en-promotions")
const pizzasCollectionRef = collection(db, "en-pizzas")

export async function getPromotions() {
  const querySnapShot = await getDocs(promotionsCollectionRef)
  const dataArr = querySnapShot.docs.map(doc => {
      return {
          ...doc.data(),
          id: doc.id
      }
  })
  return dataArr
}

export async function getPizzas() {
  const querySnapShot = await getDocs(pizzasCollectionRef)
  const dataArr = querySnapShot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })
  return dataArr
}