import React from 'react';
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

const Suggestion = (props) => {
  console.log("Suggestion component")
  const { name, category, address, upvotes, downvotes, classes, handleUpvote, handleDownvote } = props;
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
            Likes: {upvotes} &nbsp;
            <ThumbDownIcon className={classes.leftIcon} />
            Dislikes: {downvotes}
          </Typography>
          <Divider />
          <Button variant="contained" color="primary" className={classes.button} onClick={handleUpvote}>
            <ThumbUpIcon className={classes.leftIcon} />
            Like
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleDownvote}>
            <ThumbDownIcon className={classes.leftIcon} />
            Dislike
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(Suggestion);
