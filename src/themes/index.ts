import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import colors from './colors';
import styles from './styles';
import Button from './components/button';
import Card from './components/card'


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// if you wanna customize a single chakra-UI component
const components = {
  Button,
  Card
}

// creating custom breakpoints
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})



const overrides = {
  styles,
  colors,
  config,
  breakpoints,
  components,
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
  textStyles : {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px", '84px'],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  
};

const theme = extendTheme(overrides)

export default theme




// import { extendTheme } from '@chakra-ui/react';

// import colors from './colors';
// import styles from './styles';

// const overrides = {
//   styles,
//   colors,
// };

// export default extendTheme(overrides);