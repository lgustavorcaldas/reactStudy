import React, { useState } from 'react';d 

export default function ToDoList() {
    const [ newPostIt, setNewPostIt ] = useState(["AA"]);
    const [ postIt, setPostIt ] = useState("");

return (
    <div>
        <h2>Cadastrar uma Tarefa</h2>
        <div>
            <form  id="postIting">
                <input type="text" name="yourTask" id="yourTask" placeholder="Sua tarefa" />
                <input type="date" name="term" id="term" placeholder="Sua tarefa" />
                <select name="optionDropDown" form="postIting">
                    <option value="toDo">A Fazer</option>
                    <option value="doing">Fazendo</option>
                    <option value="done">Finalizado</option>
                </select>
                <button type="submit" onClick={ ( e ) => setNewPostIt( JSON.parse(e) ) }>Adicionar Tarefa</button>
            </form>
        </div>
        {newPostIt}
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
    </div>
)
}
