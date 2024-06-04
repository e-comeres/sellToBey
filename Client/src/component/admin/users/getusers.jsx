import React from "react";
import { useNavigate } from "react-router-dom";
import "./getuser.css"; // Adjust the path if necessary

export const getusers = ({ datauser }) => {
  const navigate = useNavigate();

  return (
    <div id="users">
      <div className="container">
        <button
          className="button"
          onClick={() => {
            navigate("/admin");
          }}
        >
          Back to Admin Page
        </button>
        <div className="user-list">
          {datauser.map((el) => {
            return (
              <div
                className="user-item"
                key={el.username}
                onClick={() => {
                  navigate("/oneuser", { state: { el: el } });
                }}
              >
                <h2 className="username">{el.username}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default getusers;
