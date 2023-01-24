import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
  Image,
} from "@react-pdf/renderer";
import VotingCard from "../pages/VotingCard";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/VotingCard.css";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#eff4f6",
    padding: 40,
    // color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },

  viewer: {
    width: "100%",
    height: window.innerHeight,
  },
});

function RegistrationCard() {
  const location = useLocation();
  const regInfo = location.state;

  const barCode = require("../assets/barcode.jfif");
  const coatOfArms = require("../assets/coatOfArms.png");
  const iecLogo = require("../assets/iec.jpg");

  const date = new Date().toLocaleDateString();

  return (
    <PDFViewer style={styles.viewer}>
      <Document
        title={regInfo ? regInfo.fullName : "Default"}
        creator="Tiroeteng"
        author="Tiroeteng"
        subject="CV"
        keywords="CV, Tiroeteng, Job, Application"
      >
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View className="cardContainer container">
            {/* entire card container */}
            <View className="card-content">
              <View className="row w-100">
                <View className="col-2  text-center p-4">
                  <Text>VOTER'S REGISTRATION NUMBER</Text>
                  <Image src={barCode} className="img-fluid" alt="..." />
                </View>
                <View className="col-10 ">
                  <View className="row ">
                    <View className="col text-center">
                      <Image
                        src={coatOfArms}
                        className="img-fluid h-25"
                        alt="..."
                      />
                      <Text>Republic Of Botswana</Text>
                    </View>
                    <View className="col">
                      <h5 className="text-center">FORM B</h5>
                      <h5>VOTERS REGISTRATION CARD</h5>
                      <h5 className="text-center">BOTSWANA ELECTIONS</h5>
                      <h6 className="text-center">
                        ELECTORAL ACT (Cap, 02:09)
                      </h6>
                      <Text className="text-center">(section 10 (3) (0))</Text>
                      <Text className="text-center">
                        (Here is your registration Card Details)
                      </Text>
                    </View>
                    <View className="col text-center">
                      <img
                        src={iecLogo}
                        className="img-fluid h-25 mt-3"
                        alt="..."
                      />
                    </View>
                  </View>
                  {/* form content */}
                  <View className="formContent">
                    <form>
                      <View className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          1. Other Names
                        </label>
                        <View className="col-sm-10">
                          <input
                            type="text"
                            className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0"
                            value={regInfo ? regInfo.firstName : ""}
                          />
                        </View>
                      </View>

                      <View className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          2. Surname
                        </label>
                        <View className="col-sm-10">
                          <input
                            type="text"
                            className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0"
                            value={regInfo ? regInfo.lastName : ""}
                          />
                        </View>
                      </View>

                      <View className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          3. Sex
                        </label>
                        <View className="col-sm-10">
                          <input
                            type="text"
                            className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0"
                            value={regInfo ? regInfo.gender : ""}
                          />
                        </View>
                      </View>

                      <View className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          4. Address
                        </label>
                        <View className="col-sm-10">
                          <input
                            type="text"
                            className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0"
                            value={regInfo ? regInfo.address : ""}
                          />
                        </View>
                      </View>

                      <View className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          5. Polling Station
                        </label>
                        <View className="col-sm-10">
                          <input
                            type="text"
                            className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0"
                            value={regInfo ? regInfo.station : ""}
                          />
                        </View>
                      </View>

                      <View className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          6. Date
                        </label>
                        <View className="col-sm-10">
                          <input
                            type="text"
                            className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0"
                            value={date}
                          />
                        </View>
                      </View>
                    </form>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
      {/*  */}
    </PDFViewer>
  );
}

export default RegistrationCard;
