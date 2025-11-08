import React, {useState} from "react";

function Entry(props){

    const [newTask, setNewTask] = useState("");

    return (
        <>

            <input id="entry" onChange={(input) => setNewTask(input.target.value)} value={newTask} type="text" placeholder={props.placeholder} />
            <button onClick={() => props.function(newTask)}>
                {props.label}
            </button>

        </>
    );
}

export default Entry