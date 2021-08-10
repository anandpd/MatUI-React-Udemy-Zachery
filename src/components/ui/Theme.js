import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      color: "#ffff",
    },
  },
});

export default theme;
