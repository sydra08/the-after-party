import React from 'react';
import '../App.css';
import { withStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

const Home = () => {
  return (
    <div className="home">
      <div id="banner">
        <Typography variant="headline" component="h1">
          The After Party
        </Typography>
      </div>
      <p>Check out reviews for different concert venues.</p>
      <p>Get ideas for where to go before or after the show.</p>
      <p>Images: <a href="https://www.pexels.com/">Pexels</a></p>
    </div>
  )
}

export default withStyles(styles)(Home);
