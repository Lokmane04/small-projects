import axios from "axios";
import { useState, useEffect } from "react";
import { formaDataTypes } from "../types";
interface updateTaskProps {
  id: string | undefined;
}
const useFetchTask = (props: updateTaskProps) => {
  const [fetchedTask, setFetchedTask] = useState<formaDataTypes>();
  const { id } = props;
  useEffect(() => {
    axios
      .get(`http://localhost:3001/update/${id}`)
      .then((res) => setFetchedTask(res.data));
  }, []);

  if (fetchedTask) {
    return fetchedTask;
  }
};

export default useFetchTask;
