// import apiBack from "../../services/apiBack";
import apiBack from "../../services/apiBack";
import { useState, useEffect } from "react";

function TesteConexao() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiBack
      .get("/users/636b14ab1eced48119ef0b2e")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
      });
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
        <h1>{users.name}</h1>
      </div>
    );
  }
}

export default TesteConexao;
