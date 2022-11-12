// import apiBack from "../../services/apiBack";
import { useEffect, useState } from "react";
import apiBack from "../../services/apiBack";
import CourseServices from "../../services/coursesServices";
import TrailServices from "../../services/trailServices";
import UserServices from "../../services/userServices";

const teste1 = {
  name: "123",
  email: "123@123.com",
  password: "123",
};

const courseAS = {
  title: "teste",
  type: "artigo",
  author: "fcamara",
  link: "https://github.com/",
  trail: "636d9ac8f7a3ff691cd05769",
};
/* 636ef112ce2233cfc40141bd user*/
function TesteConexao() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /*  TrailServices.getAll().then((res) => console.log(res.data)); */

    CourseServices.getAll("636ee014ce2233cfc40140b1", {
      author: "jose",
    }).then((res) => console.log(res.data));
    /*  users?.map(({ _id }) => (
      UserServices.remove(_id).then(res => console.log(res))
    )) */

    console.log(users);
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
        {users?.map(({ _id, title }) => (
          <h1 key={_id}> {title} </h1>
        ))}
      </div>
    );
  }
}

export default TesteConexao;
