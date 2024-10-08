import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

          <div className="flex mb-4">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-lg flex-1"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
            />
            <button
              onClick={addTask}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add
            </button>
          </div>

          <ul>
            {tasks.length === 0 ? (
              <li className="text-gray-500">No tasks added yet</li>
            ) : (
              tasks.map((task, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{task}</span>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 w-full">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Developed by Hetvi Gohil- 202203103510210.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
