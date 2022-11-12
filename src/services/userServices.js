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
    const response = await apiBack.get(`/users/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

async function authenticate({ password, email }) {
  try {
    const response = await apiBack.post("/users/login", { password, email });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response;
  } catch (error) {
    return error.response;
  }
}
async function add({ name, password, email }) {
  try {
    const response = await apiBack.post("/users", { name, password, email });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

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
