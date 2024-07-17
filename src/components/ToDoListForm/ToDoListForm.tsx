import { Task } from '../../types';
import { useDispatch } from 'react-redux';
import {
  AddNewTask,
  fetchToDoList,
} from '../../containers/ToDoList/toDoListSlice';
import React from 'react';

const ToDoListForm = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = React.useState<Task>({
    task: '',
    done: false,
  });

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await dispatch(AddNewTask(newTask));
    await dispatch(fetchToDoList());

    setNewTask({
      task: '',
    });
  };

  const changeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h3 className="mt-4 mb-3">Add Task</h3>
      <div className="form-group mb-3 text-start fs-4">
        <div className="d-flex justify-content-center">
          <input
            type="text"
            name="task"
            id="task"
            required
            className="form-control w-50"
            onChange={changeUser}
            value={newTask.task}
          />

          <button type="submit" className="btn btn-success ms-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ToDoListForm;
