import api from "./api/api";

async function getAll() {
  const response = await api.get("/trails");
  return response;
}
async function add({ title, description }) {
  const { data } = await api.post("/trails", { title, description });
  return data;
}
async function getById(id) {
  const { data } = await api.get(`/trails/${id}`);
  return data;
}
async function update(id, { title, description }) {
  const response = await api.put(`/trails/${id}`, {
    title,
    description,
  });
  return response;
}

async function remove(id) {
  const response = await api.delete(`/trails/${id}`);
  return response;
}

const TrailServices = {
  getAll,
  update,
  remove,
  add,
  getById,
};

export default TrailServices;
