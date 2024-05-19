import React from "react";

const Todo = () => {
  return (
    <div className="mt-0 md:mt-48">
      <div className=" w-3/5 mx-auto shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            To-Do List
          </h1>
        </div>
        <form className="w-full max-w-sm mx-auto px-4 py-2">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a task"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Add
            </button>
          </div>
        </form>
        <ul className="divide-y divide-gray-200 px-4">
          <li className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="todo1"
                  name="todo1"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label className="ml-3 block text-gray-900">
                  <span className="text-lg font-medium">
                    Finish project proposal
                  </span>
                </label>
              </div>
              <span className="text-sm font-light text-gray-500">
                Due on 4/1/23
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
