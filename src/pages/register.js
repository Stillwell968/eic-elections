import React, {
  ReactPropTypes,
  useCallback,
  useContext,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { registerNewVoter } from "../Backend Components/newFirebase/firebase-functions";
// import approved emails
import { approvedOmangNumbers } from "../Components/approvedEmails";
import { useNavigate } from "react-router-dom";

// UI
import {
 // makeStyles,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Button, Grid, Typography, TextField, Card,MenuItem } from "@mui/material";
import logo from "../assets/iec.jpg";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     backgroundColor: "white",
//     border: "solid 1px rgba(162, 196, 207, 0.467);",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: "15px",
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
// }));

const colortheme = createTheme({
  palette: {
    primary: {
      main: "#4EA0E1",
    },
    secondary: {
      main: "#000000",
    },
    default: {
      main: "#bababa",
    },
  },
});

// list of poling stations
const polingStations = [
  {
    value: 'Masunga P.School',
    label: 'Masunga P.School'
  },
  {
    value: 'Thebepatswa P.School',
    label: 'Thebepatswa P.School'
  },
  {
    value: 'Tlokweng P.School',
    label: 'Tlokweng P.School'
  },
  {
    value: 'Gaborone, North',
    label: 'Gaborone, North'
  },
  {
    value: 'Lobatse, East',
    label: 'Lobatse, East'
  },
]

//default export stuff
export default function Register  ({ history })  {
  // const toast = useToast();
 // const classes = useStyles();

  const navigate = useNavigate()

  // function to check if an email is approved
  const checkIfOmangIsValid = (email) => {
    // use a lower cased email for simplicity
    return approvedOmangNumbers.includes(email.toLowerCase());
  };

  // register success function 
  

  // handle registration when successful email
  const handleRegister =  useCallback(

    async (event) => {
      event.preventDefault();
    
      const { fName, lName, idNum, dob, doe, gender,polingStation,address} = event.target.elements;
      const viewRegCard = () => {
          alert("successfully registered")
          return navigate("registrationCard", {
            state: {
              firstName: fName.value,
              lastName: lName.value,
              idnumber: idNum.value,
              dob: dob.value,
              dateOfExpiry: doe.value,
              gender: gender.value,
              station: polingStation.value,
              address: address.value
            },
          });
        }
      // check if email supplied is on the approved list
      if (checkIfOmangIsValid(idNum.value) === false) {
        // email isn't on approved list
        alert("You entered an invalid Id, but if you feel this to be true kindly contact IEC offices");
        return;
      }else {
         // register new voter
      await registerNewVoter(fName.value, lName.value, idNum.value, dob.value,doe.value,gender.value,polingStation.value,address.value)
      .then(response => {
        response === true ?viewRegCard() : alert(response)
      })
      }

     

      console.log(fName.value)

    
    },
    [history]
  );

  return (
    <div className="login_bg">
      <ThemeProvider theme={colortheme}>
        <div
          style={{
            paddingTop: "2%",
            paddingBottom: "10%",
            width: "100%",
            margin: "auto",
          }}
        >
          {/* Register */}
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs sm md lg>
              <Card
                elevation={4}
                style={{ padding: "5%", border: "1px solid #f18658" }}
              >
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid item xs sm md lg>
                    {" "}
                    <Image src={logo} fluid style={{ maxHeight: "150px" }} />
                  </Grid>
                </Grid>
                <Typography style={{ textAlign: "center" }} variant="h6">
                  Welcome to the IEC Election Website
                  <hr />
                </Typography>
                <Typography style={{ textAlign: "center" }} variant="h6">
                  Register for elections
                </Typography>

                <form
                  //className={classes.form}
                  noValidate
                  onSubmit={handleRegister}
                >
                  <div className="inputContainer">
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="fName"
                      label="First Names"
                      name="fName"
                      autoComplete="name"
                      autoFocus
                      style={{ marginRight: 12 }}
                    />

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="lName"
                      label="Last Name"
                      name="lName"
                      autoComplete="name"
                      autoFocus
                    />
                  </div>

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="number"
                    label="ID Number"
                    name="idNum"
                    autoComplete="num"
                    autoFocus
                  />

                  <div className="inputContainer">
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="dob"
                      label="Date of Birth"
                      name="dob"
                      autoComplete="date"
                      autoFocus
                      style={{ marginRight: 12 }}
                    />

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="doe"
                      label="Date of Expiry"
                      name="doe"
                      autoComplete="date"
                      autoFocus
                    />
                  </div>

                  <div className="inputContainer">
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="postMail"
                      label="Place of Birth"
                      name="postal"
                      autoComplete="text"
                      autoFocus
                      style={{ marginRight: 12 }}
                    />

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="gender"
                      label="Gender"
                      name="gender"
                      autoComplete="text"
                      autoFocus
                    />
                  </div>
                  <div className="inputContainer">
                    <TextField
                      id="polingStation"
                      name="polingStation"
                      select
                      label="Select"
                      defaultValue="Masunga P.School"
                      helperText="Please select your poling station"
                      variant="standard"
                      style={{ marginRight: 12 }}
                    >
                      {polingStations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="text"
                      autoFocus
                    />
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 20 }}
                    // className={classes.submit}
                  >
                    Register
                  </Button>
                  <br />
                  <br />

                  
                </form>
              </Card>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
};

// export default withRouter(Register);
