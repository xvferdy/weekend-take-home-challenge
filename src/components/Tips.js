import React from "react";
import useFetchState from "../hooks/useFetchState";

import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Box,
} from "@material-ui/core/";

import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Tips({ apiUrl }) {
  const classes = useStyles();
  const [apiData, isloading] = useFetchState(apiUrl);

  return (
    <>
      {isloading ? (
        <GridList
          className={classes.gridList}
          className={classes.root}
          spacing={10}
        >
          {apiData.map((tip) => (
            <GridListTile style={{ width: "311px" }} key={tip.id}>
              <img src={tip.image} alt="Tips" />
              <GridListTileBar
                subtitle={
                  <Box component="span" fontWeight="fontWeightMedium">
                    {tip.title}
                  </Box>
                }
                actionIcon={
                  <IconButton className={classes.icon}>
                    <LaunchIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <p style={{ textAlign: "center", margin: "auto", padding: "70px" }}>
          Loading Tips..............
        </p>
      )}
    </>
  );
}

export default Tips;
