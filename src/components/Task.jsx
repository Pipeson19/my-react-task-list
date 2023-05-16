import React, { useState } from 'react';

const Task = ({ task }) => {
  const [taskName, setTaskName] = useState(task.name);

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
      />
      <p>{taskName}</p>
      {/* Resto del contenido del componente */}
    </div>
  );
};

export default Task;