// components/TaskPage.js
'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { setTasks } from '../store/taskSlice';

const TaskPage = () => {
  const [showForm, setShowForm] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(storedTasks));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Task
      </button>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <TaskForm onClose={() => setShowForm(false)} />
        </div>
      )}
      <TaskList />
    </div>
  );
};

export default TaskPage;
