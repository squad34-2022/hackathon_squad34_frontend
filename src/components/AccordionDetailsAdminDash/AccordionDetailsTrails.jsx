import { AccordionDetails, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TrailServices from "../../services/trailServices";

function AccordionDetailsTrails({ title, _id }) {

  const [trails, setTrails] = useState([]);

  useEffect(() => {
    TrailServices.update()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));

    TrailServices.remove()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));


  }, []);


  return (
    <>
      <AccordionDetails key={_id}>
        <Typography textAlign="center">{title}</Typography>
      </AccordionDetails>
    </>
  );
}

export default AccordionDetailsTrails;
