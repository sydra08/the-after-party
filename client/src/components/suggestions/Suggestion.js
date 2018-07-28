import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
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
  root: {
    width: '100%',
  },
  card: {
    // marginLeft: 20,
    width: 300,
    // minWidth: 275,
    maxHeight: 250,
    // height: 250,
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
              {name}
            </Typography>
            <Typography variant="subheading" component="textSecondary" className={classes.pos}>
              <ThumbUpIcon className={classes.leftIcon} />
              Likes: {upvotes} &nbsp; | &nbsp;
              <ThumbDownIcon className={classes.leftIcon} />
              Dislikes: {downvotes}
            </Typography>
            <Typography variant="subheading" color="textSecondary" className={classes.pos}>
              {category.name}
            </Typography>
            <Typography variant="subheading" color="textSecondary" className={classes.pos}>
              {address.street}, {address.city}, {address.state}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({upvoteSuggestion: upvoteSuggestion, downvoteSuggestion: downvoteSuggestion}, dispatch);
};

export default compose(
   withStyles(styles), connect(null, mapDispatchToProps))(Suggestion);
