import React, { useState } from 'react'

export default function Inputs() {
    const [ newTask, setNewTask ] = useState("");
    const [ tasks, setTasks ] = useState(["Aula React", "Projeto Estágio", "Reunião Nuri"]);

    

  return (
    <div>
        <h2>Cadastrar uma Tarefa</h2>
        <div>
            <input type="text" name="yourTask" id="yourTask" placeholder="Sua tarefa" />
            <input type="date" name="term" id="term" placeholder="Sua tarefa" />
            <select name="" id="">
                <option value="toDo">A Fazer</option>
                <option value="doing">Fazendo</option>
                <option value="done">Finalizado</option>
            </select>
            <input type="button" value="Inserir Tarefas" />
        </div>
    </div>
  )
}
