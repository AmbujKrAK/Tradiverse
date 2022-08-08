

import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='booking'>
        <div>
            <h3 className='heading'>Search Flights</h3> 
        </div>
        <div className='bookingBox'>
        <form className='bookingDetails'>
            <input type="text" name="" id=""  placeholder='From' />
            <button className='change'>Cross</button>
            <input type="text" name="" id="" placeholder='To'  />
            <input type="date" />
            <input type="submit" className='btn' />
            
        </form>
        </div>
    </div>
  )
}

export default Home