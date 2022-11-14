import { Box } from "@mui/material";
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";

import img1 from "../../assets/discord_card.jpg";
import img3 from "../../assets/medium_card.jpg";
import img5 from "../../assets/podcast_card.jpg";
import img4 from "../../assets/twitch_card.jpg";
import img2 from "../../assets/youtube_card.jpg";

function SliderTeste() {
  let imagesSlider = [img1, img2, img3, img4, img5];

  return (
    <AwesomeSlider transitionDelay={100}>
      {imagesSlider.map((image, i) => (
        <img key={i} width="100%" data-src={image} alt="img" />
      ))}
    </AwesomeSlider>
  );
}
export default SliderTeste;
