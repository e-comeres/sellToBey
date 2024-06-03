import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const getprodact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dataprodact } = location.state;

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
