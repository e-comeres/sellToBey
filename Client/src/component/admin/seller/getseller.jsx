import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const getseller = () => {
  const location = useLocation();
  const { dataseller } = location.state;
  const navigate = useNavigate();
  return (
    <div>
      {dataseller.map((el) => {
        return (
          <div>
            <h2>{el.username}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default getseller;
