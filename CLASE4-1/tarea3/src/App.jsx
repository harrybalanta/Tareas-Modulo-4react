import React, { useState, useEffect } from 'react';
import './App.css'
import CharacterCard from './components/CharacterCard/CharacterCard'


function App() {

  const [nombre, setName] = useState("");
 


  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data,"data");
        setName(data.name)
                
      }).catch((error,) => {
        console.log(error,"error");
      })
      
  }, [])


  return (
    <div>
      <CharacterCard name={nombre}/>
    </div>
  )
}

export default App
