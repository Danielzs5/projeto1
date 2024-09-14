import React from 'react'

// Definindo o componente funcional chamado "Events"
const Events = () => {

  // Função que exibe um alerta com a mensagem "Testando"
  const callNames = () => {
    alert("Testando");
  }

  // O componente retorna um JSX com dois botões que disparam eventos quando clicados
  return (
    <div>
      {/* Botão que, ao ser clicado, exibe um alerta com a mensagem "Os nomes estão em ordem alfabética!" */}
      <button onClick={() => alert("Os nomes estão em ordem alfabética!")}>
        Lista
      </button>
    
      {/* Outro botão que chama a função "callNames" ao ser clicado, disparando um alerta com a mensagem "Testando" */}
      <div>
        <button onClick={callNames}> Teste</button>
      </div>
        
    </div>
  )
}

// Exportando o componente para ser utilizado em outras partes do projeto
export default Events
