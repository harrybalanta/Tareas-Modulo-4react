import React from 'react';
import Imagen from './components/Imagen';
import Titulo from './components/Titulo';
import Details from './components/Details';

const App = () => {
  return (
    <div className='styles'>
      <Titulo Texto="Alexander Abreu"></Titulo>
      <Imagen Ruta="./alexander.jfif"></Imagen>
      <Details Genero="Salsa Cubana" Estado="Vivo"></Details>
      
    </div>
  );
}

export default App;
