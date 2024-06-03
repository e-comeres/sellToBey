import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const getprodact = ({ dataprodact }) => {
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
      {dataprodact.map((el) => {
        return (
          <div>
            <h2
              onClick={() => {
                navigate("/oneprodact", { state: { el: el } });
              }}
            >
              {el.name}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default getprodact;
