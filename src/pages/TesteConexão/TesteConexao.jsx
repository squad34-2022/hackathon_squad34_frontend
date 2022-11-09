// import apiBack from "../../services/apiBack";
import { useState, useEffect } from "react";

function TesteConexao() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/teste")
      .then((res) => res.json())
      .then((data) => setUsers(data.message));
  }, []);

  return (
    <div>
      <h1>{users}</h1>
    </div>
  );
}

export default TesteConexao;
