import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { formaDataTypes } from "../types/index";
import { useNavigate, useParams } from "react-router-dom";
import TaskDetails from "./TaskDetails";
import axios from "axios";
interface TaskPropsType {
  type: "update" | "create";
}

export default function CreateUpdateTask(props: TaskPropsType) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { type } = props;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<formaDataTypes>();

  const editorContent = watch("description");

  const onSubmit = async (data: formaDataTypes) => {
    if (type === "create") {
      axios
        .post("http://localhost:3001/createTask", data)
        .then((res) => console.log(res));
    } else {
      await axios.put(`http://localhost:3001/updateTask/${id}`);
    }
    navigate("/");
    window.location.reload();
  };

  const onEditorStateChange = (editorState: string) => {
    setValue("description", editorState);
  };

  useEffect(() => {
    register("description", { required: true, minLength: 11 });
  }, [register]);

  return (
    <TaskDetails
      type={type}
      onEditorStateChange={onEditorStateChange}
      formSubmit={onSubmit}
      handleSubmit={handleSubmit}
      editorContent={editorContent}
      register={register}
      errors={errors}
      setValue={setValue}
    />
  );
}
