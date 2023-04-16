import React from 'react';
import { motion } from 'framer-motion';

import './style.css';
import { defaultTheme } from '../../theme';

const WidgetCore = ({ themeParam, titleParam, textParam, imageParam }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'default';
  let text = textParam ? textParam : {};

  return (
    <>
      <motion.div
        id="despre"
        className="section about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: {
            duration: 1,
          },
        }}
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

          <p
            className="about_content"
            style={{
              fontFamily: theme.fonts.content,
            }}
          >
            {text.p1}
          </p>
          <p
            className="about_content"
            style={{
              fontFamily: theme.fonts.content,
            }}
          >
            {text.p2}
          </p>
          <p
            className="about_content"
            style={{
              fontFamily: theme.fonts.content,
            }}
          >
            {text.p3}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default WidgetCore;
