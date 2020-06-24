import React from 'react';
import AudioPlayer from './AudioPlayer';

const imgSize ={
    width: "200px",
    height: "200px"
}

const Card = (props) =>{
    return(
        <div className='tc bg-transparent dib br3 pa3 ma2 grow bw2 shadow-5'>
           <img src={props.artwork_url} alt='robots' style={imgSize}/>
           <div>
               <h4>{props.title}</h4>
               <AudioPlayer stream_url={props.stream_url}/>
               <a className="br4 b--transparent link white-70 hover-white no-underline" href={props.download_url} download={props.download_url}>Download</a>
           </div> 
        </div>
    );
}

export default Card;