import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../../MorganaCore/theme';

import './style.css';

const WidgetCore = ({ themeParam, infoParams, buttonParam }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let info = infoParams ? infoParams : [];
  let button = buttonParam ? buttonParam : <DefaultButton />;

  return (
    <div
      className="section meeting"
      style={{
        backgroundColor: theme.colors.color_10,
        color: theme.colors.font_dark,
        fontFamily: theme.fonts.content,
      }}
    >
      <div className="meeting_data">
        {info.map((slice, index) => (
          <div key={index} className="meeting_slice">
            <img src={slice.icon} alt="" />
            <p>{slice.title}</p>
            <p>{slice.text}</p>
          </div>
        ))}
      </div>

      <button.item {...button.props} />
    </div>
  );
};

const DefaultButton = () => {
  return <button>default button</button>;
};

export default WidgetCore;
