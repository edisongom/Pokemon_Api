import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const Details = () => {
  const navigate = useNavigate()

  const [id, setId] = useState(null)
  const [poke, setPoke] = useState(null)
  
  const handleClick = () => {
    if (id) {
      navigate(`/pokemon/${id}`)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar un pokémon primero!',
        
      })
    }
  }


  useEffect(() => {
    const details = async () => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/?limit=1500`
            );
            setPoke(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    details();
}, []);


  return (
    <div className='select-container'>
      <h1>Seleccciona un Pokemon</h1>
      <select name="pokemons" id="pokemons" onChange={(e) => setId(e.target.value)}>
        <option value=""> Pokemones</option>
        {poke?.results?.map((pokemon, i) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
        
      </select>
      <button id='details-button' onClick={handleClick}>
          Ver detalles
      </button>
    </div>
  )
}

export default Details