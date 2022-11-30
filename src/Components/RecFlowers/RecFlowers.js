import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

//import functions
import { fetchFlowers } from "../CatalogFlowers/flowers_slice";
import ReviewOwlCarousel from "../ReviewOwlCarousel/ReviewOwlCarousel";

//import owl-carosuel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function RecFlowers({ category }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlowers());
    //eslint-disable-next-line
  }, [category]);

  const selectedFlowers = createSelector(
    (state) => state.flowers.flowers,
    (flowers) => {
      return flowers.filter((item) => item.category === category);
    }
  );

  const visibleFlowers = useSelector(selectedFlowers);

  return <div className="rec-flowers"></div>;
}

export default RecFlowers;
