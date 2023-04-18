import React from 'react';

const Button_1 = ({ textParam, customStyle, onClick }) => {
  let text = textParam ? textParam : 'default';

  return (
    <button style={customStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button_1;
