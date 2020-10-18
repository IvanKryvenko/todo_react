import React, { useState } from 'react';

let Task = (props) => {

    let [isComplete, onComplete] = useState(props.state);

    return (
        <div id={props.id} className="task" style={!isComplete ? {backgroundColor: '#FFB079'} : {backgroundColor: '#D9FE85'}}>
            <p>{props.text}</p>
            <button className="task-button" onClick={() => onComplete(!isComplete)}>Complete</button>
            <button className="task-button">Delete</button>
        </div>
    )
}

export default Task;