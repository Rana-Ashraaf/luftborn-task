import React from "react";

const UserCard = () => {
  return (
    <div className="profile">
      <div className="profile__uppper">
        <div className="profile__uppper__image-wrapper">
          <img src="./image-jeremy.png" alt="Jeremy's photo" />
        </div>
        <h4>
          Report for <span className="profile__name">Best Sales</span>
        </h4>
      </div>

      <div className="buttons">
        <button className="btn btn-daily" type="button">
          Daily
        </button>
        <button className="btn btn-weekly btn-active" type="button">
          Weekly
        </button>
        <button className="btn btn-monthly" type="button">
          Monthly
        </button>
      </div>
    </div>
  );
};

export default UserCard;
