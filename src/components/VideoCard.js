import React from 'react'

const VideoCard = ({info}) => {

    if (!info || !info.snippet) {
        // Handle the case where 'info' or 'info.snippet' is undefined
        return null; // or show a loading state or an error message
      }
    console.log(info);
    const{snippet,statistics}=info;
    console.log(snippet);
    const {channelTitle, thumbnails, title} = snippet;
    
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt='video' src={thumbnails.medium.url}/>
       <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}views</li>
       </ul>
    </div>
  )
}

export default VideoCard
