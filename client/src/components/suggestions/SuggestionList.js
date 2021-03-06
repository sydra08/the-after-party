import React from 'react';
import Suggestion from './Suggestion.js';
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
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
  const { suggestions, classes } = props;
  return(
    <div className={classes.root}>
      <Grid container spacing={8}>
        {suggestions.map((suggestion, index) =>
          <Grid item key={index} sm>
            <Suggestion suggestion={suggestion} />
          </Grid>)}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SuggestionList);
