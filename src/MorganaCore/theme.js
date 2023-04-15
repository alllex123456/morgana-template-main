export class Theme {
  constructor() {
    this.colors = {};
    this.fonts = {};
  }
  initColors(color_60, color_30, color_10, font_dark) {
    this.colors = {
      color_60,
      color_30,
      color_10,
      font_dark,
    };
  }
  initFonts(title, content) {
    this.fonts = {
      title,
      content,
    };
  }
}

export const defaultTheme = new Theme();
defaultTheme.initFonts('Helvetica', 'Verdana');
defaultTheme.initColors('#ff0000', '#00ff00', '#0042ff', '#000');
