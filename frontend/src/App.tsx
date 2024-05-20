import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/login";
import Index from "./pages/Index";
import Todo from "./pages/Todo/Todo";
import Contact from './pages/Contact'
const App = () => {
  return (
    <div className="">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  );
};

export default App;
