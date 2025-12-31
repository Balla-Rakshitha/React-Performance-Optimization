import axiosInstance from "./axiosinstance";

// Fetch all todos
export const getTodos = () => {
  return axiosInstance.get("/todos");
};

// Fetch todo by ID
export const getTodoById = (id) => {
  return axiosInstance.get(`/todos/${id}`);
};
