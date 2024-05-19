import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/login";
import Index from "./pages/Index";
import Todo from "./pages/Todo/Todo";
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </>
  );
};

export default App;
