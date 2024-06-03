import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
const getseller = ({ dataseller }) => {
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
      {dataseller.map((el) => {
        return (
          <div>
            <h2
              onClick={() => {
                navigate("/oneseller", { state: { el: el } });
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

export default getseller;
