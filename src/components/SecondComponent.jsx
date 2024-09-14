import React from 'react'

// Definindo o componente funcional chamado "SecondComponent"
const SecondComponent = () => {
    // Criando um array de objetos "alunos", onde cada objeto contém um nome e uma matrícula
    const alunos = [
        { nome: 'Davy Maciel', matricula: '3548' },
        { nome: 'David Martins', matricula: '5465' },
        { nome: 'Thiago Silva', matricula: '5462' },
        { nome: 'Daniel Francisco', matricula: '2498' },
        { nome: 'José da Silva', matricula: '5615' }
    ]

    // Ordenando o array de alunos pelo nome em ordem alfabética
    const ordena = alunos.sort((a, b) => a.nome.localeCompare(b.nome));

    // Exibindo a lista ordenada no console
    console.log(ordena);

    // O componente retorna um JSX que renderiza a lista de alunos na tela
    return (
        <div>
            {/* Título da lista de alunos */}
            <h1>Lista de alunos</h1>
            
            {/* Renderizando a lista ordenada em um elemento <ol> */}
            <ol>
                {alunos.map((aluno) => (
                    // Para cada aluno, cria um <li> que contém nome e matrícula
                    <li key={aluno.matricula}>
                        Nome: {aluno.nome}, Matrícula: {aluno.matricula}
                    </li>
                ))}
            </ol>
        </div>
    )
}

// Exportando o componente para ser utilizado em outras partes do projeto
export default SecondComponent
