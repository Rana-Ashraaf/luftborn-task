import React from "react";

const Card = ({ category, title, price, count, headerColor }) => {
  return (
    <div style={{ backgroundColor: headerColor }} className="report">
      <div className="report__content">
        <div className="report__content__header">
          <h2 className="report__content__header__title">{category}</h2>
          <img src="./icon-ellipsis.svg" alt="Ellipsis icon" />
        </div>
        <div className="report__content__info">
          <p className="report__content__info__hours">{price}$</p>
          <p className="report__content__info__prev-info">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
