import React from 'react'
import imgHome from './img/imgHome.jpg'
import "./Home.css"

function Home() {

  return (
    <div>
      <img 
        className='imgHome' 
        src={imgHome} 
        alt="imgHome" 
      />
    </div>
  )
}

export default Home