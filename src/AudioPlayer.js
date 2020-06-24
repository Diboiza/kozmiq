import React from 'react';

const AudioPlayer = (props)=>{
    return(
    <div >
        <audio src={props.stream_url} download={props.download_url} controls/>
    </div>
    )
}

export default AudioPlayer;