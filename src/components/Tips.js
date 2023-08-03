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
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Tips({ apiUrl }) {
  const classes = useStyles();
  const [apiData, isloading] = useFetchState(apiUrl);

  const localData = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Startup with AI powered",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1659132814891-ef346422b339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80",
      title: "Elephanting like pro",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1690748229084-2dc65e12d84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Ultimate house painting",
    },
  ];

  return (
    <>
      {isloading ? (
        <GridList className={classes.root} spacing={10}>
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
        // <p style={{ textAlign: "center", margin: "auto", padding: "70px" }}>
        //   Loading Tips..............
        // </p>
        <GridList className={classes.root} spacing={10}>
          {localData.map((tip) => (
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
      )}
    </>
  );
}

export default Tips;
