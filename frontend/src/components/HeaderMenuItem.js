import { Icon, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HeaderMenuItem = ({ label, url, icon }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      textTransform="uppercase"
      mr="5"
      display="flex"
      alignItems="center"
      color="whitesmoke"
      fontWeight="bold"
      fontFamily="Arial Black"
      textDecor="none"
    >
      <Icon as={icon} mr="1" w="6" h="6" />
      {label}
    </Link>
  );
};

export default HeaderMenuItem;
