import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function LightModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [colorIcon, setColorIcon] = React.useState(<FaSun />);
  React.useEffect(() => {
    if (colorMode === "light") setColorIcon(<FaMoon />);
    else setColorIcon(<FaSun />);
  }, [colorMode]);
  return (
    <>
      <IconButton
        icon={colorIcon}
        isRound="true"
        size="1g"
        onClick={toggleColorMode}
      />
    </>
  );
}

export default LightModeButton;
