import React from 'react'

const Weather = (props) => {
  return (
   <div className="info">
     {
       props.temperature && <p className="info_key">temp: {props.temperature}</p>
     }
       {
       props.city && <p className="info_key">city: {props.city}</p>
     }
       {
       props.country && <p className="info_key">country: {props.country}</p>
     }
       {
       props.humidity && <p className="info_key">humidity: {props.humidity}</p>
     }
   </div>
  )
}

export default Weather