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
        setText('');
    }

    function prvd(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={prvd}>
            <label>
                <input className="input-task-text" type="text" value={text} onChange={e => setText(e.target.value)} />
            </label>
            <input className="button-add-task" type="submit" value="Add task" onClick={() => onAddTask(new Task(text))} />
        </form>
    );
}

export default TaskForm;