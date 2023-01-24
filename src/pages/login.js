import React, {ReactPropTypes, useCallback, useContext, useState} from "react";
import { withRouter, Redirect } from "react-router";
// UI
import { Image } from 'react-bootstrap'
import logo from "../assets/logo.png"
import {Grid, CssBaseline, Button, Typography, Card, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { loginUser  } from "../Backend Components/newFirebase/firebase-functions";

import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import '../css/App.css'

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const colortheme = createMuiTheme({
	palette: {
		primary: {
			main: '#f18658',
		},
		secondary: {
			main: '#000000'
		},
		default: {
			main: '#bababa'
		}
	}
});




//default export stuff
const Login = ({history}) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);


	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();

			const { email, password } = event.target.elements;

			// authenticate officer
			await loginUser(email.value, password.value)
			.then(response => {
				response === true ? history.push("/", {}) : alert(response)
			})
		},
		[history]
	);



	return (
		<div className='login_bg'>
			<MuiThemeProvider theme={colortheme}>

				<div style={{ paddingTop: '2%', paddingBottom: '10%', width: '100%', margin: 'auto' }}>
					{/* Register */}
					<Grid container direction="column"
						justify="space-evenly"
						alignItems="center" >
						<Grid item xs sm md lg >
							<Card elevation={4} style={{ padding: '5%', border: '1px solid #f18658' }}>
								<Grid container direction="column"
									justify="space-evenly"
									alignItems="center" >
									<Grid item xs sm md lg> <Image src={logo} fluid style={{ maxHeight: '150px' }} /></Grid>
								</Grid>
								<Typography style={{ textAlign: 'center' }} variant='h6'>
									Welcome to the BIUST SRC Election Website
                                    <hr />
								</Typography>
								<Typography style={{ textAlign: 'center' }} variant='h6'>
									<br />To register an account
                                </Typography>
								<br />
								<Link to={'/register'}>
								<Button variant='contained' size="large" color="primary" fullWidth>
									Register
                                </Button>
								</Link>
								<br />
								<br />
								<br />
								<hr />
								<div /*Login section */>
									
									<Typography style={{ textAlign: 'center' }} variant='h6'>
										Login
                                    </Typography>
									{/* Text Fields */}
									<form className={classes.form} noValidate onSubmit={handleLogin}>
										<TextField
											variant="outlined"
											required
											margin="normal"
											fullWidth
											id="email"
											label="Email Address"
											name="email"
											autoComplete="email"
											autoFocus
										/>
										<TextField
											variant="outlined"
											required
											margin="normal"
											fullWidth
											name="password"
											label="Password"
											type="password"
											id="password"
											autoComplete="current-password"
										/>

										<Button
											type="submit"
											fullWidth
											variant="contained"
											color="primary"
											className={classes.submit}
										>
											Log In
                                        </Button>

									</form>
								</div>

							</Card>
						</Grid>
					</Grid>
				</div>

			</MuiThemeProvider>
		</div >
	);
};

export default withRouter(Login);