import React from 'react';
import { motion } from 'framer-motion';
import { defaultTheme } from '../../theme';

import './style.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const WidgetCore = ({
  themeParam,
  imageParam,
  iconsParam,
  linksParam,
  addressParam,
  copyrightParam,
  textParam,
}) => {
  let theme = themeParam ? themeParam : defaultTheme;
  let image = imageParam ? imageParam : '';
  let icons = iconsParam ? iconsParam : [];
  let links = linksParam ? linksParam : [];
  let address = addressParam ? addressParam : '';
  let copyright = copyrightParam ? copyrightParam : '';
  let text = textParam ? textParam : '';

  return (
    <div
      id="despre"
      className="section footer"
      style={{
        color: theme.colors.color_10,
        backgroundColor: theme.colors.color_60,
        fontFamily: theme.fonts.content,
      }}
    >
      <div className="footer_links">
        <div className="footer_links--logo">
          <img src={image} alt="" />
          <p>{address}</p>
        </div>
        <div className="footer_links--nav">
          <div>
            {links.slice(0, 2).map((link, index) => (
              <HashLink
                key={index}
                to={link.href}
                style={{
                  color: theme.colors.color_10,
                }}
              >
                {link.title}
              </HashLink>
            ))}
          </div>
          <div>
            {links.slice(2).map((link, index) => (
              <HashLink
                key={index}
                to={link.href}
                style={{
                  color: theme.colors.color_10,
                }}
              >
                {link.title}
              </HashLink>
            ))}
          </div>
        </div>

        <div className="footer_links--social">
          <p>{text}</p>
          <div className="footer_links--social_icons">
            {icons.map((icon, index) => (
              <Link key={index} to={icon.href} target="_blank">
                <img src={icon.img} alt={icon.label} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="footer_copyright">{copyright}</p>
    </div>
  );
};

export default WidgetCore;
