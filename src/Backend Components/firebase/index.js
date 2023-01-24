import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClUbd3sR4oOWDqgkkbsSLIS64uwzS2zVU",
    authDomain: "biust-src-elections.firebaseapp.com",
    databaseURL: "https://biust-src-elections-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "biust-src-elections",
    storageBucket: "biust-src-elections.appspot.com",
    messagingSenderId: "26686628135",
    appId: "1:26686628135:web:4ccbaed5305d6d70bfc902",
    measurementId: "G-3WWDWKENWN"
};


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.database()
        this.storageRef = app.storage()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }

    getCurrentUserId() {
        let user;
        user = this.auth().currentUser;
        console.log(user.uid)
        return user.uid;
    }

    votePresident(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("president").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("president").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteVicePresident(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("vicePresident").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("vicePresident").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteTreasurer(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("treasurer").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("treasurer").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }

    }

    voteEntertainment(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("entertainment").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("entertainment").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteCommunications(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("communications").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("communications").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteCommunityOutreach(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("communityOutreach").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("communityOutreach").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteAdminSecretary(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("adminSecretary").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("adminSecretary").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteSportsNRecreation(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("sportsNRecreation").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("sportsNRecreation").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteAcademicAffairs(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("academicAffairs").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("academicAffairs").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteHealthNSafety(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("healthNSafety").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("healthNSafety").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteInternationalAffairs(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("internationalAffairs").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("internationalAffairs").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteSecretaryGeneral(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("secretaryGeneral").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("internationalAffairs").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    voteSWAA(candidateName) {
        if (candidateName !== "") {
            return this.db.ref("votes").child("studentWelfare").child(candidateName).push({
                candidateName: candidateName,
            }).catch((error) => {
                console.log(error.message);
            });
        } else {
            return this.db.ref("votes").child("internationalAffairs").child("spoiled").push({
                candidateName: "spoiled",
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }

    //vote counting
    async getCandidatesResults(seat) {
        // create array to store results
        let presidentResults = [];
        
        // this.db.ref("votes").child(seat).on('value', (snapshot) => {
        //     snapshot.forEach(data => {
        //         const dataKey = data.key
        //
        //         presidentResults.push({ "title": dataKey, "value": data.numChildren() })
        //
        //     })
        // }, [])
        // }

        // db reference variable
        const ref = this.db.ref('votes').child(seat);

        try{
            // wait for snapshot promise to be resolved
            const snapshot = await ref.once('value');
            
            // loop though resolved promise and populate results
            snapshot.forEach(data => {
                const dataKey = data.key;
                presidentResults.push({ "title": dataKey, "value": data.numChildren() });
            })
        }
        catch(err){
            console.log(err);
        }


        return presidentResults;
    }

    hasVoted() {
        let user;
        user = app.auth().currentUser;
        return this.db.ref("peopleWhoVoted").child(user.uid).push({
            "voting confirmation": "i haved voted",
        }).catch((error) => {
            console.log(error.message);
        });
    }

    async votingCheck() {
        let user;
        user = app.auth().currentUser;
        const doc = await this.db.ref("peopleWhoVoted").child(user.uid).get();
        return doc.exists();

    }



}

export default new Firebase()
