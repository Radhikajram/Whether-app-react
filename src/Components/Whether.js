import React from 'react';

const Whether = props => (
    <div>
    {props.city && props.country && <p> Location : {props.city}, Country:{props.country}</p> }
   {props.temp && <p> Temperature :         {props.temp}  </p>}
   {props.humidity && <p> humidity : {props.humidity}</p>}
   {props.desc && <p> Description: {props.desc} </p>}
   {props.error && <p> {props.error}</p>}
</div>
)
export default Whether;