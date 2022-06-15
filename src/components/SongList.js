import React from 'react';
import Song from './Song';



const SongList = ({songs}) => {

    const songsNodes = songs.map((song, index) => {
       return (<Song song={song} key={index} index={index} />
       )
        
      
    })


    return (
        <>
        <ul className = "song-list">
        {songsNodes}
        </ul>
        </>
    )
  
}

export default SongList;