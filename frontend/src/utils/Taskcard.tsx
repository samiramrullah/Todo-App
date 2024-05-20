import React from "react";
import {toast,ToastContainer} from 'react-toastify'
import { taskInterface } from "../pages/Todo/Todo";
import axios from "axios";

interface TaskProps extends taskInterface {
  fetchData: () => void; 
}
const Taskcard = ({name,_id,isDone,fetchData}:TaskProps) => {
  const updateHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.checked);
    
    axios.put(`${process.env.REACT_APP_API_KEY}task/updatetask`,{_id:_id,isDone:e.target.checked},{headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
    }})
    .then((res)=>{
      if(res?.data?.status)
        {
           fetchData();
        }
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
            <span className={`${isDone?"text-lg font-medium line-through":"text-lg font-medium"}`}>{name}</span>
          </label>
        </div>
        <span className="text-sm font-light text-gray-500">Due on 4/1/23</span>
      </div>
      <ToastContainer/>
    </li>
  );
};

export default Taskcard;
