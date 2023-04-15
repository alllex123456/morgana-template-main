import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './MorganaCore/Modules/Header/WidgetCore';
import Hero from './MorganaCore/Modules/Hero/WidgetCore';
import { Theme } from './MorganaCore/theme';
import Button_1 from './MorganaCore/Atoms/Button_1';
import Button_2 from './MorganaCore/Atoms/Button_2';

const customTheme = new Theme();
customTheme.initFonts(`'DM Serif Display', serif`, `'Ubuntu', sans-serif`);
customTheme.initColors('#8abcd7', '#ecf8ff', '#ffffff', '#13122F');

const reuseItems = {
  button_1: Button_1,
  button_2: Button_2,
};

let images = { hero: { ref: 'main', location: '/img-hero.jpg', alt: '' } };

const Home = () => {
  return (
    <>
      <Header
        themeParam={customTheme}
        logoImgParam="/logo.jpg"
        linksParam={[
          {
            title: 'Acasă',
            href: '#acasa',
          },
          {
            title: 'Despre',
            href: '#despre',
          },
          {
            title: 'Servicii',
            href: '#servicii',
          },
        ]}
        button={{
          item: reuseItems.button_1,
          props: {
            textParam: 'Contactează-mă',
            bgColorParam: 'transparent',
            paddingParam: '2rem 3rem',
            fontSizeParam: '2rem',
            fontWeightParam: '600',
            borderRadiusParam: '2rem',
            borderParam: `2px solid ${customTheme.colors.color_10}`,
            colorParam: customTheme.colors.color_10,
          },
        }}
      />
      <Hero
        themeParam={customTheme}
        titleParam="Coaching și Consiliere
Parentală"
        textParam="Totul începe cu o idee. Poate vrei să lansezi o afacere. Poate vrei să transformi un hobby
în ceva mai mult. Sau poate ai un moment în care vrei să-ți reproiectezi cariera."
        imageParam={{
          main: '/img-hero.jpg',
        }}
        buttonParam={{
          item: reuseItems.button_2,
          props: {
            textParam: 'Rezervă',
            bgColorParam: customTheme.colors.color_10,
            paddingParam: '2rem 3rem',
            fontSizeParam: '1.8rem',
            fontWeightParam: '600',
            borderRadiusParam: '2rem',
            colorParam: customTheme.colors.color_60,
            marginParam: '4rem 0',
            widthParam: '20rem',
          },
        }}
      />
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Header themeParam={customTheme} />
      <Header />
      <Header />
      <Header />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
