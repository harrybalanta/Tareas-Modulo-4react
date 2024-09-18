import { useState } from 'react'
import './App.css'
import FormComponent from './form/formComponent'


function App() {
  const [user, setUser] = useState
  return (
    <div>
      <FormComponent setUser={setUser}/>
      <HomeComponets/>
    </div>
  )
}

export default App
