import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { cursor: "text" } });

const sizes = {
  lg: defineStyle({
    field: {
      fontSize: "11px",
      px: "10px",
      height: "42px",
    },
  }),
  md: defineStyle({
    field: {
      fontSize: "7px",
      px: "8px",
      height: "34px",
    },
  }),
  sm: defineStyle({
    field: {
      fontSize: "10px",
      height: "26px",
      px: "30px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "11px",
      px: "10px",
      height: "16px",
    },
  }),
};

const variants = {
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_400: {
        field: {
          borderColor: "gray.400",
          borderWidth: "1px",
          borderStyle: "solid",
          color: "gray.500",
        },
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_400"];
  }),
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        field: {
          bg: "white.a700",
        },
      },
      gray_200_02: {
        field: {
          bg: "gray.200_02",
          color: "black.900",
        },
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_200_02"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;
