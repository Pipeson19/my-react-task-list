import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    // Cargar las tareas desde el localStorage al iniciar la aplicación
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    // Guardar las tareas actualizadas en el localStorage cada vez que cambie el estado de las tareas
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Mostrar las tareas en la consola
    console.log('Tareas almacenadas en localStorage:', tasks);
  }, [tasks]);

  const addTask = () => {
    if (newTaskName.trim() !== '') {
      const newTask = {
        name: newTaskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskToggle(index)}
          />
          <span>{task.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
