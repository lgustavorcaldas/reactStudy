import React from 'react'

export default function ToDoList() {
  return (
    <section className='toDoList'>
        <h2>Quadro de Tarefas</h2>
        <div>
            <div className='DivToDo'>
                <h3>A Fazer</h3>
            </div>
            <div className='DivDoing'>
                <h3>Fazendo</h3>
            </div>
            <div className='DivDone'>
                <h3>Finalizado</h3>
            </div>
        </div>
    </section>
  )
}
