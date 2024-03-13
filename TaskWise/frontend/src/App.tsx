import "react-quill/dist/quill.snow.css";
import UpdateTask from "./components/UpdateTask";
import CreateTask from "./components/CreateTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetailDisplay from "./components/TaskDetailDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskDetailDisplay />}></Route>
        <Route path="/update/:id" element={<UpdateTask />}></Route>
        <Route path="/create" element={<CreateTask />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
