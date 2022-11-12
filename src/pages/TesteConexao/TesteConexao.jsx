// import apiBack from "../../services/apiBack";
import { useEffect, useState } from "react";
import apiBack from "../../services/apiBack";
import CourseServices from "../../services/coursesServices";
import TrailServices from "../../services/trailServices";
import UserServices from "../../services/userServices";

function TesteConexao() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {}, []);

  if (trail.length === 0) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  } else {
    return (
      <div>
        {trail?.map(({ _id, title, description, courses }) => (
          <div key={_id}>
            <h1>{_id}</h1>
            <h1>{description}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default TesteConexao;
