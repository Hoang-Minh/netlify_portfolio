import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": { color: "tomato" },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, email, company);
    setNote("Thank you. Your feedback has been submit");
  };

  const renderNote = () => {
    if (note) {
      return (
        <Typography
          variant="subtitle2"
          style={{
            color: "tomato",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {note}
        </Typography>
      );
    }
  };

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar></Navbar>

      <Grid container justify="center">
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <form
            className={classes.form}
            onSubmit={(event) => handleSubmit(event)}
          >
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Contact Me
            </Typography>
            {renderNote()}

            <InputField
              required={true}
              fullWidth={true}
              label="Name"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
              value={name}
              onChange={(event) => handleNameChange(event)}
            ></InputField>
            <br></br>
            <InputField
              required={true}
              fullWidth={true}
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
              value={email}
              onChange={(event) => handleEmailChange(event)}
            ></InputField>
            <br></br>
            <InputField
              fullWidth={true}
              label="Company Name"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
              value={company}
              onChange={(event) => handleCompanyChange(event)}
            ></InputField>
            <br></br>

            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Your Message"
              style={{ width: "100%", height: "50%" }}
              rowsMin={8}
              value={message}
              onChange={(event) => handleMessageChange(event)}
            />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon></SendIcon>}
              type="submit"
            >
              Contact Me
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
