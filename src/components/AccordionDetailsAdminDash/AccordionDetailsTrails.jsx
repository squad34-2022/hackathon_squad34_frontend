import { AccordionDetails, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TrailServices from "../../services/trailServices";

function AccordionDetailsTrails({ title, _id }) {
  const [trails, setTrails] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <AccordionDetails key={_id}>
        <Typography textAlign="center">{title}</Typography>
      </AccordionDetails>
    </>
  );
}

export default AccordionDetailsTrails;
