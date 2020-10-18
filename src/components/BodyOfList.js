import React, { useState } from 'react';
import '../styles/App.css';
import TaskForm from './TaskForm';
import Task from './Task.component';


function BodyOfList(props) {

    const [taskArray, setTask] = useState([
        {
            text: "Some task",
            isComplete: false,
            id: 2341
        },
        {
            text: "Some task2",
            isComplete: false,
            id: 2343
        }
    ]);

    let onArrayChange = (task) => {
        setTask([...taskArray, task]);
    }

    let taskList = taskArray.map((element) => 
        <Task text={element.text} id={element.id} key={element.id} state={element.isComplete} />
    );

    return (
        <content>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-2">

                </div>
                <div className="list-body col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                    <TaskForm 
                    array={taskArray}
                    onAddingTask={onArrayChange} />
                    {taskList}
                </div>
                <div className="col-xl-3 col-lg-3 col-md-2">

                </div>
            </div>
        </content>
    );
}

export default BodyOfList;