import React from 'react';
import Suggestion from './Suggestion.js';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    flexgrow: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const SuggestionList = (props) => {
  console.log("SuggestionList component")
  const { suggestions, classes, handleUpvote, handleDownvote } = props;
  return(
    <div className={classes.root}>
      <Typography variant="headline" component="h3">
        Suggestions
      </Typography>
      <Grid container spacing={24}>
        {suggestions.map((suggestion, index) => <Grid item key={index} xs={6} sm={3}><Suggestion suggestion={suggestion} /></Grid>)}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SuggestionList);
