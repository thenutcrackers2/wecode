import React from "react";
import "../Introduce/Introduce.scss";
import { useNavigate } from "react-router-dom";

const introduce = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/product");
  };

  function handleInput() {
    console.log("input 태그동작!");
  }

  return (
    <div className="introduce">
      <div className="logobox">
        <h1 className="text">wecode</h1>
      </div>
      <p className="name">이기태</p>
      <p className="th">43기</p>
      <form>
        <input type="text" onChange={handleInput} />
        <button type="button" className="loginButton" onClick={goToProduct}>
          클릭
        </button>
      </form>
    </div>
  );
};

export default introduce;
