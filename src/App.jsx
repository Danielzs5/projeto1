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
      <FifthComponent></FifthComponent>
      <FourthComponent></FourthComponent>
    </div>
  )
}

export default App;