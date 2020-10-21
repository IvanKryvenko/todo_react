import React, { useState } from 'react';

let Task = (props) => {

    let [isComplete, onComplete] = useState(props.state);
    let [itEditing, onEdit] = useState(false);
    let [text, setText] = useState(props.text);

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
        onComplete(!isComplete);
    }


    if(!itEditing) {
        return (
            <div id={props.id} className="task" style={!isComplete ? {backgroundColor: '#FFB079'} : {backgroundColor: '#D9FE85'}}>
                <p>{text}</p>
                <button className="task-button" onClick={() => complete(props.id)}>Complete</button>
                <button className="task-button" onClick={() => deleteTask(props.id)}>Delete</button>
                <button className="task-button" onClick={() => taskEdit(props.id, text)}>Edit</button>
            </div>  
        )
    } else {
        return (
            <div id={props.id} className="task" style={!isComplete ? {backgroundColor: '#FFB079'} : {backgroundColor: '#D9FE85'}}>
                <input className="input-task-text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button className="task-button" onClick={() => complete(props.id)}>Complete</button>
                <button className="task-button" onClick={() => deleteTask(props.id)}>Delete</button>
                <button className="task-button" onClick={() => taskEdit(props.id, text)}>Done</button>
            </div>
        )
    }  
}

export default Task;