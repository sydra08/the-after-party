import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { upvoteSuggestion, downvoteSuggestion } from '../../actions/suggestionActions';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const styles = theme => ({
  card: {
    width: 300,
    maxHeight: 250,
    marginBottom: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 8
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 16,
  }
});

class Suggestion extends Component {
  handleUpvote = (event, suggestion) => {
    console.log("old total")
    console.log(suggestion.upvotes)
    console.log("Like button was pressed")
    const newUpvoteTotal = suggestion.upvotes + 1;
    this.props.upvoteSuggestion(suggestion, newUpvoteTotal);
  }

  handleDownvote = (event, suggestion) => {
    console.log("old total")
    console.log(suggestion.downvotes)
    console.log("Dislike button was pressed")
    const newDownvoteTotal = suggestion.downvotes + 1;
    this.props.downvoteSuggestion(suggestion, newDownvoteTotal);
  }

  render(){
    console.log("Suggestion component props")
    console.log(this.props)
    const { suggestion, classes } = this.props;
    const { name, category, address, upvotes, downvotes } = suggestion;
    return (
      <div className="suggestion">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="title" gutterBottom>
              {name}
            </Typography>
            <Typography variant="button" color="textSecondary" className={classes.pos}>
              {category.name}
            </Typography>

            <Typography variant="subheading" color="textSecondary" className={classes.pos}>
              {address.street}, {address.city}, {address.state}
            </Typography>

            <Typography variant="subheading" color="primary" className={classes.pos}>
              <ThumbUpIcon className={classes.leftIcon} />
              Likes: {upvotes} &nbsp; | &nbsp;
              <ThumbDownIcon className={classes.leftIcon} />
              Dislikes: {downvotes}
            </Typography>

          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleUpvote(event, suggestion)}>
              <ThumbUpIcon className={classes.leftIcon} />
              Like
            </Button>
            <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleDownvote(event, suggestion)}>
              <ThumbDownIcon className={classes.leftIcon} />
              Dislike
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default compose(
   withStyles(styles), connect(null, { upvoteSuggestion, downvoteSuggestion }))(Suggestion);
