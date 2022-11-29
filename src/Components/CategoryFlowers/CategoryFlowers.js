import React from "react";
import { v4 as uuid } from "uuid";

import "./CategoryFlowers.scss";

//import media files
import flower1 from "../../assets/images/categoryFlower1.png";
import flower2 from "../../assets/images/CategoryFlower2.png";
import flower3 from "../../assets/images/CategoryFlower3.png";
import flower4 from "../../assets/images/CategoryFlower4.png";
import flower5 from "../../assets/images/CategoryFlower5.png";

function CategoryFlowers() {
  const renderFlowers = () => {
    const flowers = [
      {
        title: "Букеты из тюльпанов и ирисов",
        image: flower1,
      },
      {
        title: "Сборные букеты",
        image: flower2,
      },
      {
        title: "Букеты из хризантем",
        image: flower3,
      },
      {
        title: "Букеты из Альстромерий",
        image: flower4,
      },
      {
        title: "Букет из эустом",
        image: flower5,
      },
    ];

    return flowers.map((item) => {
      return (
        <div key={uuid()} className="card">
          <div className="card-image">
            <img src={item.image} alt="" />
          </div>
          <div className="card-body">
            <p>{item.title}</p>
          </div>
        </div>
      );
    });
  };

  return <div className="category-flowers">{renderFlowers()}</div>;
}

export default CategoryFlowers;
