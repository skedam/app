import { Text, Heading, Input, Button, Textarea } from "./components";
import { colors, shadows, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "550px",
    md: "1050px",
    lg: "1440px",
  },
  colors,
  shadows,
  fonts,
  components: { Text, Heading, Input, Button, Textarea },
});
export default theme;
