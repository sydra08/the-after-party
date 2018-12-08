import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

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
    margin: theme.spacing.unit,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  button: {
    margin: theme.spacing.unit,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const SuggestionForm = (props) => {
  console.log("SuggestionForm component")
  console.log(props)
  const { handleSubmit,name, handleNameChange, addressStreet, handleStreetChange, addressCity, handleCityChange, addressState,
  handleStateChange, category, handleCategoryChange, vote,   handleVoteChange, classes, categories, error } = props;

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="title" align="left" gutterBottom>
            Share a suggestion:
          </Typography>
          <Typography variant="title" align="left" gutterBottom>
            { error }
          </Typography>
          <form autoComplete="off" onSubmit={handleSubmit} className={classes.container}>
            <TextField
              id="suggestion-name"
              name="name"
              label="Name"
              value={name}
              onChange={handleNameChange}
              className={classes.textField}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              id="suggestion-address-street"
              name="street"
              label="Street"
              value={addressStreet}
              onChange={handleStreetChange}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="suggestion-address-city"
              name="city"
              label="City"
              value={addressCity}
              onChange={handleCityChange}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="suggestion-address-state"
              name="state"
              label="State"
              value={addressState}
              onChange={handleStateChange}
              className={classes.textField}
              margin="normal"
            />
            <FormControl className={classes.formControl}>
              <Select
                value={category}
                onChange={handleCategoryChange}
                displayEmpty
                name="Category"
                className={classes.selectEmpty}
              >
              <MenuItem value="" disabled>
                Select Category...
              </MenuItem>
              {categories.map((category, index) => <MenuItem key={index} value={category.name}>{category.name}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="vote"
                name="vote"
                className={classes.group}
                value={vote}
                onChange={handleVoteChange}
                row
              >
              <FormControlLabel value="Like" control={<Radio />} label="Like" />
              <FormControlLabel value="Dislike" control={<Radio />} label="Dislike" />
              </RadioGroup>
            </FormControl>
            <Button className={classes.button} type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SuggestionForm);
