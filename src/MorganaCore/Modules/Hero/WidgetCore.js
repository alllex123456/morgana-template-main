import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../../MorganaCore/theme';

import './style.css';

const WidgetCore = ({
  themeParam,
  titleParam,
  textParam,
  buttonParam,
  imageParam,
}) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let text = textParam ? textParam : 'Default text';
  let button = buttonParam ? buttonParam : '<DefaultButton />';

  return (
    <motion.div
      className="hero"
      style={{
        backgroundColor: theme.colors.color_60,
      }}
    >
      <div className="hero_text">
        <h3
          className="hero_title"
          style={{
            fontFamily: theme.fonts.title,
          }}
        >
          {title}
        </h3>
        <p
          className="hero_content"
          style={{
            fontFamily: theme.fonts.content,
          }}
        >
          {text}
        </p>
        <button.item {...button.props} />
      </div>

      <img className="hero_img--main" src={imageParam.main}></img>
    </motion.div>
  );
};

const DefaultButton = () => {
  return <button>default button</button>;
};

export default WidgetCore;
