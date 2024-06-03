import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const getusers = ({ datauser }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/admin");
          }}
        >
          back admin page
        </button>
      </div>
      {datauser.map((el) => {
        return (
          <div>
            <h2
              onClick={() => {
                navigate("/oneuser", { state: { el: el } });
              }}
            >
              {el.username}
            </h2>
          </div>
        );
      })}
    </>
  );
};
export default getusers;
