import React, { ReactPropTypes, useCallback, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { signOutUser } from "../Backend Components/newFirebase/firebase-functions";// UI
import {Grid, Fab, Typography, Card} from '@mui/material';
// import {makeStyles} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../css/App.css'
import dash from "../assets/dash.png"
import vote from "../assets/vote.png"
import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

const colortheme = createTheme({
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




export default function Landing() {
   // const classes = useStyles();
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOutUser()
        .then(res => {
            res === true ? navigate("/login") : alert(res)
        })
    }
    return (
        <div className='landing_bg'>
            <ThemeProvider theme={colortheme}>
                <div style={{  paddingBottom: '5%'}}>
                    <div style={{ width: '100%', backgroundColor: '#f18658', marginTop: '2%', marginBottom: '2%',borderBottom:'2px solid #000',border:'1px solid #fff' }}>
                        <Typography style={{ textAlign: 'center',color:'#000' }} variant='h3'>Home </Typography>
                    </div>
                    <Grid container direction="row" justify="space-around" alignItems="center" >
                        <Grid item xs={12} sm={8} md={6} lg={5} style={{ paddingTop: '2%' }}>
                            <Grid container direction="column" justify="space-between" alignItems="center" style={{ paddingTop: '10%' }}>
                                <Grid item xs sm md lg>
                                    <Card elevation={6} style={{ maxWidth: 300, minHeight: 250, minWidth: 250 }}>
                                        <Link to={'/results'}>
                                            <Typography variant='h5' style={{ paddingTop: 25, backgroundColor: '#f18658', textAlign: 'center', color:'#000' }}>
                                                <b>View Results</b>
                                            </Typography>
                                            <img src={dash} alt="Logo" style={{ maxWidth: 230, maxHeight: 150, marginTop: 5, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                                        </Link>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                            
                                
                        <Grid item xs={12} sm={8} md={6} lg={5} style={{ paddingTop:'2%'}} >
                            <Grid container direction="column" justify="space-between" alignItems="center" style={{ paddingTop: '10%' }}>
                                    <Grid item xs sm md lg>
                                        <Card elevation={6} style={{ maxWidth: 300, minHeight: 250, minWidth: 250 }}>
                                            <Link to={'/vote'}>
                                                <Typography variant='h5' style={{ paddingTop: 25, backgroundColor: '#f18658', textAlign: 'center',color:'#000' }}>
                                                    <b>Vote</b>
                                                </Typography>
                                                <img src={vote} alt="Logo" style={{ maxWidth: 230, maxHeight: 150, marginTop: 5, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                                            </Link>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        
                    </Grid>
                </div>
                <Fab variant="extended" color="primary" onClick={handleSignOut}>
                    <ExitToAppIcon/>
                Logout
            </Fab>
            </ThemeProvider>
        </div >
    );
};

