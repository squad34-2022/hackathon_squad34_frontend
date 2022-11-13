import Cookies from "js-cookie";
import apiBack from "./apiBack";

async function getAll() {
  try {
    const response = await apiBack.get("/users", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
async function getById(id) {
  try {
    const response = await apiBack.get(`/users/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
}
async function authenticate({ password, email }) {
  const response = await apiBack.post("/users/login", { password, email });
  return response.data;
}

async function add({ name, password, email }) {
  try {
    const response = await apiBack.post("/users", { name, password, email });
    Cookies.set("token", response.data.token, { expires: 1 });
    Cookies.set("user", response.data.user._id, { expires: 1 });
    return response;
  } catch (error) {
    return error.response;
  }
}
async function update(id, { name, password, email }) {
  try {
    const response = await apiBack.put(
      `/users/${id}`,
      {
        name,
        password,
        email,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
  async function remove(id) {
    try {
      const response = await apiBack.delete(`/users/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }
}
async function remove(id) {
  try {
    const response = await apiBack.delete(`/users/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
  async function remove(id) {
    try {
      const response = await apiBack.delete(`/users/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }
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
