import React, { cloneElement, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import LogoSVG from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [tab, setTab] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [anchor, setAnchor] = useState(null);
  const [open, setOpen] = useState(false);

  const MENU_OPTIONS = [
    {
      name: "Service",
      link: "/services",
    },
    {
      name: "Custom Software development",
      link: "/customsoftware",
    },
    {
      name: "Mobile App Development",
      link: "/mobileApps",
    },
    {
      name: "Website Development",
      link: "/websites",
    },
  ];

  function handleMenuItemClick(e, idx) {
    setAnchor(null);
    setOpen(false);
    setSelectedIdx(idx);
  }
  function handleClick(e) {
    setAnchor(e.currentTarget);
    setOpen(true);
  }

  function handleClose(e) {
    setAnchor(null);
    setOpen(false);
  }

  const tabs = {
    HOME: "/",
    SERVICES: "/services",
    MOBILEAPPS: "/mobileApps",
    CUSTOM_SOFT: "/customsoftware",
    WEBSITES: "/websites",
    REVOLUTION: "/revolution",
    ABOUTUS: "/about",
    CONTACT: "/contact",
    ESTIMATE: "/estimate",
  };

  function handlePageRefresh() {
    let route = window.location.pathname;
    if (route === tabs.HOME && tab !== 0) setTab(0);
    else if (route === tabs.SERVICES && tab !== 1) setTab(1);
    else if (route === tabs.REVOLUTION && tab !== 2) setTab(2);
    else if (route === tabs.ABOUTUS && tab !== 3) setTab(3);
    else if (route === tabs.CONTACT && tab !== 4) setTab(4);
    else if (route === tabs.ESTIMATE && tab !== 5) setTab(5);

    switch (route) {
      case tabs.HOME: {
        if (tab !== 0) {
          setTab(0);
        }
        break;
      }

      case tabs.SERVICES: {
        if (tab !== 1) {
          setTab(1);
          setSelectedIdx(0);
        }
        break;
      }
      case tabs.CUSTOM_SOFT: {
        if (tab !== 1) {
          setTab(1);
          setSelectedIdx(1);
        }
        break;
      }

      case tabs.MOBILEAPPS: {
        if (tab !== 1) {
          setTab(1);
          setSelectedIdx(2);
        }
        break;
      }

      case tabs.WEBSITES: {
        if (tab !== 1) {
          setTab(1);
          setSelectedIdx(3);
        }
        break;
      }

      case tabs.REVOLUTION: {
        if (tab !== 2) setTab(2);
        break;
      }

      case tabs.ABOUTUS: {
        if (tab !== 3) setTab(3);
        break;
      }

      case tabs.CONTACT: {
        if (tab !== 4) setTab(4);
        break;
      }

      case tabs.ESTIMATE: {
        if (tab !== 5) setTab(5);
        break;
      }

      default:
        break;
    }
  }

  useEffect(() => {
    handlePageRefresh();
  }, [tab]);

  const tabs_ = (
    <>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        indicatorColor="secondary"
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="Services"
          onMouseOver={(e) => handleClick(e)}
          component={Link}
          to="/services"
        />
        <Tab className={classes.tab} label="Revolution" component={Link} to="/revolution" />
        <Tab className={classes.tab} label="About us" component={Link} to="/about" />
        <Tab className={classes.tab} label="Contact us" component={Link} to="/contact" />
        <Tab className={classes.tab} label="Estimate" component={Link} to="/estimate" />
      </Tabs>

      <Button
        variant="contained"
        color="secondary"
        className={classes.btn}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        classes={{
          paper: classes.menu,
        }}
        // PaperProps={{
        //   style: {
        //     left: 50,
        //     transform: "translateX(-35%) translateY(45%)",
        //   },
        // }}
        elevation={0}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {MENU_OPTIONS.map((each, idx) => {
          return (
            <MenuItem
              key={idx}
              classes={{
                root: classes.menuItem,
              }}
              onClick={(e) => {
                handleMenuItemClick(e, idx);
                setTab(1);
                handleClose();
              }}
              component={Link}
              to={each.link}
              selected={idx === selectedIdx && tab === 1}
            >
              {each.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters className={classes.toolbarMargin}>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={() => setTab(0)}
            >
              <img className={classes.logoImg} src={LogoSVG} alt="company logo" />
            </Button>
            {mdScreen ? null : tabs_}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};
