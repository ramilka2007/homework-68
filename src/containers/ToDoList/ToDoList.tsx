import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';
import { useEffect } from 'react';
import { fetchToDoList } from './toDoListSlice';
import ToDoListForm from '../../components/ToDoListForm/ToDoListForm';

const ToDoList = () => {
    const tasks = useSelector((state: RootState) => state.toDoList.tasks);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchToDoList());
    }, [dispatch]);


    return (
        <div>
            <ToDoListForm/>
            <hr/>
            {tasks.length === 0 ? (
                <h1>No tasks</h1>
            ) : (
                <>
                    {tasks.map((task) => (
                        <ToDoListItem key={task.id} task={task} />
                    ))}
                </>
            )}
        </div>
    );
};

export default ToDoList;