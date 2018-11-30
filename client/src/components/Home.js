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
        <Typography variant="subheading" component="subtitle2">
          Your source for concert venue reviews
        </Typography>
        <Typography variant="subheading" component="subtitle2">
          and where to go before and after the show.
        </Typography>
        <Typography variant="caption" component="caption">
          Images: <a href="https://www.pexels.com/">Pexels</a>
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Home);
