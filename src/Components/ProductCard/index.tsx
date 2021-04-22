import React from "react";
import defaultImage from "../../images/noImage.jpg";
import "./style.scss";

interface Props {
  title: string;
  image: string | undefined;
  condition: string | undefined;
  price: string;
  viewItemURL: string;
}

const ProductCard: React.FC<Props> = ({
  image,
  title,
  condition,
  price,
  viewItemURL,
}) => (
  <a href={viewItemURL} className="card">
      <div
        className="img-container"
        style={{ backgroundImage: `url(${image || defaultImage})` }}
      ></div>
      <div className="item-details" >
        <h3 className="txt-overflow">{title}</h3>
        <span className = "condition">{`Condition: ${condition || "Unknown"}`}</span>
        <span className="price">{`$${price}`}</span>
      </div>
  </a>
);

export default React.memo(ProductCard);
