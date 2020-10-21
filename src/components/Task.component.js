import React, { useState } from 'react';

let Task = (props) => {

    let [itEditing, onEdit] = useState(false);
    let [valueOfTask, setValue] = useState(props.text);

    let deleteTask = (id) => {
        props.onDelete(id);
    }

    let sendEditTask = (id, text) => {
        props.onEdit(id, text)
    }

    let taskEdit = (id, text) => {
        onEdit(!itEditing);
        itEditing ? sendEditTask(id, text) : console.log("Done!");
    }

    let complete = (id) => {
        props.complete(id);
    }


    if(!itEditing) {
        return (
            <div id={props.id} className="task" style={!props.state ? {backgroundColor: '#FFB079'} : {backgroundColor: '#D9FE85'}}>
                <p>{props.text}</p>
                <button className="task-button" onClick={() => complete(props.id)}>Complete</button>
                <button className="task-button" onClick={() => deleteTask(props.id)}>Delete</button>
                <button className="task-button" onClick={() => onEdit(!itEditing)}>Edit</button>
            </div>  
        )
    } else {
        return (
            <div id={props.id} className="task" style={!props.state ? {backgroundColor: '#FFB079'} : {backgroundColor: '#D9FE85'}}>
                <input className="input-task-text" type="text" value={valueOfTask} onChange={(e) => setValue(e.target.value)} />
                <button className="task-button" onClick={() => complete(props.id)}>Complete</button>
                <button className="task-button" onClick={() => deleteTask(props.id)}>Delete</button>
                <button className="task-button" onClick={() => taskEdit(props.id, valueOfTask)}>Done</button>
            </div>
        )
    }  
}

export default Task;