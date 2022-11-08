import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles.css";

function SimpleSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzY29yZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="200px"
            heigth="200px"
          />
          <p>Ola</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1637806631554-bcfe2c618058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW91JTIwdHViZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="200px"
            heigth="200px"
          />
          <p>Ola</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="200px"
            heigth="200px"
          />
          <p>Ola</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            width="200px"
            heigth="200px"
          />
          <p>Ola</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGl2ZSUyMHZpZGVvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="200px"
            heigth="200px"
          />
          <p>Ola</p>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
