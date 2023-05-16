import React from 'react';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    { id: 1, name: 'Mejorar en programación', completed: false },
    { id: 2, name: 'Mejorar tocando la guitarra', completed: true },
    { id: 3, name: 'encontrar un mejor trabajo', completed: false },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
