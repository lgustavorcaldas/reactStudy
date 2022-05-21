import React, { useState } from 'react';
import Task from './Task';

function TodoList() {
    const [ newTask, setNewTask ] = useState("");
    const [ tasks, setTasks ] = useState( [ "Aula React", "Projeto Estágio", "Reunião Nuri" ] );

    function addTask( task, index ) {
        let allTasks = tasks;
        allTasks.push( task );

        setTasks( allTasks );
        setNewTask("");
    }

    function removeTask( index ) {
        let removedTask = tasks.filter( ( task, i ) => {
            return i != index; 
        })
        setTasks( removedTask )
    }

    function editTask( index ) {
        setNewTask( tasks[ index ] )
        removeTask( index );
    }

    return (
        <section className="container">
            <input value={ newTask } onInput={ ( e ) => setNewTask( e.target.value ) } />
            <button type="submit" onClick={ () => addTask( newTask ) }>Add</button>
            {
                <section className="task-list">
                    {
                        tasks.map( ( task, index ) => (
                            <Task task={ task } index={ index } removeTask={ removeTask } editTask={ editTask } key={ index } />
                        ))
                    }
                </section>
            }
        </section>
    );
}

export default TodoList;