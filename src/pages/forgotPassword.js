import React, {ReactPropTypes, useCallback, useContext, useState} from "react";
import { withRouter, Redirect } from "react-router";
import { Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import {Card, TextField, Typography} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
// import logo from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: 'white',
		border: 'solid 1px rgba(162, 196, 207, 0.467);',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '15px',

	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		color: 'aliceblue',
		backgroundColor: '#060664',
	},
	forgot: {
		color: '#060664',
	}
}));

const ForgotPassword = ({history}) => {
	// const toast = useToast();
	const classes = useStyles();

	const handleForgotPassword = useCallback(
		async (event) => {
			event.preventDefault();
			const { email } = event.target.elements;
			if (email.value === "") {
				//showToast("Email field cannot be blank.", 'error');
				console.log("Email field cannot be blank.");
			} else {
				try {
					// await firebase.auth().sendPasswordResetEmail(email.value);
					//showToast("Done! Please check your email inbox for the password reset link.", 'success');
					console.log("Done! Please check your email inbox for the password reset link.");
				} catch (error) {
					//showToast(error.message, 'error');
					console.log(error);
				}
			}
		},
		[history]
	);


	return (

	<div className='dash_bg'>
		<div style={{ paddingLeft: '30%', paddingTop: '5%' }}>
			<Card component="main" style={{ maxWidth: '50%' }}>
				<CssBaseline />

				<img src={'logo'} alt="Logo" style={{ marginTop: 20 }} />
				<div className={classes.paper}>

					{/* Text Fields */}
					<form className={classes.form} noValidate onSubmit={handleForgotPassword}>
						<Typography style={{ paddingBottom: "5%" }}>
							{"Please enter your email address to reset your password."}
						</Typography>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Reset Password

						</Button>

						<Link to={'/login'} >
							<Typography className={classes.forgot} variant="body2">Back To Login</Typography>
						</Link>
						<Link to={'/register'} >
							<Typography className={classes.forgot} variant="body2">Register</Typography>
						</Link>
					</form>
				</div>

			</Card>
		</div>
	</div>
	);
};

export default withRouter(ForgotPassword);