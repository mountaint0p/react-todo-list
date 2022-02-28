import React from "react";
import { extendTheme } from "@chakra-ui/react";
import { darken, mode, whiten } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const Button = {
  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "white",
      _hover: {
        bg: mode(darken("primary", 20), whiten("primary", 20))(props),
        boxShadow: mode("0 0 2px 2px red", "lg")(props),
      },
    }),
  },
};
export const myNewTheme = extendTheme({
  colors: {
    primary: "#845EC2",
    secondary: "#FF6F91",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
  components: {
    Button,
  },
});
