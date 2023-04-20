import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';

import './style.css';

const Parenting = ({ themeParam, titleParam, imageParam, textParams }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let image = imageParam ? imageParam : {};
  let text = textParams ? textParams : 'Default text';

  return (
    <div
      className="section coaching"
      style={{
        backgroundColor: theme.colors.color_30,
        color: theme.colors.font_dark,
        fontFamily: theme.fonts.content,
      }}
    >
      <div className="coaching_text">
        <h2
          className="coaching_title"
          style={{
            fontFamily: theme.fonts.title,
          }}
        >
          {title}
        </h2>

        {text.map((text, index) => (
          <p key={index} className="coaching_content">
            {text}
          </p>
        ))}
      </div>
      <div className="section_img--container">
        <img
          className="section_img--background"
          src={image.background}
          alt=""
        />
        <img className="section_img--primary" src={image.primary} alt="" />
      </div>
    </div>
  );
};

export default Parenting;
