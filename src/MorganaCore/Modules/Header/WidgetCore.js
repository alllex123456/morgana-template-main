import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigator = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  let logoImg = logoImgParam ? logoImgParam : DefaultLogo;
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

  const isActive = (iHash) => {
    return `/${location.hash}` === iHash;
  };

  return (
    <React.Fragment>
      <header
        className="header_mobile"
        style={{
          backgroundColor: theme.colors.color_60,
          fontFamily: theme.fonts.content,
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
              {links.map((el, index, array) => {
                if (index === array.length - 1) {
                  return buttonParam ? (
                    <buttonParam.item
                      key={index}
                      className="hero_button"
                      onClick={() => {
                        setMobileNavOpen(false);
                        navigator(el.href);
                      }}
                      {...buttonParam.props}
                    />
                  ) : (
                    <DefaultButton />
                  );
                }
                return (
                  <NavHashLink
                    to={el.href}
                    key={index}
                    style={
                      isActive(el.href)
                        ? {
                            color: theme.colors.font_dark,
                            fontWeight: 700,
                            borderBottom: '2px solid currentColor',
                          }
                        : { color: theme.colors.font_dark }
                    }
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {el.title}
                  </NavHashLink>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <header
        className="header_desktop"
        style={{
          backgroundColor: theme.colors.color_60,
        }}
      >
        <img className="header_logo" src={logoImg} alt="" />

        <nav className="header_nav">
          {links.map((el, index, array) => {
            if (index === array.length - 1) {
              return buttonParam ? (
                <buttonParam.item
                  key={index}
                  className="hero_button"
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigator(el.href);
                  }}
                  {...buttonParam.props}
                />
              ) : (
                <DefaultButton />
              );
            }
            return (
              <NavHashLink
                to={el.href}
                key={index}
                style={
                  isActive(el.href)
                    ? {
                        color: theme.colors.font_dark,
                        fontWeight: 700,
                        borderBottom: '2px solid currentColor',
                      }
                    : { color: theme.colors.font_dark }
                }
                onClick={() => setMobileNavOpen(false)}
              >
                {el.title}
              </NavHashLink>
            );
          })}
        </nav>
      </header>
    </React.Fragment>
  );
}

const DefaultButton = () => {
  return <button>Default</button>;
};
