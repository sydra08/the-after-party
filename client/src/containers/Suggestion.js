import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteSuggestion, downvoteSuggestion } from '../actions/suggestionActions';
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
  constructor(props) {
    super(props);

    this.state = {
      suggestionId: this.props.suggestionId,
      upvotes: this.props.upvotes,
      downvotes: this.props.downvotes
    }
  }

  handleUpvote = (event) => {
    // how do you even tell it what the new total of votes is?
    // how come the state update isn't logging properly?
    console.log("old total")
    console.log(this.state.upvotes)
    console.log("Like button was pressed")
    const newUpvoteTotal = (this.state.upvotes) + 1;
    this.setState(Object.assign({}, this.state, {upvotes: newUpvoteTotal}))
    console.log("new total")
    console.log(this.state.upvotes)
    // need to send the suggestionId when you call upvote
  }

  handleDownvote = (event) => {
    console.log("old total")
    console.log(this.state.downvotes)
    console.log("Dislike button was pressed")
    const newDownvoteToal = (this.state.downvotes) + 1;
    this.setState(Object.assign({}, this.state, {downvotes: newDownvoteToal}))
    console.log("new total")
    console.log(this.state.downvotes)
    // need to send the suggestionId when you call downvote
  }

  render(){
    console.log("Suggestion component")
    const { name, category, address, upvotes, downvotes, classes } = this.props;
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
              <Button variant="contained" color="primary" className={classes.button} onClick={this.handleUpvote}>
                <ThumbUpIcon className={classes.leftIcon} />
                Like
              </Button>
              <Button variant="contained" color="primary" className={classes.button} onClick={this.handleDownvote}>
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

export default withStyles(styles)(Suggestion);
