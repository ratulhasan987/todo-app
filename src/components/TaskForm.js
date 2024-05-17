'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../store/taskSlice';

const TaskForm = ({ task, onClose }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (task) {
      dispatch(editTask({ ...task, title, description }));
    } else {
      dispatch(addTask({ id: Date.now(), title, description }));
    }
    onClose();
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-2xl w-full max-w-2xl h-full max-h-screen mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {task ? 'Update' : 'Add'} Task
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
