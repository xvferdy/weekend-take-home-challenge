import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
  },
  appBar: {
    // padding: 3,
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  wknd: {
    flexGrow: 1,
  },
  version: {
    borderRadius: 25,
    border: "2px solid white",
    paddingLeft: 4,
    paddingRight: 4,
    opacity: "60%",
  },
}));

function CustomAppBar({
  footer,
  avatar,
  salam,
  salam2,
  team,
  yearCreated,
  version,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {footer ? (
        <AppBar elevation={0} position="static" color="secondary">
          <Toolbar>
            <Container>
              <Grid container className={classes.toolbar}>
                <Grid item className={classes.wknd}>
                  <Typography variant="caption">
                    <Typography
                      variant="subtitle2"
                      style={{ display: "inline" }}
                    >
                      <Box component="span" fontWeight="fontWeightBold">
                        {team}
                      </Box>
                    </Typography>
                    {yearCreated}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" className={classes.version}>
                    <Box component="span" fontWeight="fontWeightLight">
                      {version}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar elevation={0} position="static">
          <Toolbar>
            <Container>
              <Grid container className={classes.toolbar}>
                <Grid item>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    alt="My Cool Avatar"
                    src={avatar}
                  />
                </Grid>
                <Grid item style={{ marginTop: "-3px" }}>
                  <Typography variant="caption">{salam}</Typography>
                  <Typography variant="subtitle2">
                    <Box
                      component="span"
                      fontWeight="fontWeightBold"
                      style={{ display: "block" }}
                    >
                      {salam2}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}

export default CustomAppBar;
