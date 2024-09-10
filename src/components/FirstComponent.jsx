import React from 'react'

const FirstComponent = () => {
const nome = "Daniel Francisco";
const sobrenome = "E. de Sousa";
const matricula = "2324290089";
const professor = "Felipe Batista";
const disciplina = "Construção de FrontEnd"

  return (
    <div> <h1> Bom dia!</h1>
        
        <h3>Meu nome é {nome} e sobrenome {sobrenome}, com matrícula {matricula} <br />
        Professor: {professor} <br />
        Disciplina: {disciplina} 
        </h3>
    </div>
  )
}

export default FirstComponent