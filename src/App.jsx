import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import TaskList from './components/TaskList';
import Home from './components/Home';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';
import Menu from './components/Menu';

const App = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskNameError, setTaskNameError] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (taskName.length < 3) {
      setTaskNameError('Task name must have at least 3 characters');
    } else {
      // Aquí puedes guardar la tarea en tu lógica de aplicación
      console.log('Task name:', taskName);
      console.log('Task description:', taskDescription);

      // Reiniciar los campos del formulario después de guardar la tarea
      setTaskName('');
      setTaskDescription('');
      setTaskNameError('');
    }
  };

  return (
    <ChakraProvider>
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tareas" component={Tareas} />
            <Route path="/sobre-nosotros" component={SobreNosotros} />
          </Switch>
        </div>
        <div>
          <h1>My App</h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label>
                Task Name
                <input
                  type="text"
                  value={taskName}
                  onChange={handleTaskNameChange}
                />
              </label>
              {taskNameError && (
                <span className="error" role="alert">
                  {taskNameError}
                </span>
              )}
            </div>

            <div>
              <label>
                Task Description
                <textarea
                  value={taskDescription}
                  onChange={handleTaskDescriptionChange}
                />
              </label>
            </div>

            <button type="submit">Save Task</button>
          </form>

          <TaskList />
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
