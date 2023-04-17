import React from "react";
import "./styles/ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div className="profile-dp">
      <img src={props.picture} alt="profileImg" />
      </div>

      <div className="profileDetails">
        <div className="profileID">
          <p> {props.id} </p>
        </div>
        <div className="profileName">
          <p>{props.title} </p>
          <p>{props.firstName} </p>
          <p>{props.lastName} </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
