import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { formaDataTypes } from "../types/index";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
const TaskDetailDisplay = () => {
  const [tasks, setTasks] = useState<formaDataTypes[] | undefined>([]);
  useEffect(() => {
    axios.get("http://localhost:3001").then((tasks) => {
      setTasks(tasks.data);
    });
  }, []);

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">priority</th>
            <th className="px-4 py-2">completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, i) => (
            <Fragment key={i}>
              {i % 2 === 1 ? (
                <tr>
                  <td className="border px-4 py-2">{task.title}</td>
                  <td className="border px-4 py-2 w-full min-h-fit">
                    {task.description}
                  </td>
                  <td className="border px-4 py-2">{task.priority}</td>
                  <td className="border px-4 py-2">
                    {task.completed ? "Done" : "Not yet"}
                  </td>
                  <td className="border px-4 py-2">
                    <Link to={`/update/${task._id}`}>
                      <Button
                        color="info"
                        variant="outlined"
                        size="small"
                        sx={{ mb: "10px" }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Link to={`/delete/${task._id}`}>
                      <Button color="error" variant="outlined" size="small">
                        Delete
                      </Button>
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">{task.title}</td>
                  <td className="border px-4 py-2 w-full min-h-fit">
                    {task.description}
                  </td>
                  <td className="border px-4 py-2">{task.priority}</td>
                  <td className="border px-4 py-2">
                    {task.completed ? "Done" : "Not yet"}
                  </td>
                  <td className="border px-4 py-2">
                    <Link to={`/update/${task._id}`}>
                      <Button
                        color="info"
                        variant="outlined"
                        size="small"
                        sx={{ mb: "10px" }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Link to={`/delete/${task._id}`}>
                      <Button color="error" variant="outlined" size="small">
                        Delete
                      </Button>
                    </Link>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      <Box sx={{ width: "100%", paddingTop: "15px", margin: "0 40%" }}>
        <Link to={"/create"}>
          <Button color="primary" size="medium" variant="contained">
            Add New +
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default TaskDetailDisplay;
