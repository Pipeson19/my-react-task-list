import React from 'react';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    { id: 1, name: 'Task 1', completed: true },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false },
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
