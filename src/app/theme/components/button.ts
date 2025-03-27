import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  md: defineStyle({
    h: "32px",
    fontSize: "12px",
    px: "10px",
  }),
  sm: defineStyle({
    h: "28px",
    px: "2px",
  }),
  lg: defineStyle({
    h: "40px",
    px: "10px",
  }),
  xl: defineStyle({
    h: "44px",
    px: "4px",
  }),
  xs: defineStyle({
    h: "24px",
    fontSize: "12px",
    px: "34px",
  }),
};

const variants = {
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_700: {
        borderColor: "gray.700",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "black.900",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_700"];
  }),
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        bg: "white.a700",
        color: "black.900",
      },
      indigo_400: {
        bg: "indigo.400",
      },
      red_A200: {
        bg: "red.a200",
        color: "white.a700",
      },
      blue_700: {
        bg: "blue.700",
        color: "white.a700",
      },
      teal_400_02: {
        bg: "teal.400_02",
        color: "white.a700",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["white_A700"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
