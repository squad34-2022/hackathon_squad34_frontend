import apiBack from "./apiBack";

async function getAll() {
  try {
    const response = await apiBack.get("/courses");
    return response;
  } catch (error) {
    return error.response;
  }
}
async function add({ title, type, author, link, trail }) {
  try {
    const response = await apiBack.post(
      "/courses",
      {
        title,
        type,
        author,
        link,
        trail,
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
async function getById(id) {
  try {
    const response = await apiBack.get(`/courses/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
async function update(id, { title, type, author, link, trail }) {
  try {
    const response = await apiBack.patch(
      `/courses/${id}`,
      { title, type, author, link, trail },
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
    const response = await apiBack.delete(`/courses/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response;
  } catch (error) {
    return error.response;
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
