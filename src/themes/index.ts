import { extendTheme, ThemeConfig } from '@chakra-ui/react'


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({config})

export default theme




// import { extendTheme } from '@chakra-ui/react';

// import colors from './colors';
// import styles from './styles';

// const overrides = {
//   styles,
//   colors,
// };

// export default extendTheme(overrides);