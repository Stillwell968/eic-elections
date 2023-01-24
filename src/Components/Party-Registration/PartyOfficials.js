import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function PartyOfficials() {
  return (
    <div className='partyRegBody '>
        <div className='partyRegContent m-4'>
            <p >Register A Party Here</p>
            <p>Register your new party by filling in the following details</p>

            <form>
                <div className="mb-3">
                    <label htmlFor="partyName" className="form-label">Official Name</label>
                    <input type="text" className="form-control" id="partyName" name='partyName' aria-describedby="text" placeholder='Enter Official name'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="slogan" className="form-label">ID Number</label>
                    <input type="number" className="form-control" id="slogan" name='slogan' aria-describedby="text" placeholder='Type official ID'/>
                </div>

                <div className='mb-3'>
                <label htmlFor="position" className="form-label">Select Position Official</label>
                <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" id='position' name='position'>
                    <option value="Chobe">Chobe</option>
                    <option value="Main East">Main East</option>
                    <option value="Francistown South">Francistown South</option>
                    <option value="Francistown West">Francistown West</option>
                    </select>
                </div>
                </form>

           
        </div>
    </div>
  )
}

export default PartyOfficials