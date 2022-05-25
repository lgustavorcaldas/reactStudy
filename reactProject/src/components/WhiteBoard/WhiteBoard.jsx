import React from 'react'
import PostIt from '../PostIt/PostIt';
import { WhiteBoardStyle } from './style'

export default function WhiteBoard(props) {
  return (
    <>
        <WhiteBoardStyle className='whiteBoard'>
            <h2>Quadro de Tarefas</h2>
            <div className='traco'></div>
            <div className='toDoList'>
                <div className='divToDo'>
                    <div className='h3Box'>
                        <h3>A Fazer</h3>
                    </div>
                    { 
                        props.formTodo.map( ( auxPostIt, index ) => { 
                        if ( auxPostIt.state === "toDo" ) return <PostIt class={"toDoPostId"} desc={ auxPostIt.yourTask } date={ auxPostIt.date }  removePostIt={ props.removePostIt } editPostIt={ props.editPostIt } index={ index } key={ index } /> 
                    })}
                </div>
                <div className='divDoing'>
                    <div className='h3Box'>
                        <h3>Fazendo</h3>
                    </div>
                    { 
                        props.formTodo.map( ( auxPostIt, index ) => { 
                        if ( auxPostIt.state === "doing" ) return <PostIt class={"doingPostId"} desc={ auxPostIt.yourTask } date={ auxPostIt.date }  removePostIt={ props.removePostIt } editPostIt={ props.editPostIt } index={ index } key={ index } /> 
                    })}
                </div>
                <div className='divDone'>
                    <div className='h3Box'>
                        <h3>Finalizado</h3>
                    </div>
                    { 
                        props.formTodo.map( ( auxPostIt, index ) => { 
                        if ( auxPostIt.state === "done" ) return <PostIt class={"donePostId"} desc={ auxPostIt.yourTask } date={ auxPostIt.date }  removePostIt={ props.removePostIt } editPostIt={ props.editPostIt } index={ index } key={ index } /> 
                    })}
                </div>
            </div>
      </WhiteBoardStyle>
    </>
  )
}
