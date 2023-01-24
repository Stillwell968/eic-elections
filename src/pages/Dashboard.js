import React from 'react';
import { Image } from 'react-bootstrap'
import logo from "../assets/logo.png"
import {
    Grid, CssBaseline, Button, Typography, LinearProgress
} from '@material-ui/core';
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

export default function Dashboard(){
    const classes = useStyles();

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return(
        <Grid container direction='column' justify="center" alignItems="center">
            <Grid item xs sm md lg style={{paddingBottom:'3%'}}>
                <Image src={logo} fluid style={{ maxHeight: '150px' }}/>
            </Grid>
            <Grid item xs sm md lg style={{ paddingBottom: '3%' }}>
                <Typography variant='h4' style={{textAlign:'center'}}>
                    Total students voted: <br/>
                    1345
                </Typography>
            </Grid>
            <Grid item xs sm md lg style={{ paddingBottom: '5%' }}>
                <Typography variant='h6' style={{ textAlign: 'center' }}>
                    Total students registered:<br/> 
                    2000
                </Typography>
            </Grid>
            <Grid item xs sm md lg>
                <LinearProgress variant="determinate" value={progress} color="primary" />
            </Grid>
            
        </Grid>
    );
}

