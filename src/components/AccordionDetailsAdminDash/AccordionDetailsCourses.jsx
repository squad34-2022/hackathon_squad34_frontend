import { AccordionDetails, Chip, Grid, Typography } from "@mui/material";

function AccordionDetailsCourses({ trail, title, author }) {
  return (
    <AccordionDetails>
      <Grid columns={3} container justifyContent="space-between" width={750} alignItems="center">
        <Chip label={trail?.title} />
        <Typography textAlign="center">{title}</Typography>
        <Typography textAlign="center">{author}</Typography>

      </Grid>
    </AccordionDetails>
  );
}

export default AccordionDetailsCourses;
