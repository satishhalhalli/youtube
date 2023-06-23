import React from 'react'
import Button from './Button'

const Buttonlist = () => {
    const buttonNames = ['All', 'Gaming', 'Sports', 'Virat', 'Cricket', 'Live', 'Bidar', 'Riding', 'Cooking', 'Coding'];

  return (
    <div className='flex'>
      {/* <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Sports'/>
      <Button name='Virat'/>
      <Button name='Cricket'/>
      <Button name='Live'/>
      <Button name='Bidar'/>
      <Button name='Riding'/>
      
      <Button name='Cooking'/>
      <Button name='Coding'/> */}
      
      {buttonNames.map((name,index)=>(
        <Button key={index} name={name}/>
      ))
      }
      

    </div>
  )
}

export default Buttonlist
