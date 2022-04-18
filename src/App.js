import './App.css';

import TaskList from './Components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/FilterTask';
import AddTasks from './Components/AddTasks';
function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTasks/>
      <Filter />
      <TaskList/>
    </div>
  );
}

export default App;
      