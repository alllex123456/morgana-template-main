import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';
import './style.css';

const WidgetCore = ({
  themeParam,
  titleParam,
  textParam,
  cardParam,
  imageParam,
  buttonParam,
}) => {
  let theme = themeParam ? themeParam : defaultTheme;

  return (
    <motion.header
      id="despre"
      className="section offer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: {
          duration: 1,
        },
      }}
      style={{
        color: theme.colors.font_dark,
      }}
    >
      <div
        className="offer_main"
        style={{
          background: theme.colors.color_30,
        }}
      >
        <h3
          style={{
            fontFamily: theme.fonts.title,
          }}
        >
          {titleParam}
        </h3>
        <p
          style={{
            fontFamily: theme.fonts.content,
          }}
        >
          {textParam}
        </p>
      </div>
    </motion.header>
  );
};

const DefaultButton = () => {
  return <button>default</button>;
};

export default WidgetCore;
