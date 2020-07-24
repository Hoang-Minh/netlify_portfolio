import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Navbar from "./Navbar";
import Project from "./Project";
import movieApp from "../images/movieApp.png";
import emailMe from "../images/emailMe.png";
import covid19 from "../images/covid19.png";
import chatApp from "../images/chatApp.png";
import adviceApp from "../images/adviceApp.png";
import weatherApp from "../images/weatherApp.png";
import youtubeApp from "../images/youtubeApp.png";
import portfolioApp from "../images/portfolioApp.png";
import campground from "../images/campground.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

function Portfolio() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar></Navbar>
      <Grid container justify="center">
        <Project
          alt="YelpCampground"
          image={campground}
          title="YelpCampground"
          link="https://stark-waters-27841.herokuapp.com/"
          code="https://github.com/Hoang-Minh/YelpCamp"
          content="Looking for a beautiful campground in the US ? Look no futher. This website is built with mongodb, express and nodejs. Implemented with Google OAuth2, user would need to verify through email after registration before authorizing to access resource."
        ></Project>
        <Project
          alt="Movie App"
          image={movieApp}
          title="Movie App"
          link="https://agile-forest-75094.herokuapp.com/"
          code="https://github.com/Hoang-Minh/mern_movie_app"
          content="A movie app that is using themoviedb api to allow users to interact with other users through comments on their favorite movies. This application is implementing modern MERN stack with JSON web token for security. Beautiful UI with inifinite loop when browsing movies."
        ></Project>
        <Project
          alt="Survey Email App"
          image={emailMe}
          title="Survey App"
          link="https://cryptic-sea-54086.herokuapp.com/"
          code="https://github.com/Hoang-Minh/Emaily"
          content="This app allow users to create their own survey to send to a list of recipients to ask them about their feedbacks on a certain services so they can improve it in the future. Built with MERN stack, and logged in with Google OAuth 2.0 to increase security for the app."
        ></Project>

        <Project
          alt="Covid 19 Stats"
          image={covid19}
          title="Covid 19 Stats"
          link="https://nameless-taiga-47211.herokuapp.com/"
          code="https://github.com/Hoang-Minh/covid-19-tracking"
          content="Display a graph that quickly shows how many people are infected with Covid 19 on global scale, number of people who get recovered versus deaths. Also, so chart with different number based on country throughout the world"
        ></Project>

        <Project
          alt="Chat App"
          image={chatApp}
          title="Chat App"
          link="https://nameless-taiga-47211.herokuapp.com/"
          code="https://github.com/Hoang-Minh/chat_app"
          content="Allow users to chat with each other in real time. This app is implementing socket.io to make the interaction smoothly and provides good user interaction. Users can exchange their texts, also send their image or video"
        ></Project>

        <Project
          alt="Simple Advice App"
          image={adviceApp}
          title="Simple Advice App"
          link="https://hopeful-benz-d6952b.netlify.app/"
          code="https://github.com/Hoang-Minh/free-advice-app-react"
          content="A really simple advice that generates random advice/funny/inspiring quotes that hopes can cheer someone up on their rough day !!!"
        ></Project>

        <Project
          alt="PWA Weather App"
          image={weatherApp}
          title="PWA Weather App"
          link="https://quizzical-galileo-95cd9d.netlify.app/"
          code="https://github.com/Hoang-Minh/weather-pwa-react"
          content="First time building a progressive web app. This app will display the current temperature based on user input - city, country or their location."
        ></Project>

        <Project
          alt="Simple Youtube Cloner"
          image={youtubeApp}
          title="Simple Youtube Cloner"
          link="https://unruffled-gates-5c1209.netlify.app/"
          code="https://github.com/Hoang-Minh/YoutubeClone"
          content="A really simple youtube cloner where user can search for their favorite movie. "
        ></Project>

        <Project
          alt="Portfolio Website"
          image={portfolioApp}
          title="Portfolio Website"
          link="https://mighty-spire-59999.herokuapp.com/"
          code="https://github.com/Hoang-Minh/mern_portfolio.git"
          content="A beautiful portfolio that you are seeing right now is built with React and Material UI"
        ></Project>
      </Grid>
    </Box>
  );
}

export default Portfolio;
