import React from 'react';
import { motion } from 'framer-motion';

import './style.css';
import { defaultTheme } from '../../theme';

const WidgetCore = ({ themeParam, titleParam, textParam, imageParam }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let text = textParam ? textParam : [];

  return (
    <>
      <div
        id="despre"
        className="section about"
        style={{
          background: theme.colors.color_30,
          color: theme.colors.font_dark,
        }}
      >
        <div className="section_img--container">
          <img
            className="section_img--background"
            src={imageParam.background}
          />
          <img className="section_img--primary" src={imageParam.primary} />
        </div>

        <div className="about_text">
          <h2
            className="about_title"
            style={{
              fontFamily: theme.fonts.title,
            }}
          >
            {title}
          </h2>
          {text.map((content, index) => (
            <p
              key={index}
              className="about_content"
              style={{
                fontFamily: theme.fonts.content,
              }}
            >
              {content}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default WidgetCore;
