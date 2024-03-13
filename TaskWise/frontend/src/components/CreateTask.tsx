import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [completed, setCompleted] = useState(false);
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createTask", {
        title,
        description,
        completed,
      })
      .then((data) => console.log(data));
    navigate("/");
  };
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 mb-3">
            Create Task
          </h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p>
                  Allah's Messenger (ﷺ) said, "Do good deeds properly, sincerely
                  and moderately and know that your deeds will not make you
                  enter Paradise, and that the most beloved deed to Allah is the
                  most regular and constant even if it were little."
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={description}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="description">Title</label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                          value={title}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            return setTitle(e.target.value);
                          }}
                        />
                      </div>
                      <label htmlFor="completed">Completed</label>
                      <input
                        id="completed"
                        type="checkbox"
                        placeholder="Completed Task"
                        style={{ marginLeft: "20px" }}
                        value={completed ? "true" : "false"}
                        onChange={() => {
                          return setCompleted((prev) => !prev);
                        }}
                      />

                      <div className="md:col-span-5 text-end mt-3 w-full items-end">
                        <button
                          onClick={submitHandler}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                        >
                          Create Task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
