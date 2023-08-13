import React from "react";

interface Props{
    children : string;
    onClick :() => void;
    color? : 'primary' | 'secondary' | 'dark';
}
const Button = ({children, onClick, color='dark' }: Props) => {
  return (
    <>
      <button type="button" className={'btn btn-' + color} onClick={onClick}>
        children
      </button>
    </>
  );
};

export default Button;
