import React from 'react'
import FirstComponent from './componente/FirstComponent'
import './App.css'
import SecondComponent from './componente/SecondComponent'
import ThirdComponent from './componente/ThirdComponent'

const App = () => {
  return (
    <div>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  )
}

export default App;