import React from 'react';
import { Task } from '../../types';
import { useDispatch } from 'react-redux';
import {
  DeleteTask,
  EditTask,
  fetchToDoList,
} from '../../containers/ToDoList/toDoListSlice';

interface Props {
  task: Task;
}

const ToDoListItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const changeCheckBox = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const updateTask = { ...task };
    updateTask.done = event.target.checked;
    await dispatch(EditTask(updateTask));
    await dispatch(fetchToDoList());
  };

  const deleteTask = async () => {
    await dispatch(DeleteTask(task.id));
    await dispatch(fetchToDoList());
  };
  return (
    <div className="task card w-50 mx-auto mb-4">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="col-4 text-start">
          <p className="m-0">{task.task}</p>
        </div>
        <div className="col-4">
          <strong>Done: </strong>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={changeCheckBox}
            checked={task.done}
          />
        </div>
        <div className="col-4">
          <button className="ms-4 btn btn-danger" onClick={deleteTask}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoListItem;
