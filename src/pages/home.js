import '../css/App.css';
import React, { useState } from 'react';

import { createMuiTheme, makeStyles, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Fab, Button, Typography, Card } from '@material-ui/core';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

// stepper components 
import President from '../Components/Pres';
import Vice from '../Components/Vice';
import Treasurer from '../Components/Treasurer';
import Entertainment from '../Components/Entertainment';
import Communications from '../Components/Commnications';
import Confirm from '../Components/Confirm';
import CommunityOutreach from "../Components/CommunityOutreach";
import AdminiSecretary from "../Components/AdminSecretary";
import SportsNRecreation from "../Components/SportsNRecreation";
import AcademicAffairs from "../Components/AcademicAffairs";
import HealthNSafety from "../Components/HealthNSafety";
import InternationalAffairs from "../Components/InternationalAffairs";
import SecretaryGeneral from "../Components/SecretaryGeneral";
import SWAA from "../Components/SWAA";
import EndScreen from "../Components/EndScreen"
import { withRouter } from 'react-router';


const styles = theme => ({
    // modal with buttons
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    bg: {
        backgroundColor: ' black',
    },
    palette: {
        primary: {
            main: '#f18658',
        }
    }
});

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


function Home(props) {
    const { classes } = props
    const defaault = [{ "name": "", "index": "" }];

    const [activeStep, setActiveStep] = useState(0);

    const [selectedPresident, setSelectedPresident] = useState([{ "name": "", "index": "" }]);
    const [selectedVicePresident, setSelectedVicePresident] = useState([{ "name": "", "index": "" }]);
    const [selectedTreasure, setSelectedTreasure] = useState([{ "name": "", "index": "" }]);
    const [selectedSecretaryGeneral, setSelectedSecretaryGeneral] = useState([{ "name": "", "index": "" }]);
    const [selectedCommunications, setSelectedCommunications] = useState([{ "name": "", "index": "" }]);
    const [selectedCommunityOutreach, setSelectedCommunityOutreach] = useState([{ "name": "", "index": "" }]);
    const [selectedAdminSecretary, setSelectedAdminSecretary] = useState([{ "name": "", "index": "" }]);
    const [selectedSportsNRecreation, setSelectedSportsNRecreation] = useState([{ "name": "", "index": "" }]);
    const [selectedAcademicAffairs, setSelectedAcademicAffairs] = useState([{ "name": "", "index": "" }]);
    const [selectedHealthNSafety, setSelectedHealthNSafety] = useState([{ "name": "", "index": "" }]);
    const [selectedInternationalAffairs, setSelectedInternationalAffairs] = useState([{ "name": "", "index": "" }]);
    const [selectedEntertainment, setSelectedEntertainment] = useState([{ "name": "", "index": "" }]);
    const [selectedSWAA, setSelectedSWAA] = useState([{ "name": "", "index": "" }]);
    const [voteStatus, setVoteStatus] = useState("")

    const steps = ['President', 'Vice President', 'Secretary General', 'Treasurer',
        'Administrative Secretary', 'Sports and Recreation', 'Academic Affairs',
        'Health and Safety', 'Publicity and Communications', 'Community Outreach',
        'International Affairs', 'Entertainment', 'Student Welfare and Advocacy', 'results'];//13 Posts

    // for bookings
    function getStepContent(step/*: number*/) {
        switch (step) {
            case 0:
                return <President
                    setSelectedPresident={setSelectedPresident}
                    selectedPresident={selectedPresident} />;
            case 1:
                return <Vice
                    setSelectedVicePresident={setSelectedVicePresident}
                    selectedVicePresident={selectedVicePresident}
                />
            case 2:
                return <Treasurer
                    setSelectedTreasure={setSelectedTreasure}
                    selectedTreasure={selectedTreasure}
                />;
            case 3:
                return <SecretaryGeneral
                    setSelectedSecretaryGeneral={setSelectedSecretaryGeneral}
                    selectedSecretaryGeneral={selectedSecretaryGeneral}
                    title="Secretary General"
                />;
            case 4:
                return <Communications
                    setSelectedCommunications={setSelectedCommunications}
                    selectedCommunications={selectedCommunications}
                />;
            case 5:
                return <CommunityOutreach
                    setSelectedCommunityOutreach={setSelectedCommunityOutreach}
                    selectedCommunityOutreach={selectedCommunityOutreach}
                    title="Community Outreach"
                />;
            case 6:
                return <AdminiSecretary
                    setSelectedCommunityOutreach={setSelectedAdminSecretary}
                    selectedAdminSecretary={selectedAdminSecretary}
                    title="Administrative Secretary"
                />;
            case 7:
                return <SportsNRecreation
                    setSelectedSportsNRecreation={setSelectedSportsNRecreation}
                    selectedSportsNRecreation={selectedSportsNRecreation}
                    title="Sports and Recreation"
                />;
            case 8:
                return <AcademicAffairs
                    setSelectedAcademicAffairs={setSelectedAcademicAffairs}
                    selectedAcademicAffairs={selectedAcademicAffairs}
                    title="Academic Affairs"
                />;
            case 9:
                return <HealthNSafety
                    setSelectedHealthNSafety={setSelectedHealthNSafety}
                    selectedHealthNSafety={selectedHealthNSafety}
                    title="Health and Safety"
                />;
            case 10:
                return <InternationalAffairs
                    setSelectedInternationalAffairs={setSelectedInternationalAffairs}
                    selectedInternationalAffairs={selectedInternationalAffairs}
                    title="International Affairs"
                />;
            case 11:
                return <Entertainment
                    setSelectedEntertainment={setSelectedEntertainment}
                    selectedEntertainment={selectedEntertainment}
                />

            // Student Welfare and Advocacy
            case 12:
                return <SWAA
                    setSelectedSWAA={setSelectedSWAA}
                    selectedSWAA={selectedSWAA}
                    title="Student Welfare and Advocacy"
                />;

            //Confirm Votes page
            case 13:
                return <Confirm
                    selectedPresident={selectedPresident[0].name}
                    selectedVicePresident={selectedVicePresident[0].name}
                    selectedTreasure={selectedTreasure.name}
                    selectedEntertainment={selectedEntertainment.name}
                    selectedCommunications={selectedCommunications.name}
                    selectedCommunityOutreach={selectedCommunityOutreach.name}
                    selectedAdminSecretary={selectedAdminSecretary.name}
                    selectedSportsNRecreation={selectedSportsNRecreation.name}
                    selectedAcademicAffairs={selectedAcademicAffairs.name}
                    selectedHealthNSafety={selectedHealthNSafety.name}
                    selectedInternationalAffairs={selectedInternationalAffairs.name}
                    selectedSecretaryGeneral={selectedSecretaryGeneral.name}
                    selectedSWAA={selectedSWAA.name}
                />
            default:
                throw new Error('Unknown step');
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleVote = () => {
        // try {
        //     firebase.votePresident(selectedPresident[0].name)
        //     firebase.voteVicePresident(selectedVicePresident[0].name)
        //     firebase.hasVoted();
        //     props.history.replace('/')
        // } catch (error) {
        //     console.log(error.message)
        // }
    }

    // firebase.votingCheck()
    //     .then(result => {
    //         setVoteStatus(result);
    //     });

    if (voteStatus) {
        console.log("voting check")
        alert('You have Voted already')
        props.history.replace('/')
        return null;
    }

    return (
        <div className='card'>
            <MuiThemeProvider theme={colortheme}>
                <Grid container direction='row' justify='space-evenly' alignItems='center' spacing={2} elevation={5}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Card className='card' elevation={3}>
                            <React.Fragment>
                                <Paper className={classes.paper}>
                                    <Typography component="h5" variant="h2" align="center">2021-2022 SRC
                                        Elections</Typography>
                                    <hr />
                                    <React.Fragment>
                                        {activeStep <= steps.length - 1 && (
                                            <React.Fragment>
                                                {getStepContent(activeStep)}
                                                <div className={classes.buttons}>

                                                    {activeStep !== 0 && (
                                                        <Button onClick={handleBack} className={classes.button}>
                                                            Back
                                                        </Button>
                                                    )}

                                                    {activeStep < 13 &&
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleNext}
                                                            className={classes.button}
                                                        >

                                                            {activeStep < 13 && 'SKIP'}
                                                        </Button>
                                                    }


                                                    {activeStep < 13 &&
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleNext}
                                                            className={classes.button}
                                                        >
                                                            Next
                                                    </Button>
                                                    }

                                                    {activeStep === 13 &&
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleVote}
                                                            className={classes.button}
                                                        >

                                                            Vote
                                                        </Button>
                                                    }



                                                </div>
                                            </React.Fragment>
                                        )}
                                    </React.Fragment>
                                </Paper>

                            </React.Fragment>
                        </Card>
                    </Grid>
                </Grid>
                <Fab variant="extended" color="primary" onClick={() => { alert('logout') }}>
                    <ExitToAppRoundedIcon className={classes.extendedIcon} />
                Logout
            </Fab>
            </MuiThemeProvider>
        </div>
    );
}

export default withRouter(withStyles(styles)(Home))