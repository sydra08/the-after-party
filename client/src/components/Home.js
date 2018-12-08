import React from 'react';
import '../App.css';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

const Home = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" align="center">
          The After Party
        </Typography>
        <Typography variant="subheading" align="center">
          Your source for concert venue reviews
        </Typography>
        <Typography variant="subheading" align="center">
          and where to go before and after the show.
        </Typography>
      </Paper>
      <div className="home">
      </div>
      <Typography variant="caption" align="right">
        Image: <a href="https://www.pexels.com/">Pexels</a>
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Home);
