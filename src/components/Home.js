import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import Navbar from "./Navbar";
import Header from "./Header";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    opacity: "0.4",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: { value: 45, density: { enable: true, value_area: 900 } },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 8,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      ></Particles>
    </Fragment>
  );
}

export default Home;
