import React from 'react';
import Suggestion from './Suggestion.js';
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const SuggestionList = (props) => {
  const { suggestions, classes } = props;
  return(
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Suggestions
        </Typography>
          {suggestions.map((suggestion, index) => <Suggestion key={index} name={suggestion.name} address={suggestion.address} category={suggestion.category} upvotes={suggestion.upvotes} downvotes={suggestion.downvotes} />)}
      </Paper>
    </div>
  );
}

export default withStyles(styles)(SuggestionList);
