import React from "react";
//import owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Media files
import flowerIamge from "../../assets/images/flower1.png";

function ReviewOwlCarousel({ array }) {
  const renderOwlCarousel = () => {
    if (array && array.length > 0) {
      return array.map((item) => {
        const renderStars = () => {
          let newArray = [];
          for (let i = 0; i < item.star; i++) {
            newArray.push(<i class="fa-solid fa-star"></i>);
          }
          return newArray;
        };

        return (
          <div className="single-review">
            <div className="left-side">
              <div className="star-box">
                <div className="stars">{renderStars()}</div>
                <span>4.5</span>
              </div>
              <h4 className="review-owner">Мередова Елена Григорьевна</h4>
              <p className="description-box">{item.review_comment}</p>
            </div>
            <div className="right-side">
              <div className="review-img-box">
                <img src={flowerIamge} alt="" />
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <h1>Nothing found</h1>;
    }
  };

  return (
    <div className="review-carousel">
      <OwlCarousel className="owl-theme" loop nav margin={10}>
        {renderOwlCarousel()}
      </OwlCarousel>
    </div>
  );
}

export default ReviewOwlCarousel;
