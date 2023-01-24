import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar } from '@mui/material';
import "../../css/partyDetails.css"

function PartyDetails() {

    const handleImageAsFile = () => {

    }
  return (
    <div className='partyRegBody '>
        <div className='partyRegContent m-4'>
            <p >Register A Party Here</p>
            <p>Register your new party by filling in the following details</p>

            <form>
                <div className="mb-3">
                    <label htmlFor="partyName" className="form-label">Party Name</label>
                    <input type="text" className="form-control" id="partyName" name='partyName' aria-describedby="text" placeholder='Enter your name'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="slogan" className="form-label">Slogan</label>
                    <input type="text" className="form-control" id="slogan" name='slogan' aria-describedby="text" placeholder='Type your slogan'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Physical Address</label>
                    <input type="text" className="form-control" id="address" name='address' aria-describedby="emailHelp" placeholder='Type your physical address'/>
                </div>
                </form>

            {/* party profile pic */}
            <p>Party Profile</p>
            <div className='partyProfile'>
                <Avatar />
                <label htmlFor="icon-button-file">
                    <input accept="image/*"
                    className='mt-2'
                    id="icon-button-file"
                    type="file"
                    onChange={handleImageAsFile}
                />
                </label>
                
                {/* <a href="#" className="link-primary mt-2 mx-4">Click to Add Picture</a> */}
            </div>
        </div>
    </div>
  )
}

export default PartyDetails