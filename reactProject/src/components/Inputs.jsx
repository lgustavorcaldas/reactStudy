import React, { useState } from 'react'
import PostIt from './PostIt';

const Inputs = () => {
  const [ formTodo, setFormToDo ] = useState( [ {
    yourTask: "Jogo do Corinthians",
    date: "2022-05-18",
    state: "toDo"
  },
  {
    yourTask: "Jogo do Corinthians",
    date: "2022-05-18",
    state: "toDo"
  },
  {
    yourTask: "Jogo do Corinthians",
    date: "2022-05-18",
    state: "doing"
  },
  {
    yourTask: "Jogo do Corinthians",
    date: "2022-05-18",
    state: "done"
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

  function editPostIt( index ) {
    setNewFormToDo( formTodo[ index ] )
    removePostIt( index );
  }

  function removePostIt( index ) {
    let removedPostIt = formTodo.filter( ( postIt, i ) => {
        return i !== index; 
    })
    setFormToDo( removedPostIt )
  }

  return (
    <div>
      <section className='inputsToDo'>
        <h2>Cadastrar uma Tarefa</h2>
        <div>
          <form onSubmit={ handleSubmit } id="newFormToDo">
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
      </section>
      <section className='whiteBoard'>
          <h2>Quadro de Tarefas</h2>
          <div className='toDoList'>
              <div className='DivToDo'>
                <h3>A Fazer</h3>
                { 
                  formTodo.map( ( auxPostIt, index ) => { 
                    if ( auxPostIt.state === "toDo" ) return <PostIt desc={ auxPostIt.yourTask } date={ auxPostIt.date }  removePostIt={ removePostIt } editPostIt={ editPostIt } index={ index } key={ index } /> 
                })}
              </div>
              <div className='DivDoing'>
                  <h3>Fazendo</h3>
                { 
                  formTodo.map( ( auxPostIt, index ) => { 
                    if ( auxPostIt.state === "doing" ) return <PostIt desc={ auxPostIt.yourTask } date={ auxPostIt.date }  removePostIt={ removePostIt } editPostIt={ editPostIt } index={ index } key={ index } /> 
                })}
              </div>
              <div className='DivDone'>
                  <h3>Finalizado</h3>
                { 
                  formTodo.map( ( auxPostIt, index ) => { 
                    if ( auxPostIt.state === "done" ) return <PostIt desc={ auxPostIt.yourTask } date={ auxPostIt.date }  removePostIt={ removePostIt } editPostIt={ editPostIt } index={ index } key={ index } /> 
                })}
              </div>
          </div>
      </section>
    </div>
  )
}

export default Inputs;