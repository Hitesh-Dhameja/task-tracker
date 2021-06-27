import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setaddTask] = useState(false)
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
      }
    ]
  );

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    console.log(setTask([...tasks, newTask]))
  }

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="App">
      <Header onAdd={() => setaddTask(!showAddTask)} />
      {showAddTask && <AddTask addTask={addTask} showAdd={showAddTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />) : ('No Tasks to show')}

    </div>
  );
}

export default App;
