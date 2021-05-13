import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginNav: {
    margin: "0px 10px",
  },
  navAction: {
    backgroundColor: "#cd2",
  },

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar sp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color=""
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <NavLink exact to="/" activeClassName={classes.navAction}>
            <Typography
              variant="h6"
              className={(classes.title, classes.marginNav)}
            >
              Trang chủ
            </Typography>
          </NavLink>
          <NavLink to="/movie-detail" activeClassName={classes.navAction}>
            <Typography
              variant="h6"
              className={(classes.title, classes.marginNav)}
            >
              Chi tiết
            </Typography>
          </NavLink>
          <NavLink to="/sign-in" activeClassName={classes.navAction}>
            <Typography
              variant="h6"
              className={(classes.title, classes.marginNav)}
            >
              Đăng nhập
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
