import React from 'react';
// Importando o componente "FirstComponent" de um arquivo externo
import FirstComponent from './FirstComponent';
// Importando o componente "SecondComponent" de um arquivo externo
import SecondComponent from './SecondComponent';

// Definindo o componente funcional chamado "ThirdComponent"
const ThirdComponent = () => {
  // O componente retorna um JSX que renderiza os componentes "FirstComponent" e "SecondComponent"
  return (
    <div>
      {/* Renderizando o "FirstComponent" */}
      <FirstComponent />
      {/* Renderizando o "SecondComponent" */}
      <SecondComponent />
    </div>
  );
};

// Exportando o "ThirdComponent" para ser utilizado em outras partes do projeto
export default ThirdComponent;
