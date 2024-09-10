import React from 'react'
import FirstComponent from './components/FirstComponent'
import './App.css'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

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