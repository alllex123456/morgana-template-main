import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './MorganaCore/Modules/Header/WidgetCore';
import Hero from './MorganaCore/Modules/Hero/WidgetCore';
import About from './MorganaCore/Modules/About/WidgetCore';
import Offer from './MorganaCore/Modules/Offer/WidgetCore';
import Reviews from './MorganaCore/Modules/Reviews/WidgetCore';
import Footer from './MorganaCore/Modules/Footer/WidgetCore';

import { Theme } from './MorganaCore/theme';
import Button_1 from './MorganaCore/Atoms/Button_1';

const customTheme = new Theme();
customTheme.initFonts(`'DM Serif Display', serif`, `'Ubuntu', sans-serif`);
customTheme.initColors('#8abcd7', '#ecf8ff', '#ffffff', '#13122F');

const reuseItems = {
  button_1: Button_1,
};

let images = [
  '/images/logo-mindcon.png',
  '/images/hero-primary.png',
  '/images/image-back-dots.png',
  '/images/loader.jpg',
  '/images/african-american-business-woman.png',
  '/images/section-back-dots.png',
  '/images/mental-health 1.png',
  '/images/family 1.png',
  'images/chichi.png',
  'images/rita.jpg',
  'images/gloria.jpg',
];

const Home = () => {
  return (
    <>
      <Header
        themeParam={customTheme}
        logoImgParam={images[0]}
        linksParam={[
          {
            title: 'Acasă',
            href: '/',
          },
          {
            title: 'Despre',
            href: '#despre',
          },
          {
            title: 'Servicii',
            href: '/servicii',
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
          primary: images[1],
          background: images[2],
          loader: images[3],
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
      <About
        themeParam={customTheme}
        titleParam="Eu sunt Cezara"
        textParam={{
          p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.',
          p2: 'Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies euurna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet acpurus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.',
          p3: 'Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies euurna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet acpurus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.',
        }}
        imageParam={{
          primary: images[4],
          background: images[5],
        }}
      />
      <Offer
        themeParam={customTheme}
        titleParam="Cu ce te pot ajuta"
        textParam="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus"
        cardParam={{
          cardIcon1: images[6],
          cardIcon2: images[7],
          cardTitle1: 'Coaching',
          cardTitle2: 'Consiliere parentală',
          cardText1:
            'Suna simplu, insa cat de multe ingrijorari pot veni la pachet cu aceste schimbari? De cate ori te-ai surprins spunandu-ti „nu pot”, „n-o sa mearga”, „nu acum”, „n-o sa reusesc”? Diferenta dintre idee si actiune o face lucrul cu aceste mesaje interioare, care desi sunt firesti, ne pot sabota potentialul si pot bloca actiuna.',
          cardText2:
            'Te voi ajuta să creezi o relație psihologică și emoțională sănătoasă cu copilul tău pe baza modelelor parentale dezvoltate și testate de-a lungul anilor de cei mai cunoscuți psihoterapeuți din România, pentru a obține un spațiu de dezvoltare sigur, sănătos, armonios pentru copilul tău și pentru întreaga familie.',
        }}
        buttonParam={{
          item: reuseItems.button_1,
          props: {
            textParam: 'Mai multe',
            customStyle: {
              backgroundColor: customTheme.colors.color_60,
              padding: '1.5rem 3rem',
              fontSize: '1.6rem',
              fontWeight: '600',
              borderRadius: '1.5rem',
              color: customTheme.colors.color_10,
              margin: '0',
              width: 'max-content',
            },
          },
        }}
        imageParam={{ background: images[5] }}
      />
      <Reviews
        themeParam={customTheme}
        titleParam="Clienți"
        cardsParam={[
          {
            image: images[8],
            name: 'Chichi',
            country: 'South Africa',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et',
          },
          {
            image: images[9],
            name: 'Queen Rita',
            country: 'USA',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et',
          },
          {
            image: images[10],
            name: 'Gloria Uko',
            country: 'Nigeria',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et',
          },
        ]}
      />
      <Footer
        themeParam={customTheme}
        imageParam={images[0]}
        iconsParam={[
          {
            label: 'Twitter',
            href: 'www.twitter.com',
            img: '/images/Vector.png',
          },
          {
            label: 'Instagram',
            href: 'www.instagram.com',
            img: '/images/Vector (1).png',
          },
          {
            label: 'Facebook',
            href: 'www.facebook.com',
            img: '/images/Vector (2).png',
          },
          {
            label: 'LinkedIn',
            href: 'www.linkedin.com',
            img: '/images/Vector (3).png',
          },
        ]}
        addressParam="88/89 Peter Odili Road, Port Harcourt, Rivers State"
        linksParam={[
          {
            title: 'Acasă',
            href: '/',
          },
          {
            title: 'Despre',
            href: '#despre',
          },
          {
            title: 'Servicii',
            href: '/servicii',
          },
          {
            title: 'Contact',
            href: '/contact',
          },
          {
            title: 'Privacy policy',
            href: '/privacy',
          },
        ]}
        copyrightParam="© MindCon. All right reserved"
        textParam="Conectează-te cu mine"
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
