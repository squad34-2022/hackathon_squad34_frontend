import apiBack from "./apiBack";

async function getAll() {
  const { data } = await apiBack.get("/courses");
  return data;
}

async function add({ name, password, email }) {
  try {
    const response = await apiBack.post("/courses", { name, password, email });

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
    const response = await apiBack.get(`/courses/${id}`, {
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
      `/courses/${id}`,
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
    const response = await apiBack.delete(`/courses/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    console.error(error.response.data.error);
  }
}

const CourseServices = {
  getAll,
  update,
  remove,
  add,
  getById,
};

export default CourseServices;
