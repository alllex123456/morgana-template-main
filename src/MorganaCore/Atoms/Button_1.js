import React from 'react';

export default function Button_1({ textParam, customStyle, onClick }) {
  let text = textParam ? textParam : 'default';

  return (
    <button style={customStyle} onClick={onClick}>
      {text}
    </button>
  );
}
