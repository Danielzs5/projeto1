import React from 'react'

// Definindo o componente funcional chamado "FirstComponent"
const FirstComponent = () => {
  // Definindo algumas variáveis dentro do componente
  const nome = "Daniel Francisco";
  const sobrenome = "E. de Sousa";
  const matricula = "2324290089";
  const professor = "Felipe Batista";
  const disciplina = "Construção de FrontEnd";

  // O componente retorna um JSX que é renderizado na tela
  return (
    <div> 
      {/* Título da página */}
      <h1> Bom dia!</h1>
        
      {/* Texto com informações pessoais e da disciplina */}
      <h3>
        Meu nome é {nome} e sobrenome {sobrenome}, com matrícula {matricula} <br />
        Professor: {professor} <br />
        Disciplina: {disciplina} 
      </h3>
    </div>
  )
}

// Exportando o componente para ser utilizado em outras partes do projeto
export default FirstComponent
