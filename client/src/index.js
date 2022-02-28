import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { myNewTheme } from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={myNewTheme}>
      <ColorModeScript initialColorMode="./style/theme.config.useSystemColorMode" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
