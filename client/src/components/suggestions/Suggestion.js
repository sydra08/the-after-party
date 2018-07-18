import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { upvoteSuggestion, downvoteSuggestion } from '../../actions/suggestionActions';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  card: {
    minWidth: 275,
    marginBottom: 12,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
Data
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
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="title" gutterBottom>
              Name: {name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Address: {address.street}, {address.city}, {address.state}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Category: {category.name}
            </Typography>
            <Typography component="p" className={classes.pos}>
              <ThumbUpIcon className={classes.leftIcon} />
              Likes: {upvotes} &nbsp; | &nbsp;
              <ThumbDownIcon className={classes.leftIcon} />
              Dislikes: {downvotes}
            </Typography>
            <Divider />
            <div align="center">
              <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleUpvote(event, suggestion)}>
                <ThumbUpIcon className={classes.leftIcon} />
                Like
              </Button>
              <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleDownvote(event, suggestion)}>
                <ThumbDownIcon className={classes.leftIcon} />
                Dislike
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({upvoteSuggestion: upvoteSuggestion, downvoteSuggestion: downvoteSuggestion}, dispatch);
};

export default compose(
   withStyles(styles), connect(null, mapDispatchToProps))(Suggestion);
