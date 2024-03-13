import { useEffect, useState, Fragment, useMemo } from "react";
import axios from "axios";
import { formaDataTypes } from "../types/index";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
const TaskDetailDisplay = () => {
  const [tasks, setTasks] = useState<formaDataTypes[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDeleteTask = async (taskId: string | undefined) => {
    try {
      await axios.delete(`http://localhost:3001/deleteTask/${taskId}`);
      await fetchData();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tasks]);
  const memoizedTasks = useMemo(() => tasks, [tasks]);
  return (
    <>
      {memoizedTasks ? (
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
            {memoizedTasks &&
              memoizedTasks?.map((task: formaDataTypes, i: number) => {
                return (
                  <Fragment key={i}>
                    {i % 2 === 1 ? (
                      <tr>
                        <td className="border px-4 py-2">{task.title}</td>
                        <td className="border px-4 py-2 w-full min-h-fit">
                          {task.description}
                        </td>
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
                          <Button
                            onClick={() => handleDeleteTask(task._id)}
                            color="error"
                            variant="outlined"
                            size="small"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ) : (
                      <tr className="bg-gray-100">
                        <td className="border px-4 py-2">{task.title}</td>
                        <td className="border px-4 py-2 w-full min-h-fit">
                          {task.description}
                        </td>
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
                          <Button
                            onClick={() => handleDeleteTask(task._id)}
                            color="error"
                            variant="outlined"
                            size="small"
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h1 className="my-16 font-bold text-5xl text-center">
          Create your first task
        </h1>
      )}
      <Box
        sx={{
          width: "100%",
          paddingTop: "15px",
          marginLeft: "45%",
          marginRight: "45%",
        }}
      >
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
