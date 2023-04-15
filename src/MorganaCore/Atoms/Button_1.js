import React from 'react';

export default function Button_1({
  textParam,
  bgColorParam,
  paddingParam,
  fontSizeParam,
  fontWeightParam,
  borderRadiusParam,
  borderParam,
  colorParam,
}) {
  let text = textParam ? textParam : 'default';

  return (
    <button
      style={{
        backgroundColor: bgColorParam ? bgColorParam : 'red',
        padding: paddingParam ? paddingParam : '0px 0px',
        fontSize: fontSizeParam ? fontSizeParam : '3rem',
        fontWeight: fontWeightParam ? fontWeightParam : '500',
        borderRadius: borderRadiusParam ? borderRadiusParam : '5px',
        border: borderParam ? borderParam : '1px solid black',
        color: colorParam ? colorParam : 'black',
      }}
    >
      {text}
    </button>
  );
}
