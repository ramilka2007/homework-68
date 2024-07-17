import React from 'react';
import { Task } from '../../types';

interface Props {
    task: Task;
}

const ToDoListItem: React.FC<Props> = ({ task }) => {
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
                    />
                </div>
                <div className="col-4">
                    <button className="ms-4 btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToDoListItem;