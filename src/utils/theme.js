import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset-advanced';

const mainBrandColor = '#00bdfe';
const lightShades = '#FFF';
const darkAccent = '#111111';
const darkShades = ' #f7f7f7';
const lightCreamAccent = '#f1fbff';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightCreamAccent: '#f1fbff',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to  Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for invercoted designs.
  darkShades,
  borderColor: '#afafaf',
  // is-size-2export default
  // Background colors backgroundInputColor: darkShades,
  backgroundColor: darkShades,
  backgroundInputColor: darkShades,
  backgroundColorBlue: mainBrandColor,
  backgroundColorLight: lightCreamAccent,
  // Font sizes
  fontSizeBase: '15px',
  fontSizeSmall: '20px',
  fontSizeMedium: '30px',
  fontSizeLarge: '64px',

  // Text colors
  textColorBlue: mainBrandColor,
  textColorDark: darkAccent,
  textColorLite: lightShades,
  textGreyLighter: '#afafaf',

  dangerColor: '#f44336',
  humBurgerColor: '#cf1717',

  // FONTS FAMILY
  primaryFontFamily: "'Roboto', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.primaryFontFamily};

  }
  .has-text-grey-light {
    color: ${theme.textGreyLighter};
  }
  .has-text-white{
    color:${theme.textColorLite};
  }

  .has-text-dark{
    color:${theme.textColorDark};
  }
  .has-text-blue {
    color: ${theme.textColorBlue}!important;
  }  letter-spacing: 1px;
  .has-background-white-bis  {
    background-color: ${theme.backgroundColor};
  }
  .has-background-blue{
    background-color:${theme.backgroundColorBlue} !important;
    }
    .has-background-  letter-spacing: 1px;
  .text-base{
    font-size: ${theme.fontSizeBase};
  }
  .text-small {
    font-size: ${theme.fontSizeSmall};
  }
  .text-medium{
    font-size: ${theme.fontSizeMedium};
  }
  .text-large {
    font-size: ${theme.fontSizeLarge} !important;
  }

  .button:hover{
    background-color:${theme.mainBrandColor};
    color:${theme.textColorLite}!important;
  }
  .has-border-radius{
    border:1px solid ${theme.mainBrandColor};
    border-radius: 10px;
  }
  .button-is-primary{
    background-color:${theme.mainBrandColor} !important;
    color:${theme.textColorLite}!important;
    border-radius:50%;
  }
.navbar-item img {
  max-height: 3rem;
}
.has-background-image{
background-image: url('/images/banner-bg.jpg');
background-size:cover;
background-repeat: no-repeat;
}
hr{
  width:70%;
}
.border-radius-small{
  border-radius:13px;
}
.border-radius-medium{
  border-radius:30px;
}
.border-color{
  border:1px solid ${theme.borderColor};
  border-radius:15px !important;
}
.has-background-image1{
background-image: url('/images/closed-bg.jpg');
background-size:cover;
background-repeat: no-repeat;
}

`;
export default GlobalStyle;
