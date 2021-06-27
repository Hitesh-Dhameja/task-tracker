import EachTask from "./EachTask"

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {

    return (

        <div>
            {tasks.map((task) => (<EachTask key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />))}
        </div>
    )
}

export default Tasks
