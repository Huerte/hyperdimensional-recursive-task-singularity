function List(props){
  const tasks = props.tasks;

  return (
    <>
      {tasks.length > 0 ? (
        <div className="task-container">
          {tasks.map((name, index) => (
            <div className="task-list" key={index}>
              <label>{name}</label>
              <button id="deleteBtn">x</button>
            </div>
          ))}
        </div>
      ) : (
        <label>Empty List</label>
      )}
    </>
  );
}

export default List;
