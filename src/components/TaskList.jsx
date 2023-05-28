import React from 'react';
import useTaskList from './useTaskList';
import Task from './Task';

const TaskList = () => {
  const {
    tasks,
    newTaskName,
    setNewTaskName,
    createTask,
    deleteTask,
    updateTask,
  } = useTaskList();

  const handleTaskToggle = (index) => {
    const updatedTask = { ...tasks[index] };
    updatedTask.completed = !updatedTask.completed;
    updateTask(index, updatedTask);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={createTask}>Add Task</button>

      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => deleteTask(task.id)}
          onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
          onToggle={() => handleTaskToggle(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
