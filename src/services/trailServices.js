import apiBack from "./apiBack";

async function getAll() {
  const { data } = await apiBack.get("/trails");
  return data;
}

async function add({ title, description }) {
  try {
    const response = await apiBack.post("/trails", { title, description });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response;
  } catch (error) {
    console.error(error.response.data.error);
  }
}
async function getById(id) {
  try {
    const response = await apiBack.get(`/trails/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.response.data.error);
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
    console.error(error.response.data.error);
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
    console.error(error.response.data.error);
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
