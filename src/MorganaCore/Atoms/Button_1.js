import React from 'react';

const Button_1 = ({ type, textParam, customStyle, onClick, disabled }) => {
  let text = textParam ? textParam : 'default';

  return (
    <button
      type={type}
      style={customStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button_1;
