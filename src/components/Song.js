import React from 'react';


const Song = ({song, index}) => {

    return(
        <div>
        <li id="position"> {index +1} </li>
        <li> {song["im:name"].label} - {song["im:artist"].label}</li>
        </div>
    )
  
}

export default Song;