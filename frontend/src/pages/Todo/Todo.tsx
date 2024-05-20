import { useState ,useEffect} from "react";
import {toast,ToastContainer} from 'react-toastify'
import Taskcard from "../../utils/Taskcard";
import axios from "axios";

export interface  taskInterface{
  _id:String;
  name:String;
  isDone?:boolean;
}
const Todo = () => {
  const [addTask,setAddTask]=useState({name:""})
  const [allTask,setAllTask]=useState<taskInterface[]>([])

  const fetchData=async()=>{
    axios.get(`${process.env.REACT_APP_API_KEY}task/getalltask`,{headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
    }})
    .then((res)=>{
      if(res?.data?.status)
        {
           setAllTask(res?.data?.tasks)
           
        }
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message, { position: "top-right" });
    });
  }
 useEffect(()=>{
  fetchData();
 },[])

  const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setAddTask(prevState=>({
      ...prevState,
      [name]:value
    }))
  }
  const onSubmitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
       axios.post(`${process.env.REACT_APP_API_KEY}task/addtask`,addTask,{
        headers:{
          Authorization:'Bearer '+localStorage.getItem('token')
        }
       })
      .then((res)=>{
        if(res.data.status) fetchData();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, { position: "top-right" });
      });
  }  
  return (
    <div className="mt-0 md:mt-48">
      <div className=" w-3/5 mx-auto shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            To-Do List
          </h1>
        </div>
        <form onSubmit={onSubmitHandler} className="w-full max-w-sm mx-auto px-4 py-2">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              onChange={onChangeHandler}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a task"
              name="name"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        <ul className="divide-y divide-gray-200 px-4">
          {allTask?.map(task=>(
            <Taskcard name={task.name} _id={task._id} isDone={task.isDone} fetchData={fetchData}/>
          ))}
        </ul>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Todo;
