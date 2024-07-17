import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';
import Toolbar from './components/Toolbar/Toolbar';

const App = () => {
  return (
    <>
      <Toolbar />
      <ToDoList />
    </>
  );
};

export default App;
