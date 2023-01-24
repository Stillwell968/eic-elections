import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./config"
import { getFirestore,  collection, addDoc, setDoc,doc, getDoc, getDocs } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth"









// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export async function loginUser (email, password){
    let messageError=""
  
    try{
      await signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        //user loged in
        console.log("loged in", res)
      })
      return true
  
    }catch(error) {
      messageError = error
      console.log(error)
      return messageError
    }
  }


export async function registerNewVoter(firstName, lastName, idNum, dob,omangEpiry,gender,station,address) {
    let response
    try{

      await checkIfAlreadyApplied(idNum).then(async (res) => {
        res === false
          ? await setDoc(doc(db, "refisteredNoters", idNum), {
              firtstName: firstName,
              lastName: lastName,
              idNumber: idNum,
              dateOfBirth: dob,
              expiryDate: omangEpiry,
              gender: gender,
              voted: false,
              polingStation: station,
              address: address
              
            }).then( response = true)
          : (response = res);
      });
        
       
    }catch (e) {
        response = e
        console.log(e)
        return response
    }

    return response

    
}

async function checkIfAlreadyApplied (idNum) {
  const querySnap = await getDoc(doc(db,'refisteredNoters',idNum))

  let response

  if(querySnap.exists()){
    // return an error that user has already registered
   return response = "Error! User has already registered for elections"
    
  }else {
    return response = false
  }
}

export async function signOutUser () {
  let message
 
  try{
     signOut(auth).then(message=true)
  } catch( error) {
    return message = error
  }
   

    return message

}