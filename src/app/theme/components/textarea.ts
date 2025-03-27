import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  sm: defineStyle({
    h: "58px",
    fontSize: "12px",
    p: "10px",
  }),
  xs: defineStyle({
    h: "58px",
    p: "10px",
  }),
};

const variants = {
  tarOutlineGray20001: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_200_01: {
        borderColor: "#ebebeb !important",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_200_01"];
  }),
};

const TextArea = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "tarOutlineGray20001",
    size: "sm",
  },
});
export default TextArea;
