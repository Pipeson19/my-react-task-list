import React from 'react';
import useTaskManager from './components/useTaskManager';
import TaskList from './components/TaskList';

const App = () => {
  const { tasks, addTask, removeTask } = useTaskManager();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const taskName = event.target.elements.taskName.value;
    const taskDescription = event.target.elements.taskDescription.value;

    // Crear una nueva tarea
    const newTask = {
      id: Date.now(), // Puedes generar el ID de la tarea de forma única
      name: taskName,
      description: taskDescription,
    };

    // Agregar la tarea usando el hook
    addTask(newTask);

    // Reiniciar los campos del formulario
    event.target.reset();
  };

  return (
    <div>
      <h1>My App</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Task Name
            <input type="text" name="taskName" />
          </label>
        </div>

        <div>
          <label>
            Task Description
            <textarea name="taskDescription" />
          </label>
        </div>

        <button type="submit">Save Task</button>
      </form>

      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
