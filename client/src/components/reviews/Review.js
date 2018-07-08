import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Review = (props) => {
  const { content, rating, classes } = props;
  return (
    <div className="review">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="title" gutterBottom>
            Content
          </Typography>
          <Typography component="p">
            {content}
           </Typography>
           <Typography className={classes.pos} color="textSecondary">
             Rating: {rating}
           </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(Review);
