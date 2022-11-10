import {
  Accordion,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import AccordionDetailsCustom from "../AccordionDetailsCustom";

function AccordionCustom({ title, courses }) {
  console.log(courses);

  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h5">{title}</Typography>
      </AccordionSummary>
      <Divider />
      {courses?.map(({ _id, title, type, author }) => (
        <AccordionDetailsCustom
          key={_id}
          title={title}
          type={type}
          author={author}
        />
      ))}
    </Accordion>
  );
}

export default AccordionCustom;
