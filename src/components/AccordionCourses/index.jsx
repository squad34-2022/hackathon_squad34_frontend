import {
  Accordion,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import AccordionDetailsCourses from "../AccordionDetailsCourses";

function AccordionCourses({ title, courses }) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <Divider />
      {courses?.map(({ _id, title, type, author, link }) => (
        <AccordionDetailsCourses
          key={_id}
          title={title}
          type={type}
          author={author}
          link={link}
        />
      ))}
    </Accordion>
  );
}

export default AccordionCourses;
