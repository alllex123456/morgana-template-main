import React from 'react';
import { motion } from 'framer-motion';
import DefaultLogo from './res/defaultLogo.png';
import { defaultTheme } from '../../../MorganaCore/theme';
import './style.css';

export default function Header({
  logoImgParam,
  linksParam,
  themeParam,
  button,
}) {
  let logoImg = logoImgParam ? logoImgParam : DefaultLogo; //
  let links = linksParam
    ? linksParam
    : [
        {
          title: 'Default 1',
          href: '#acasa',
        },
        {
          title: 'default 2',
          href: '#despre',
        },
      ];
  // let ButtonEl = buttonParam ? buttonParam.item :DefaultButton - nu inteleg, butonul ca parametru e trecut "button"
  let theme = themeParam ? themeParam : defaultTheme;
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      style={{
        backgroundColor: theme.colors.color_60,
      }}
    >
      <img className="header_logo" src={logoImg} alt="" />

      <nav className="header_nav">
        {links.map((el, index) => {
          return (
            <a
              key={index}
              style={{ color: theme.colors.font_dark }}
              href={el.href}
            >
              {el.title}
            </a>
          );
        })}
      </nav>

      {button ? (
        <button.item className="hero_button" {...button.props} />
      ) : (
        <DefaultButton />
      )}
    </motion.header>
  );
}

const DefaultButton = () => {
  return <button>Default</button>;
};
