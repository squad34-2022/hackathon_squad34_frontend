import api from "./api/api";

async function getAll() {
  const { data } = await api.get("/users");
  return data;
}

async function getById(id) {
  const { data } = await api.get(`/users/${id}`);

  return data;
}

async function authenticate({ password, email }) {
  const { data } = await api.post("/users/login", { password, email });

  return data;
}
async function add({ name, password, email }) {
  const { data } = await api.post("/users", { name, password, email });

  return data;
}
async function update(id, { name, password, email }) {
  const response = await api.put(`/users/${id}`, { name, password, email });
  return response;
}

async function remove(id) {
  const response = await api.delete(`/users/${id}`);
  return response;
}

const UserServices = {
  getAll,
  add,
  update,
  authenticate,
  remove,
  getById,
};

export default UserServices;
