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
  let button = buttonParam ? buttonParam : <DefaultButton />;

  return (
    <div
      id="acasa"
      className="section hero"
      style={{
        backgroundColor: theme.colors.color_60,
        color: theme.colors.font_dark,
        fontFamily: theme.fonts.content,
      }}
    >
      <div className="hero_text">
        <h1
          className="hero_title"
          style={{
            fontFamily: theme.fonts.title,
          }}
        >
          {title}
        </h1>
        <p className="hero_content">{text}</p>
        <button.item {...button.props} />
      </div>

      <div className="section_img--container hero_img--container">
        <img
          className="section_img--background"
          src={imageParam.background}
          alt=""
        />
        <img className="section_img--primary" src={imageParam.primary} alt="" />
        <div
          className="hero_img--foreground"
          style={{ background: theme.colors.color_60 }}
        >
          <div className="hero_img--foreground_loader">
            <img src={imageParam.loader} alt="" />
            <span>98%</span>
          </div>
          <p>Success</p>
        </div>
      </div>
    </div>
  );
};

const DefaultButton = () => {
  return <button>default button</button>;
};

export default WidgetCore;
