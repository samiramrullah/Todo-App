import React from "react";
import { toast, ToastContainer } from 'react-toastify'
import { taskInterface } from "../pages/Todo/Todo";
import axios from "axios";

interface TaskProps extends taskInterface {
  fetchData: () => void;
}
const Taskcard = ({ name, _id, isDone, fetchData }: TaskProps) => {
  const updateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    axios.put(`${process.env.REACT_APP_API_KEY}task/updatetask`, { _id: _id, isDone: e.target.checked }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((res) => {
        if (res?.data?.status) {
          fetchData();
          toast.success(res.data.message,{position:'top-right'})
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, { position: "top-right" });
      });
  }

  const deleteTaskHandler=()=>{
      axios.delete(`${process.env.REACT_APP_API_KEY}task/deletetask`,{data:{_id:_id},headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }})
      .then((res) => {
        
          fetchData();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, { position: "top-right" });
      });
  }
  return (
    <li className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            onChange={updateHandler}
            type="checkbox"
            checked={isDone}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label className="ml-3 block text-gray-900">
            <span className={`${isDone ? "text-lg font-medium line-through" : "text-lg font-medium"}`}>{name}</span>
          </label>
        </div>
        <button onClick={deleteTaskHandler} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-500
         rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
          Delete
        </button>
      </div>
      <ToastContainer />
    </li>
  );
};

export default Taskcard;
