import React, { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEOES_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const Videocontainer = () => {
 
    const[videos,setVideos]=useState([]);
    useEffect(()=>{
    getVideoes()
    },[]);

    const getVideoes =async()=>{
        const data=await fetch(YOUTUBE_VIDEOES_API);
        const json=await data.json();
        
        setVideos(json.items)
    }
  return (
    <div className='flex flex-wrap'>
        {videos.map((video)=>
       <Link to={'/watch?v=' + video.id}> <VideoCard key={video.id} info={video}/></Link>
        )}
      
    </div>
  )
}

export default Videocontainer
