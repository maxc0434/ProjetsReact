// import React from "react";

const CustomBtn = ({ children, pimpMyBtn, handleClick }) => {

  const myButton = {
    background: "grey",
    border: 'none',
    color: '#fff',
    fontSize: '19px',
    padding: '15px 30px',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '7px',
    display: 'block',
    margin: '5px auto',
  };

  // const pimpMyBtn = { ...myButton, ...style };

  return (
    <button style={{...myButton, ...pimpMyBtn}}
            onClick={handleClick} > {children} </button>
  );
}

export default CustomBtn;