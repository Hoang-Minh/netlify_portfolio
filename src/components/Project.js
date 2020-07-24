import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

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

function Project({ alt, image, title, content, link, code }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} md={4}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={alt}
            height="140"
            image={image}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => (window.location.href = `${code}`)}
          >
            Source Code
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => (window.location.href = `${link}`)}
          >
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

//https://agile-forest-75094.herokuapp.com/
export default Project;
