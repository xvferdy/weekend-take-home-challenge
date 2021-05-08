import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// components
import CustomAppBar from "./components/CustomAppBar";
import Slider from "./components/Slider";
import Tips from "./components/Tips";

// material-ui
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button, Box } from "@material-ui/core";

// file + images
import "./App.css";
import myData from "./utils/myData";
import Background from "./assets/bg-1@2x.png";
import buttonHero from "./assets/bitmap.png";
import edgeImage from "./assets/group-4.png";
import blueCirc from "./assets/oval.png";
import potato from "./assets/path-3.png";
import footerImage from "./assets/group-3.png";

const useStyles = makeStyles((theme) => ({
  section_first: {
    paddingTop: 150,
    paddingBottom: 120,
    textAlign: "center",
  },
  background_png: {
    backgroundColor: "#eebece",
    backgroundImage: "url(" + Background + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  },
  judul: {
    color: "white",
    fontSize: 54,
  },
  button_container: {
    paddingTop: 67,
    display: "inline-block",
    position: "relative",
  },
  button_container_button: {
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 58,
    width: 231,
  },
  section_definition: {
    backgroundColor: "#eebece",
    textAlign: "right",
  },
  edgeImage: {
    display: "flex",
    flexDirection: "row-reverse",
    marginRight: "-60px",
  },
  section_container_edgeImage: {
    backgroundColor: "black",
  },

  edgeImage_right: {
    marginBottom: "-4px",
    marginTop: "-35px",
  },
  praragraph: {
    display: "inline",
  },
  container2: {
    color: "white",
    backgroundColor: "black",
    paddingBottom: 100,
    textAlign: "center",
  },
  subJudul: {
    paddingBottom: 30,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#0B24FB",
    },
  },
  typography: {
    fontFamily: "Work Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButtonBase: {
      // disableRipple: true,
    },
  },
});

function App() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const {
    sectionAppBar,
    sectionFooter,
    sectionHeroPage,
    sectionQuote,
    sectionTestimonial,
    sectionPov,
    sectionResource,
    sectionHelpTips,
    sectionClose,
  } = myData;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.background_png}>
          {/* Section App Bar */}
          {/* CUSTOM APPBAR COMPONENT */}
          <CustomAppBar
            avatar={sectionAppBar.avatar}
            salam={sectionAppBar.salam}
            salam2={sectionAppBar.salam2}
          />

          {/* START OF CONTENT */}
          <Container>
            <Grid container justify="center">
              {/* Section Hero Page */}
              <Grid item className={classes.section_first}>
                <Typography className={classes.judul}>
                  <Box component="span" fontWeight="fontWeightBold">
                    {sectionHeroPage.judul}
                  </Box>
                </Typography>
                <Typography style={{ color: "white" }}>
                  <Box
                    component="span"
                    fontWeight="fontWeightMedium"
                    fontStyle="italic"
                  >
                    {sectionHeroPage.desc}
                  </Box>
                </Typography>
                <figure className={classes.button_container}>
                  <img src={buttonHero} alt="myPhoto"></img>
                  <Button
                    variant="contained"
                    className={classes.button_container_button}
                    disableElevation
                  >
                    Let's Go
                  </Button>
                </figure>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* Right Edge Image */}
        <Grid container className={classes.section_definition}>
          <Grid item className={classes.edgeImage} xs={12}>
            <img src={edgeImage} alt="myPhoto" />
          </Grid>
        </Grid>

        <div className={classes.section_definition}>
          <Container>
            {/* section Quote */}
            <Grid
              container
              className={classes.section_definition}
              justify="center"
            >
              <Grid item xs={9} sm={8}>
                <Typography
                  style={{ display: "inline", color: "blue", fontSize: "16px" }}
                >
                  {sectionQuote.blueText}{" "}
                </Typography>
                <Typography className={classes.praragraph}>
                  {sectionQuote.text}
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    marginTop: "30px",
                  }}
                  data-aos="fade-left"
                >
                  <Box component="span" fontStyle="italic">
                    {sectionQuote.person}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* Blue */}
        <Grid container style={{ backgroundColor: "#eebece" }}>
          <Grid
            item
            style={{ marginLeft: "20%", paddingBottom: "30px" }}
            xs={12}
          >
            <img src={blueCirc} alt="myPhoto" />
          </Grid>
        </Grid>

        {/* @@@@@***====pErBaTaSaN====***@@@@@ */}

        <div
          style={{
            background: "linear-gradient(180deg, #eebece 10%, #000 10%)",
          }}
        >
          <Container>
            {/* Section Testimonial */}
            <Grid
              container
              className={classes.container2}
              style={{
                paddingTop: "30px",
                backgroundColor: "inherit ",
              }}
              justify="center"
            >
              <Grid item xs={12} md={10} data-aos="fade-up">
                <Typography variant="h4" className={classes.subJudul}>
                  <Box component="span" fontWeight="fontWeightBold">
                    {sectionTestimonial.judul}
                  </Box>
                </Typography>

                {/* SLIDER COMPONENT */}
                <Slider apiUrl={sectionTestimonial.apiData} />
              </Grid>
            </Grid>

            {/* Section POV */}
            <Grid container className={classes.container2} justify="center">
              <Grid item xs={11} sm={10} md={8}>
                <Typography variant="h4" className={classes.subJudul}>
                  <Box component="span" fontWeight="fontWeightBold">
                    {sectionPov.judul}
                  </Box>
                </Typography>
                <Typography align="justify">{sectionPov.desc}</Typography>
              </Grid>
            </Grid>

            {/* Section Resource */}
            <Grid container className={classes.container2} justify="center">
              <Grid item xs={11} sm={10} md={8}>
                <Typography variant="h4" className={classes.subJudul}>
                  <Box component="span" fontWeight="fontWeightBold">
                    {sectionResource.judul}
                  </Box>
                </Typography>
                <Typography align="justify">{sectionResource.desc}</Typography>
              </Grid>
            </Grid>

            {/* Potato */}
            <Grid container style={{ marginBottom: "-13%" }} justify="center">
              <Grid item xs={11} align="right">
                <img src={potato} alt="myPhoto" />
              </Grid>
            </Grid>

            {/* Section Help & Tips */}
            <Grid container className={classes.container2} justify="center">
              <Grid item xs={12} sm={11}>
                <Typography variant="h4" className={classes.subJudul}>
                  <Box component="span" fontWeight="fontWeightBold">
                    {sectionHelpTips.judul}
                  </Box>
                </Typography>

                {/* TIPS COMPONENT */}
                <Tips apiUrl={sectionHelpTips.apiData} />
              </Grid>
            </Grid>

            {/* Section Close */}
            <Grid container className={classes.container2} justify="center">
              <Grid item xs={11} sm={10} md={8} data-aos="fade-up">
                <Typography variant="h4" className={classes.subJudul}>
                  <Box component="span" fontWeight="fontWeightBold">
                    {sectionClose.judul}
                  </Box>
                </Typography>
                <Typography>{sectionClose.desc}</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* Left Edge Image */}
        <Grid container className={classes.section_container_edgeImage}>
          <Grid item className={classes.edgeImage_right} xs={12}>
            <img src={footerImage} alt="myPhoto" />
          </Grid>
        </Grid>
        {/* END OF CONTENT */}

        {/* CUSTOM APPBAR COMPONENT */}
        <CustomAppBar
          footer
          team={sectionFooter.team}
          yearCreated={sectionFooter.yearCreated}
          version={sectionFooter.version}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
