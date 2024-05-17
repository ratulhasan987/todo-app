"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import { useState } from "react";
import TaskForm from "./TaskForm";


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 2;

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center px-10 ">
      <div className="text-center md:text-left mb-2 md:mb-0 md:mr-10 mt-0">
        <TaskForm />
      </div>

      <div className="flex-1 p-4 mt-4 w-full">
        {!editingTask ? (
          <>
            {currentTasks.map((task) => (
              <div
                key={task.id}
                className="p-4 bg-white rounded mb-2 mt-2 text-gray-600 shadow-2xl w-full "
              >
                <h3 className="text-lg font-bold">{task.title}</h3>
                <p>{task.description}</p>
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    index + 1 === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full max-w-lg">
            <TaskForm task={editingTask} onClose={() => setEditingTask(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
