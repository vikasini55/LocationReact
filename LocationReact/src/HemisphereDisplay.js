import React from "react";
import north from './north.jfif';
import south from './south.jfif';

// const HemisphereDisplay= (latitude) =>
// {
//     let image={
//         objectFit : 'contain',
//         width:'50%',
//         height:'50%'
//     }
//     const hemi=latitude>0? 'NorthernHemispehre': 'Southern Hemisphere';
//     const picture = latitude>0?north:south;
//     return(
//         <div style={{textAlign:'center'}}>
//             <img style={image} src={picture} alt=""/>
//             <h3>'latitude is in':{hemi}</h3>
//             </div>
       
            
//     )
   
// }
const HemisphereDisplay= (longitude) =>
{
    console.log(longitude)
   
    let image={
        objectFit : 'contain',
        width:'50%',
        height:'50%'
    }
    
    const hemi=longitude<0?  'Southern Hemisphere':'Northern Hemisphere';
    const picture = longitude<0?south:north;

    return(
        <div style={{textAlign:'center'}}>
            <img style={image} src={picture} alt=""/>
            <h3>{hemi}</h3>
            
            </div>
       
            
    )
   
}
export default HemisphereDisplay;