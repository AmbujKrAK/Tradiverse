

import React from 'react';
import "./FlightsDetails.css"

function FlightsDetails() {
  return (
    <div className='flightsDetails'>
        <div className='planeCodename'>
            Plane name code
        </div>
        <div className='planeName'>
        <h5>Spice Jet</h5>
        <div className='Pdeatils'>
            <div>PNQ</div>
            <div>Icone</div>
            <div>BOM</div>
            <div>Amount</div>
            <div><button>Book Now</button></div>
        </div>
        </div>
    </div>
  )
}

export default FlightsDetails