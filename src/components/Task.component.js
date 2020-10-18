import React, { useState } from 'react';

let Task = (props) => {

    let [isComplete, onComplete] = useState(props.state);

    return (
        <div id={props.id} className="task">
            <p>{props.text}</p>
            <button onClick={() => onComplete(!isComplete)}>Complete</button>
        </div>
    )
}

export default Task;