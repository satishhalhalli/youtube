import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

    //this is a early return
    if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
        
         <ul>
        <li> <Link to="/"> Home </Link></li>
        <li>Shorts</li>
        <li>Videoes</li>
        <li>Live</li>
      </ul>
    

        <h1 className='font-bold'>Subscription</h1>
      <ul>
        <li>MUSIC</li>
        <li>SPORTS</li>
        <li>CRICKET</li>
        <li>NEWS</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch-later</h1>
      <ul>
        <li>MUSIC</li>
        <li>SPORTS</li>
        <li>CRICKET</li>
        <li>NEWS</li>
      </ul>
    </div>
  )
}

export default Sidebar
