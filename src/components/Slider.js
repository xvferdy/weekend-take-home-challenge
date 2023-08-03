import React from "react";
import Carousel from "react-elastic-carousel";
import useFetchState from "../hooks/useFetchState";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  testimonial_card: {
    width: 247,
    height: 150,
    background: "#fff",
    color: "#000",
    fontSize: 30,
    margin: "0 5px",
    padding: 20,
    textAlign: "left",
  },
  nama: {
    paddingBottom: 20,
  },
  detail: {
    fontSize: 12,
  },
});

function Slider({ apiUrl }) {
  const classes = useStyles();
  const [apiData, isLoaded] = useFetchState(apiUrl);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
  ];

  const localData = [
    {
      id: 1,
      by: "Raymond",
      testimony:
        "I love startup! This is an amazing service and it has saved me and my small business so much time.",
    },
    {
      id: 2,
      by: "Chika",
      testimony:
        "agency is the ultimate time saver for small business owners like me.",
    },
    {
      id: 3,
      by: "Jarles",
      testimony:
        "I would recommend weekend for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
      id: 4,
      by: "Dansi",
      testimony:
        "I have tried a lot of similar products and weekend is the best!",
    },
    {
      id: 5,
      by: "Muerta",
      testimony:
        "I have been using weekend for over a year now and I love it! I can't imagine life without it.",
    },
    {
      id: 6,
      by: "Thomas",
      testimony: "Weekend is exactly what I've been looking for.",
    },
  ];

  return (
    <>
      {isLoaded ? (
        <Carousel breakPoints={breakPoints}>
          {apiData.map((testi) => (
            <div className={classes.testimonial_card} key={testi.id}>
              <Typography className={classes.nama} variant="h4">
                <Box component="span" fontWeight="fontWeightBold">
                  {testi.by}
                </Box>
              </Typography>
              <Typography className={classes.detail}>
                <Box component="span" fontWeight="fontWeightLight">
                  {testi.testimony}
                </Box>
              </Typography>
            </div>
          ))}
        </Carousel>
      ) : (
        // <p style={{ textAlign: "center", margin: "auto", padding: "70px" }}>
        //   Loading Testimonies..............
        // </p>
        <Carousel breakPoints={breakPoints}>
          {localData.map((testi) => (
            <div className={classes.testimonial_card} key={testi.id}>
              <Typography className={classes.nama} variant="h4">
                <Box component="span" fontWeight="fontWeightBold">
                  {testi.by}
                </Box>
              </Typography>
              <Typography className={classes.detail}>
                <Box component="span" fontWeight="fontWeightLight">
                  {testi.testimony}
                </Box>
              </Typography>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default Slider;
