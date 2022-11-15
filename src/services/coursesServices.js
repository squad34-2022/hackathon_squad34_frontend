import api from "./api/api";

async function getAll() {
  const response = await api.get("/courses");
  return response;
}
async function add({ title, type, author, link, trail }) {
  const response = await api.post("/courses", {
    title,
    type,
    author,
    link,
    trail,
  });
  return response;
}
async function getById(id) {
  const response = await api.get(`/courses/${id}`);
  return response;
}
async function update(id, { title, type, author, link, trail }) {
  const response = await api.put(`/courses/${id}`, {
    title,
    type,
    author,
    link,
    trail,
  });
  return response;
}
async function remove(id) {
  const response = await api.delete(`/courses/${id}`);
  return response;
}

const CourseServices = {
  getAll,
  update,
  remove,
  add,
  getById,
};

export default CourseServices;
