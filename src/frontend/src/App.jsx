import Button from "./components/Button.jsx"
import List from "./components/List.jsx"
import Entry from "./components/Entry.jsx"


function App() {

  const tasks = [
    "task 1",
    "another task"
  ];

  return (
    <>
      <div className="container">
        <div className="entry-container">
          <h1>TODO List ✅</h1>

          <Entry placeholder="Enter task"/>
          <Button label="Add task"/>
        </div>
        
        <div className="tasks-container">
          <List tasks={tasks}/>
        </div>
      </div>
    </>
  )
}

export default App
