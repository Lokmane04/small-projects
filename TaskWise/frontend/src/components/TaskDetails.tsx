import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ReactQuill from "react-quill";

import { useParams } from "react-router-dom";
import {
  Checkbox,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { formaDataTypes } from "../types/index";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import useFetchTask from "../hooks/useFetchTask";
import { useEffect } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Lokmane04">
        Lokmane Elhakim
      </Link>
      2024
    </Typography>
  );
}
interface TaskDetailsProps {
  type: "update" | "create";
  onEditorStateChange: (editorState: string) => void;
  formSubmit: (data: formaDataTypes) => void;
  handleSubmit: UseFormHandleSubmit<formaDataTypes, undefined>;
  editorContent: string | undefined;
  register: UseFormRegister<formaDataTypes>;
  errors: FieldErrors<formaDataTypes>;
  setValue: UseFormSetValue<formaDataTypes>;
}

const TaskDetails = (props: TaskDetailsProps) => {
  const { id } = useParams();
  const {
    type,
    setValue,
    onEditorStateChange,
    formSubmit,
    handleSubmit,
    editorContent,
    register,
    errors,
  } = props;
  const fetchedTask = useFetchTask({ id });
  useEffect(() => {
    if (fetchedTask) {
      setValue("title", `${fetchedTask.title}`);
      setValue("description", `${fetchedTask?.description}`);
      setValue("priority", `${fetchedTask?.priority}`);
      setValue("completed", fetchedTask?.completed);
    }
  }, [fetchedTask, setValue]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
          {type === "create" ? "Create a task" : "Update a task"}
        </h1>
        <form
          noValidate
          onSubmit={handleSubmit(formSubmit)}
          style={{ marginTop: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                autoFocus
                fullWidth
                label={"Read surah al-Fatiha"}
                {...register("title")}
              />
            </Grid>
            <h1 className="text-red-700 px-4 py-3 font-bold">
              {errors.title?.message}
            </h1>
            <Grid item xs={12}>
              <p className="text-xl font-bold mb-2">Task description</p>
              <ReactQuill
                defaultValue={fetchedTask?.description}
                value={editorContent}
                onChange={onEditorStateChange}
                theme="snow"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="priority">Priority</InputLabel>
              <Select
                fullWidth
                defaultValue={fetchedTask?.priority ?? "medium"}
                id="priority"
                {...register("priority")}
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="delayed">Delayed</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <label style={{ fontSize: "18px" }} id="checked">
                Completed
              </label>
              <Checkbox id="checked" {...register("completed")} />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {type} Task
          </Button>
        </form>
      </Box>
      <Copyright />
    </Container>
  );
};

export default TaskDetails;
