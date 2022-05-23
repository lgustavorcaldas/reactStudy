import React, { useState } from 'react'
import PostIt from './PostIt';

export default function Inputs() {
    const [ formTodo, setFormToDo ] = useState( [ {
      yourTask: "Jogo do Corinthians",
      date: "2022-05-18",
      state: "toDo"
    } ] );
    
    const [ newFormToDo, setNewFormToDo ] = useState( { yourTask: "", date: "", state: "" } );

    const handleSubmit = (e) => {
      e.preventDefault();
      const auxFormToDo = formTodo;
      auxFormToDo.push( newFormToDo );

      setFormToDo( auxFormToDo );
      setNewFormToDo( { yourTask: "", date: "", state: "" } );
      console.log(formTodo);
    }
    

  return (
    <div>
        <h2>Cadastrar uma Tarefa</h2>
        <div>
          <form onSubmit={handleSubmit} id="newFormToDo">
            <input onChange={ ( e ) => setNewFormToDo( { ...newFormToDo, yourTask: e.target.value } ) } value={ newFormToDo.yourTask } type="text" name="yourTask" id="yourTask" placeholder="Sua tarefa" />
            <input onChange={ ( e ) => setNewFormToDo( { ...newFormToDo, date: e.target.value } ) } value={ newFormToDo.date } type="date" name="date" id="date" />
            <select onChange={ ( e ) => setNewFormToDo( { ...newFormToDo, state: e.target.value } ) } value={  newFormToDo.state } name="" id="" form='newFormToDo'>
                <option value="none">--Escolha--</option>
                <option value="toDo">A Fazer</option>
                <option value="doing">Fazendo</option>
                <option value="done">Finalizado</option>
            </select>
            <input type="submit" value="Inserir Tarefas" />
          </form>
        </div>
      <section className='toDoList'>
          <h2>Quadro de Tarefas</h2>
          <div>
              <div className='DivToDo'>
                  <h3>A Fazer</h3>
              {
                <section className='teste'>
                  {
                    formTodo.map( ( auxPostIt, index ) => {
                      console.log( auxPostIt );
                        <PostIt desc={ "auxPostIt.yourTask" } date={ "auxPostIt.date" }  index={ index } key={ index } />
                    })
                  }
                </section>
              }
              </div>
              <div className='DivDoing'>
                  <h3>Fazendo</h3>
              </div>
              <div className='DivDone'>
                  <h3>Finalizado</h3>
              </div>
          </div>
      </section>
    </div>
  )
}
