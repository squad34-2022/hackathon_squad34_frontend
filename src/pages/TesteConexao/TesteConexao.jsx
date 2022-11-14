// import apiBack from "../../services/apiBack";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TrailServices from "../../services/trailServices";


function TesteConexao() {
  const [trails, setTrails] = useState([]);

  const onDelete = (_id) => {
    TrailServices.remove(_id)

  }




  useEffect(() => {
    TrailServices.getAll()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));
  }, []);


  if (trails.length === 0) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  } else {
    return (
      <div >
        {trails?.map(({ _id, title, description }) => (
          <Box display="flex" justifyContent="space-between">
            <Typography>{title}</Typography>
            <Divider />
            <Button onClick={() => onDelete(_id)} >Delete</Button>
          </Box>
        ))}

      </div>


    );
  }
}

export default TesteConexao;
