import React, { useState } from 'react';
import '../styles/App.css';
import TaskForm from './TaskForm';
import Task from './Task.component';


function BodyOfList(props) {

    const [taskArray, setTask] = useState([]);

    let onArrayChange = (task) => {
        setTask([task, ...taskArray]);
    }

    let onTaskDelete = (id) => {
        console.log(id);
        let newArray = taskArray.filter((item) => item.id !== id);
        setTask(newArray);
    }

    let onTaskEdit = (id, text) => {
        let arrayCopy = taskArray;
        let editedTaskIndex = arrayCopy.findIndex(item => item.id === id);
        arrayCopy[editedTaskIndex].text = text;
        setTask(arrayCopy);
        // editedTask.text = text;
    }

    let onComplite = (id) => {
        let arrayCopy = taskArray;
        let complitedTaskIndex = arrayCopy.findIndex(item => item.id === id);
        arrayCopy[complitedTaskIndex].isComplete = !arrayCopy[complitedTaskIndex].isComplete;
        setTask(arrayCopy);
    }


    let taskList = taskArray.map((element) => 
        <Task text={element.text} id={element.id} key={element.id} state={element.isComplete} onDelete={onTaskDelete} onEdit={onTaskEdit} complete={onComplite} />
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
                    <button>Completed Tasks</button>
                    <button>All Tasks</button>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-2">

                </div>
            </div>
        </content>
    );
}

export default BodyOfList;