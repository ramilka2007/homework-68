import React from 'react';
import ToDoListForm from "../../components/ToDoListForm/ToDoListForm";
import ToDoListItem from "../../components/ToDoListItem/ToDoListItem";

const ToDoList = () => {
    return (
        <div>
            <ToDoListForm/>
            <hr/>
            <ToDoListItem/>
        </div>
    );
};

export default ToDoList;