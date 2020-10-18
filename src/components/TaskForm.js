import React, { useState } from 'react';
import '../styles/App.css'

function Task(text) {
    this.text = text;
    this.isComplete = false;
    this.id = Date.now();
}

function TaskForm(props) {

    let [text, setText] = useState(''); 

    function onAddTask(task) {
        props.onAddingTask(task);
    }

    return (
        <div className="form">
            <label>
                <input className="input-task-text" type="text" value={text} onChange={e => setText(e.target.value)} />
            </label>
            <input className="button-add-task" type="submit" value="Add task" onClick={() => onAddTask(new Task(text))} />
        </div>
    );
}

export default TaskForm;