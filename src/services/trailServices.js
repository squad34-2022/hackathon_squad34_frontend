import apiBack from "./apiBack";

async function getAll() {
  try {
    const response = await apiBack.get("/trails");
    return response;
  } catch (error) {
    return error.response;
  }
}

async function add({ title, description }) {
  try {
    const response = await apiBack.post(
      "/trails",
      { title, description },
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
}

async function getById(id) {
  try {
    const response = await apiBack.get(`/trails/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

async function update(id, { title, description }) {
  try {
    const response = await apiBack.put(
      `/trails/${id}`,
      {
        title,
        description,
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
}
async function remove(id) {
  try {
    const response = await apiBack.delete(`/trails/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

const TrailServices = {
  getAll,
  update,
  remove,
  add,
  getById,
};

export default TrailServices;
