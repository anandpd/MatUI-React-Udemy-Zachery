import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logoImg: {
    height: 90,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      height: "5.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  btn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    margin: "0 25px 0 50px",
    height: 45,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));
