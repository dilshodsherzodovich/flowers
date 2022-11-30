import React, { useEffect, useRef } from "react";
//import owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import redux
import { useSelector, useDispatch } from "react-redux";

//Media files
import flowerIamge from "../../assets/images/flower1.png";

// import functions
import { fetchReviews } from "./review_slice";
import { createSelector } from "reselect";

// import style files
import "./ReviewOwlCarousel.scss";
import SingleCatalogItem from "../SingleCatalogItem/SingleCatalogItem";

function ReviewOwlCarousel({ id }) {
  const selectedReviews = createSelector(
    (state) => state.reviews.reviews,
    (allReviews) => {
      return allReviews.filter((item) => +item.product === +id);
    }
  );

  const flowerReviews = useSelector(selectedReviews);

  const dispatch = useDispatch();
  // const { reviews, loading } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
    // eslint-disable-next-line
  }, [id]);

  const carouselRef = useRef(null);

  const renderOwlCarousel = () => {
    if (flowerReviews.length > 0) {
      return flowerReviews.map((item) => {
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
                <span>{item.star}</span>
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
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        items={1}
        autoplay
        dots={false}
        autoplayTimeout={5000}
        ref={carouselRef}
      >
        {renderOwlCarousel()}
      </OwlCarousel>
      {flowerReviews.length > 0 ? (
        <>
          <div
            onClick={() => {
              carouselRef.current.prev();
            }}
            className="nav-prev"
          >
            <i class="fa-solid fa-caret-left"></i>
          </div>
          <div
            onClick={() => {
              carouselRef.current.next();
            }}
            className="nav-next"
          >
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ReviewOwlCarousel;
