import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {toggleMenu} from '../utils/appSlice';
import { YOUTUBE_SUGGETIONS_API } from '../utils/constants';
const Head = () => {

  const[searchQuery,setSearchQuery]=useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);

  useEffect(()=>{
   const timer= setTimeout(()=>searchSuggetions(),200);
 
   return ()=>{
    clearTimeout(timer);
   };
  },[searchQuery]);

  const searchSuggetions=async()=>{
   const data=await fetch(YOUTUBE_SUGGETIONS_API+searchQuery);
   const json=await data.json();
   setSuggestions(json[1]);
  //  console.log(json);
  }
   const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
         dispatch(toggleMenu());
    };
  return (
    <div className='grid grid-flow-col-dense p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=> toggleMenuHandler()}
          alt='menu' className='h-8 cursor-pointer' src='https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180' />
       <a href='/a'> <img className='h-8 mx-4'    alt='logo' src='https://1000logos.net/wp-content/uploads/2017/05/New-YouTube-logo.jpg'/> </a>
      </div>

      <div className='col-span-10 px-11'>
        <div>
      <input className='px-5 w-[90%] border border-gray-400 p-2 rounded-l-full'    type='text' 
       value={searchQuery}
       onChange={(e)=>setSearchQuery(e.target.value)}
       onFocus={() => setShowSuggestions(true)}
       onBlur={() => setShowSuggestions(false)}
       />
      <button className='border border-gray-400 p-2 rounded-r-full'
     >search</button>
      </div>
      {showSuggestions && (
     <div className='fixed bg-white py-2 px-2 w- shadow-lg rounded-lg border border-gray-100'>
     <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                   {s}
                </li>
              ))}
            </ul>
     </div>
      )}
      </div>
      <div className='col-span-2'>
        <img className='h-8' alt='user' src='https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png'/>
      </div>
    </div>
  )
}

export default Head
