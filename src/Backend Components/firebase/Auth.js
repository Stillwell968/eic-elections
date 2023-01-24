import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../newFirebase/firebase-functions"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {

		onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setPending(false);
			} else {
				setPending(false);
			  // User is signed out
			  // ...
			}
		  });
	}, []);

	if (pending) {
		return <p>Loading...</p>
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser: currentUser, 
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};