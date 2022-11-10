// import apiBack from "../../services/apiBack";
import apiBack from "../../services/apiBack";
import { useState, useEffect } from "react";

function TesteConexao() {
  const [users, setUsers] = useState([{ name: "ola" }]);

  useEffect(() => {
    apiBack.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <div>
      <h1>{users[1].name}</h1>
    </div>
  );
}

export default TesteConexao;
