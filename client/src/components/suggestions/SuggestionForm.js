import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
     display: 'flex',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  }
});

const SuggestionForm = (props) => {
  console.log("SuggestionForm component")
  console.log(props)
  const { handleSubmit,name, handleNameChange, addressStreet, handleStreetChange, addressCity, handleCityChange, addressState,
  handleStateChange, category, handleCategoryChange, vote,   handleVoteChange, classes } = props;

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="title" gutterBottom>
            Leave a review:
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit} className={classes.container}>
            <TextField
              id="suggestion-name"
              name="name"
              label="Suggestion Name"
              value={name}
              onChange={handleNameChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <Typography variant="body2" gutterBottom>
              Address:
            </Typography>
            <TextField
              id="suggestion-address-street"
              name="street"
              label="Street"
              value={addressStreet}
              onChange={handleStreetChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <TextField
              id="suggestion-address-city"
              name="city"
              label="City"
              value={addressCity}
              onChange={handleCityChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <TextField
              id="suggestion-address-state"
              name="state"
              label="State"
              value={addressState}
              onChange={handleStateChange}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <FormControl component="fieldset" className={classes.formControl}>
             <FormLabel component="legend">Category</FormLabel>
             <RadioGroup
               aria-label="category"
               name="category"
               className={classes.group}
               value={category}
               onChange={handleCategoryChange}
               >
               <FormControlLabel value="Fast Casual" control={<Radio />} label="Fast Casual" />
               <FormControlLabel value="Fast Food" control={<Radio />} label="Fast Food" />
               <FormControlLabel value="Beer Bar" control={<Radio />} label="Beer Bar" />
               <FormControlLabel value="Cocktail Bar" control={<Radio />} label="Cocktail Bar" />
              </RadioGroup>
             </FormControl>
             <FormControl component="fieldset" className={classes.formControl}>
             <FormLabel component="legend">Vote</FormLabel>
              <RadioGroup
                aria-label="vote"
                name="vote"
                className={classes.group}
                value={vote}
                onChange={handleVoteChange}
              >
                <FormControlLabel value="Like" control={<Radio />} label="Like" />
                <FormControlLabel value="Dislike" control={<Radio />} label="Dislike" />
              </RadioGroup>
            </FormControl>
            <div>
              <button type="submit">Submit Suggestion</button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SuggestionForm);
