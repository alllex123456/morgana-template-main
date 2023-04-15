import React from 'react';
import { motion } from 'framer-motion';
import DefaultLogo from './res/defaultLogo.png';
import { defaultTheme } from '../../../MorganaCore/theme';
import './style.css';

export default function Header({
  logoImgParam,
  linksParam,
  themeParam,
  buttonParam,
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

  let theme = themeParam ? themeParam : defaultTheme;
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        default: {
          duration: 1,
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

      {buttonParam ? (
        <buttonParam.item className="hero_button" {...buttonParam.props} />
      ) : (
        <DefaultButton />
      )}
    </motion.header>
  );
}

const DefaultButton = () => {
  return <button>Default</button>;
};
