import React, { useState } from 'react'
import RegisterTask from './RegisterTask/RegisterTask'
import WhiteBoard from './WhiteBoard/WhiteBoard'

const Main = () => {
  const [ formTodo, setFormToDo ] = useState( [ 
    {
      yourTask: "Jogo do Corinthians",
      date: "2022-05-18T09:28",
      state: "toDo"
    },
    {
      yourTask: "Jogo do Corinthians",
      date: "2022-05-18T09:28",
      state: "toDo"
    },
    {
      yourTask: "Jogo do Corinthians",
      date: "2022-05-18T09:28",
      state: "doing"
    },
    {
      yourTask: "Jogo do Corinthians",
      date: "2022-05-18T09:28",
      state: "done"
    }]);

  const [ newFormToDo, setNewFormToDo ] = useState( 
    { 
      yourTask: "", 
      date: "", 
      state: "" 
    });
  
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
      <RegisterTask handleSubmit={ handleSubmit } setNewFormToDo={ setNewFormToDo } newFormToDo={ newFormToDo }  />
      <WhiteBoard formTodo={ formTodo } removePostIt={ removePostIt } editPostIt={ editPostIt } />
    </div>
  )
}

export default Main;