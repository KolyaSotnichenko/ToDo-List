import React from 'react';

const Task = ({task, ...props}) =>{

    const ActionBtn = () => <div>{!task.done ? <p onClick={props.doneTask}>✓</p> : <p onClick={props.deleteTask}>×</p>}</div>


    return(
        <div className="task">
            <p>{task.title}</p>
            <ActionBtn />
        </div>
    )
}

export default Task