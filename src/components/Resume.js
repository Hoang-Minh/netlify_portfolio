import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: { color: "tomato", padding: "3rem 0", textTransform: "uppercase" },
  subHeading: { color: "white", padding: "0", transform: "uppercase" },
}));

function Resume() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar></Navbar>
      <Box className={classes.mainContainer} component="header">
        <Typography className={classes.heading} variant="h4" align="center">
          Working Exp
        </Typography>
        <Box className={classes.timeLine} component="div">
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2016 - Present
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Home
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "white" }}
            >
              Built a bunch of projects, mostly in MERN stack to improve my
              skill sets since I have been transitioned myself into a full stack
              developer. Able to write code both in front end and backend.
              Please see the Portfolio section for more updates.
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2018 – July 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Software Enginer Developer in Test - SDET
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              CCC Information Services
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "white" }}
            >
              Got result from Azure Dev Ops and analyze them Used appium .Net
              framework to develop and automate test cases for Android and IOS
              platform Worked with MS test to write test for API testing and
              micro services Managed and updated our automation website, built
              with MEN stack, to help out our daily task, such as query build,
              executing build and display result on dashboard
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2016 - April 2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Software Automation Engineer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Schneider Electric
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "white" }}
            >
              Identified defects based on reading user stories or new defect
              story. Managed and automated the automation framework in .NET
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            2014 - March 2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Intern - Software Engineer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Invensys (merged with Schenider Electric later)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "white" }}
            >
              Worked with other full time developers to mange and develop our
              software application in .Net
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Resume;
