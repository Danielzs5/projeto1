import React from 'react'

const Events = () => {
   
const callNames = () => {alert("Testando")}


  return (
    <div>
    <button onClick={() => alert("Os nomes estão em ordem alfabética!")}>
        Lista
    </button>
    
        <div><button onClick = {callNames}> Teste</button></div>
        
    </div>
  )
}

export default Events