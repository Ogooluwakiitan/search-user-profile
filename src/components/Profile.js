import React from "react";
import ProfileData from "./ProfileData";
import ProfileCard from "./ProfileCard";
import "./styles/Profile.css";
import { useState } from "react";

const Profile = () => {
  const [searchResult, setSearchResult] = useState("");
  return (
    <div className="profile">
      <div>
        <input
          onChange={(event) => {
            setSearchResult(event.target.value);
          }}
          placeholder="Search by name"
        />
      </div>
      <div className="profileContent">
        {ProfileData.filter((val) => {
          if (searchResult === "") {
            return val;
          } else if (
            val.firstName.toLowerCase().includes(searchResult.toLowerCase())
          ) {
            return val;
          }
        }).map((val, ind) => {
          return (
            <div style={{ background: "white", padding: "10px" }}>
              <ProfileCard
                key={ind}
                picture={val.picture}
                id={val.id}
                title={val.title}
                firstName={val.firstName}
                lastName={val.lastName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
