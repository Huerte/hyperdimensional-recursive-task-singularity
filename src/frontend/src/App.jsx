import Entry from "./components/Entry.jsx"
import React, {useState, useEffect, useRef} from "react";

function App() {

  const [message, setMessage] = useState([]);
  const fetched = useRef(false);
  let tasks = [...message.map((item) => item.msg)];

  useEffect(() => {

    if (fetched.current){
      return;
    }

    fetched.current = true;

    fetch("http://127.0.0.1:8000/")
    .then(response => {
      
      if (!response.ok){
        throw new Error("FAILED TO GET DATA");
      }
      return response.json();
    })
    .then(value => setMessage(value))
    .catch(error => console.error(error))
  }, []);

  function deleteItem(index){

    fetch(`http://127.0.0.1:8000/delete/${index}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok){
          throw new Error("Failed to delete an item.");
        }

        return response.json();
      })
      .then(() => {
        setMessage((prev) => prev.filter((_, i) => i !== index));
      })
      .catch(error => console.error(error));

  };

  function addTask(msg){
    fetch(`http://127.0.0.1:8000/add?msg=${encodeURIComponent(msg)}`, {
      method: "PUT",
    })
      .then(response => {
        if (!response.ok){
          throw new Error("Failed to add new task!");
        }

        return response.json().msg;
      })
      .then(data => {
        setMessage(prev => [...prev, { id: prev.length + 1, msg }]);
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      <div className="container">
        <div className="entry-container">
          <h1>TODO List ✅</h1>

          <Entry placeholder="Enter task" function={addTask} label="Add task"/>
        </div>
        
        <div className="tasks-container">
          {tasks.length > 0 ? (
            <div className="task-container">
              {tasks.map((name, index) => (
                <div className="task-list" key={index}>
                  <label>{name}</label>
                  <button id="deleteBtn" onClick={() => deleteItem(index)}>x</button>
                </div>
              ))}
            </div>
          ) : (
            <label>Empty List</label>
          )}
        </div>
      </div>
    </>
  )
}

export default App
