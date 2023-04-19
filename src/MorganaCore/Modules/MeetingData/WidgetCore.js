import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../../MorganaCore/theme';

import './style.css';

const WidgetCore = ({ themeParam, infoParams, buttonParam }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let info = infoParams ? infoParams : [];
  let button = buttonParam ? buttonParam : <DefaultButton />;

  return (
    <motion.div
      id="acasa"
      className="section meeting"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: {
          duration: 1,
        },
      }}
      style={{
        backgroundColor: theme.colors.color_10,
        color: theme.colors.font_dark,
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
    </motion.div>
  );
};

const DefaultButton = () => {
  return <button>default button</button>;
};

export default WidgetCore;
