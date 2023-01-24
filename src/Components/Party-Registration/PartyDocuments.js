import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function PartyDocuments() {
  return (
    <div className='partyDocuments m-4'>
        <p>Upload documents here</p>
        <p>Register your new party by filling in the following details</p>

        <p className='mt-4'>1. Letter of intent</p>
        <input accept='file' type={'file'} className="mx-3"/>

        <p className='mt-4'>2. Minutes of the formation</p>
        <input accept='file' type={'file'} className="mx-3"/>

        <p className='mt-4'>3. List of signatures and ID number of attendees</p>
        <input accept='file' type={'file'} className="mx-3"/>

        <h4 className='mt-4'>Non-Citezens</h4>
        <p className='mt-4'>4.Certified copies of resident permits</p>
        <input accept='file' type={'file'} className="mx-3"/>

        <p className='mt-4'>5. Certified Work Permit</p>
        <input accept='file' type={'file'} className="mx-3"/> 

        <p className='mt-4'>6. Copies of both sides of the passport</p>
        <input accept='file' type={'file'} className="mx-3"/>
    </div>
  )
}

export default PartyDocuments