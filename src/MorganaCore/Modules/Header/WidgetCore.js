import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DotsThreeCircle, XCircle } from '@phosphor-icons/react';
import { NavHashLink } from 'react-router-hash-link';
import DefaultLogo from './res/defaultLogo.png';
import { defaultTheme } from '../../../MorganaCore/theme';
import './style.css';

export default function Header({
  logoImgParam,
  linksParam,
  themeParam,
  buttonParam,
}) {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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

  const mobileNavVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: {
        default: {
          duration: 1,
        },
      },
    },
  };
  const headerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        default: {
          duration: 1,
        },
      },
    },
  };

  const isActive = (el) => {
    let isActive;
    if (location.hash) {
      isActive = location.hash === el.href;
    } else {
      isActive = location.pathname === el.href;
    }
    return isActive
      ? {
          color: theme.colors.font_dark,
          fontWeight: 700,
          borderBottom: '2px solid currentColor',
        }
      : { color: theme.colors.font_dark };
  };

  return (
    <React.Fragment>
      <motion.header
        className="header_mobile"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundColor: theme.colors.color_60,
        }}
      >
        <DotsThreeCircle
          weight="thin"
          className="header_mobile--open_nav"
          style={{ color: theme.colors.color_30 }}
          onClick={() => setMobileNavOpen(true)}
        />

        <img className="header_logo" src={logoImg} alt="" />

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.nav
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                transition: {
                  default: {
                    duration: 1,
                  },
                },
              }}
              className="header_nav--mobile"
              style={{ background: theme.colors.color_60 }}
            >
              <XCircle
                weight="thin"
                className="header_mobile--close_nav"
                style={{
                  color: theme.colors.color_30,
                }}
                onClick={() => setMobileNavOpen(false)}
              />
              {links.map((el, index) => {
                return (
                  <NavHashLink
                    to={el.href}
                    key={index}
                    style={() => isActive(el)}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {el.title}
                  </NavHashLink>
                );
              })}
              {buttonParam ? (
                <buttonParam.item
                  className="hero_button"
                  onClick={() => setMobileNavOpen(false)}
                  {...buttonParam.props}
                />
              ) : (
                <DefaultButton />
              )}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
      <motion.header
        className="header_desktop"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundColor: theme.colors.color_60,
        }}
      >
        <img className="header_logo" src={logoImg} alt="" />

        <nav className="header_nav">
          {links.map((el, index) => {
            return (
              <NavHashLink to={el.href} key={index} style={() => isActive(el)}>
                {el.title}
              </NavHashLink>
            );
          })}
        </nav>

        {buttonParam ? (
          <buttonParam.item className="hero_button" {...buttonParam.props} />
        ) : (
          <DefaultButton />
        )}
      </motion.header>
    </React.Fragment>
  );
}

const DefaultButton = () => {
  return <button>Default</button>;
};
