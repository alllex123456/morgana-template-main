import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './MorganaCore/Modules/Header/WidgetCore';
import Hero from './MorganaCore/Modules/Hero/WidgetCore';
import { Theme } from './MorganaCore/theme';
import Button_1 from './MorganaCore/Atoms/Button_1';

const customTheme = new Theme();
customTheme.initFonts(`'DM Serif Display', serif`, `'Ubuntu', sans-serif`);
customTheme.initColors('#8abcd7', '#ecf8ff', '#ffffff', '#13122F');

const reuseItems = {
  button_1: Button_1,
};

let images = [
  '/images/hero-primary.png',
  '/images/image-back-dots.png',
  '/images/loader.jpg',
];

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
        buttonParam={{
          item: reuseItems.button_1,
          props: {
            textParam: 'Contactează-mă',
            customStyle: {
              backgroundColor: 'transparent',
              padding: '2rem 3rem',
              fontSizeParam: '1.8rem',
              fontWeight: '600',
              borderRadius: '2rem',
              border: `2px solid ${customTheme.colors.color_10}`,
              color: customTheme.colors.color_10,
            },
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
          primary: images[0],
          background: images[1],
          loader: images[2],
        }}
        buttonParam={{
          item: reuseItems.button_1,
          props: {
            textParam: 'Rezervă',
            customStyle: {
              backgroundColor: customTheme.colors.color_10,
              padding: '2rem 3rem',
              fontSize: '1.8rem',
              fontWeight: '600',
              borderRadius: '2rem',
              color: customTheme.colors.color_60,
              margin: '4rem 0',
              width: '20rem',
            },
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
