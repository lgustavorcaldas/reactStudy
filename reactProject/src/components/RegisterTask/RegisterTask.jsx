import React from 'react'
import { RegisterTaskStyle } from "./style.js"

export default function RegisterTask(props) {
  return (
    <>
        <RegisterTaskStyle className='inputsToDo'>
            <h2>Cadastrar uma Tarefa</h2>
            <div className='traco'></div>
            <form onSubmit={ props.handleSubmit } id="newFormToDo">
                <div className='inputBoxes'>
                    <div>
                        <label>Sua tarefa</label>
                        <input onChange={ ( e ) => props.setNewFormToDo( { ...props.newFormToDo, yourTask: e.target.value } ) } value={ props.newFormToDo.yourTask } type="text" name="yourTask" id="yourTask" />
                    </div>
                    <div>
                        <label>Prazo</label>
                        <input onChange={ ( e ) => props.setNewFormToDo( { ...props.newFormToDo, date: e.target.value } ) } value={ props.newFormToDo.date } type="datetime-local" name="date" id="date" />
                    </div>
                    <div>
                        <label>Selecione o status</label>
                        <select onChange={ ( e ) => props.setNewFormToDo( { ...props.newFormToDo, state: e.target.value } ) } value={  props.newFormToDo.state } name="" id="" form='newFormToDo'>
                            <option value="none"></option>
                            <option value="toDo">A Fazer</option>
                            <option value="doing">Fazendo</option>
                            <option value="done">Finalizado</option>
                        </select>
                    </div>
                </div>
                <input id='subimit' type="submit" value="Inserir Tarefas" />
            </form>
        </RegisterTaskStyle>
    </>
  )
}