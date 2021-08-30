
const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

export default Button


// const Button = {
//   // 1. We can update the base styles
//   baseStyle: {
//     fontWeight: "bold", // Normally, it is "semibold"
//   },
//   // 2. We can add a new button size or extend existing
//   sizes: {
//     xl: {
//       h: "56px",
//       fontSize: "lg",
//       px: "32px",
//     },
//   },
//   // 3. We can add a new visual variant
//   variants: {
//     "with-shadow": {
//       bg: "red.400",
//       boxShadow: "0 0 2px 2px #efdfde",
//     },
//     // 4. We can override existing variants
//     solid: (props: any) => ({
//       bg: props.colorMode === "dark" ? "red.300" : "red.500",
//     }),
//   },
// }