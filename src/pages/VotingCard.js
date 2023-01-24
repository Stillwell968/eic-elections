import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/VotingCard.css";

function VotingCard({regInfo}) {
  const barCode = require("../assets/barcode.jfif");
  const coatOfArms = require("../assets/coatOfArms.png");
  const iecLogo = require ("../assets/iec.jpg")

 

  const date = new Date().toLocaleDateString()
  return (
    <div className="cardContainer container">
      {/* entire card container */}
      <div className="card-content">
        <div className="row w-100">
        <div className="col-2  text-center p-4">
          <h6>VOTER'S REGISTRATION NUMBER</h6>
          <img src={barCode} className="img-fluid" alt="..." />
        </div>
        <div className="col-10 ">
          <div className="row ">
            <div className="col text-center">
              <img src={coatOfArms} className="img-fluid h-25" alt="..." />
              <p>Republic Of Botswana</p>
            </div>
            <div className="col">
              <h5 className="text-center">FORM B</h5>
              <h5>VOTERS REGISTRATION CARD</h5>
              <h5 className="text-center">BOTSWANA ELECTIONS</h5>
              <h6 className="text-center">ELECTORAL ACT (Cap, 02:09)</h6>
              <p className="text-center">(section 10 (3) (0))</p>
              <p className="text-center">(Here is your registration Card Details)</p>
            </div>
            <div className="col text-center">
            <img src={iecLogo} className="img-fluid h-25 mt-3" alt="..." />
            </div>
          </div>
           {/* form content */}
           <div className="formContent">
           <form>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">1. Other Names</label>
                    <div className="col-sm-10">
                    <input
                     type="text" 
                     className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0" value={regInfo ? regInfo.firstName : ""}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">2. Surname</label>
                    <div className="col-sm-10">
                    <input 
                     type="text" 
                     className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0" value={regInfo ? regInfo.lastName : ""}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">3. Sex</label>
                    <div className="col-sm-10">
                    <input 
                     type="text" 
                     className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0" value={regInfo ? regInfo.gender : ""}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">4. Address</label>
                    <div className="col-sm-10">
                    <input 
                     type="text" 
                     className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0" value={regInfo ? regInfo.address : ""}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">5. Polling Station</label>
                    <div className="col-sm-10">
                    <input 
                     type="text" 
                     className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0" value={regInfo ? regInfo.station : ""}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">6. Date</label>
                    <div className="col-sm-10">
                    <input 
                     type="text" 
                     className="form-control 
                     formInput border-top-0 border-end-0 border-start-0 rounded-0" value={date}/>
                    </div>
                </div>

                </form>
           </div>
        </div>
      </div> 
      </div>
      
    </div>
  );
}

export default VotingCard;
