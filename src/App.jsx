import React from 'react'
import FirstComponent from './components/FirstComponent'
import './App.css'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'
import FifthComponent from './components/FifthComponent'

const App = () => {
  return (
    <div>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
    </div>
  )
}

export default App;