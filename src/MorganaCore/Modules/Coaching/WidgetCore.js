import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../../MorganaCore/theme';

import './style.css';

const Coaching = ({ themeParam, titleParam, imageParam, textParams }) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let title = titleParam ? titleParam : 'Default Title';
  let image = imageParam ? imageParam : {};
  let text = textParams ? textParams : 'Default text';

  return (
    <motion.div
      id="acasa"
      className="section coaching"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: {
          duration: 1,
        },
      }}
      style={{
        backgroundColor: theme.colors.color_30,
        color: theme.colors.font_dark,
      }}
    >
      <div className="section_img--container">
        <img
          className="section_img--background"
          src={image.background}
          alt=""
        />
        <img className="section_img--primary" src={image.primary} alt="" />
      </div>
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
          <p
            key={index}
            className="coaching_content"
            style={{
              fontFamily: theme.fonts.content,
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Coaching;
