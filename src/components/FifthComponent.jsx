import React, { useState } from 'react';

// Definindo o componente funcional "FocusBlurExample"
const FocusBlurExample = () => {
  // Definindo dois estados: "isFocused" para controlar o foco no campo de texto e "inputValue" para armazenar o valor digitado
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Função que altera o estado "isFocused" para true quando o campo de texto recebe o foco
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Função que altera o estado "isFocused" para false quando o campo de texto perde o foco
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Função que atualiza o estado "inputValue" com o valor digitado no campo de texto
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // O componente retorna um JSX com o campo de input e a exibição de mensagens baseadas no foco e no valor digitado
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Título da página */}
      <h2>Digite</h2>

      {/* Campo de texto que utiliza os eventos de foco, perda de foco e mudança de valor */}
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}  // Evento que detecta quando o input recebe foco
        onBlur={handleBlur}    // Evento que detecta quando o input perde o foco
        onChange={handleChange} // Evento que detecta a mudança de valor no input
        placeholder="Click to type"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray', // Altera a borda do input dependendo do foco
        }}
      />

      {/* Mensagem que muda com base no estado do foco */}
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>Digitando...</p> : <p>Clique para digitar.</p>}
      </div>

      {/* Exibe o valor digitado no input */}
      <p> "{inputValue}"</p>
    </div>
  );
};

export default FocusBlurExample;
