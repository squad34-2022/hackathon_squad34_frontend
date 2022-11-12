// import apiBack from "../../services/apiBack";
import { useEffect, useState } from "react";
import apiBack from "../../services/apiBack";
import CourseServices from "../../services/coursesServices";
import TrailServices from "../../services/trailServices";
import UserServices from "../../services/userServices";

function TesteConexao() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /*   UserServices.authenticate({ email: "kaique@teste.com", password: "123" }); */
    /*  UserServices.getAll().then((res) => setUsers(res)); */
    CourseServices.getAll().then((res) => console.log(res));

    /* "636e958666d62a27256ebb0b", {
      name: "teste",
      password: "123",
      email: "123@123.com",
    } );*/
  }, []);

  if (users.length === 0) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{users[1].name}</h1>
      </div>
    );
  }
}

export default TesteConexao;
