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
};


const Suggestion = (props) => {
  const { name, category, address, upvotes, downvotes, classes } = props;
  return (
    <div className="suggestion">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Name: {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Address: {address.street} | Category: {category.name}
          </Typography>
          <Typography component="p">
           Upvotes: {upvotes} | Downvotes: {downvotes}
         </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default withStyles(styles)(Suggestion);
