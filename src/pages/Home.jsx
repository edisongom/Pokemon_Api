import React from 'react'
import pikachu from '../assets/img/pikachu.png'

const Home = () => {
  return (
    <div className='home'>
        <h1>Bienvenido Maestro Pokemón</h1>

        <img src={pikachu} alt="" id='pikachuHome'/>

    </div>
  )
}

export default Home