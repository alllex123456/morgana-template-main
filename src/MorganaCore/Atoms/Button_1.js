import React from 'react';

export default function Button_1({ textParam, customStyle }) {
  let text = textParam ? textParam : 'default';

  return <button style={customStyle}>{text}</button>;
}
