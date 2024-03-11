import "react-quill/dist/quill.snow.css";
import CreateUpdateTask from "./components/CreateUpdateTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetailDisplay from "./components/TaskDetailDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskDetailDisplay />} />
        <Route
          path="/update/:id"
          element={<CreateUpdateTask type="update" />}
        />
        <Route path="/create" element={<CreateUpdateTask type="create" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
