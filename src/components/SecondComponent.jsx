import React from 'react'

const SecondComponent = () => {
    const alunos = [
        { nome: 'Davy Maciel', matricula: '3548' },
        { nome: 'David Martins', matricula: '5465' },
        { nome: 'Thiago Silva', matricula: '5462' },
        { nome: 'Daniel Francisco', matricula: '2498' },
        { nome: 'José da Silva', matricula: '5615' }
    ]

    const ordena = alunos.sort((a, b) => a.nome.localeCompare(b.nome));

    console.log(ordena);

    return (
        <div>
            <h1>Lista de alunos</h1>
            <ol>{alunos.map((aluno) => (
                <li key={aluno.matricula}>
                    Nome: {aluno.nome}, Matrícula: {aluno.matricula}
                </li>
            )
            )
            }</ol>
        </div>
    )
}

export default SecondComponent