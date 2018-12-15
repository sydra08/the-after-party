import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addSuggestion } from '../../actions/suggestionActions';
import { fetchCategories } from '../../actions/categoryActions';
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

class SuggestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      upvotes: 1,
      downvotes: 0,
      vote: "Like",
      venue_id: this.props.venueId,
      category_attributes: {
        name: ""
      },
      address_attributes: {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("suggestion was submitted")
    console.log(this.state);
    this.props.addSuggestion(this.state)

    this.setState({
      name: '',
      upvote: "1",
      downvote: "0",
      vote: "Like",
      venue_id: this.props.venueId,
      category_attributes: {
        name: "Fast Casual"
      },
      address_attributes: {
        street: '',
        city: '',
        state: ''
      }
    });
  }

  handleNameChange = (event) => {
    const value = event.target.value;

    this.setState({
      name: value,
    });
  }

  // for address fields - only adds the last field you enter into state
  // need to figure out how to deal with the nested attributes
  // don't want to have an event handler for each property

  handleStreetChange = (event) => {
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: value, city: this.state.address_attributes.city, state: this.state.address_attributes.state }}));
  }

  handleCityChange = (event) => {
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: value, state: this.state.address_attributes.state }}));
  }

  handleStateChange = (event) => {
    const value = event.target.value;

    this.setState(Object.assign({}, this.state, { address_attributes: { street: this.state.address_attributes.street, city: this.state.address_attributes.city,state: value }}));
  }

  handleVoteChange = (event) => {
    // this works fine
    const value = event.target.value;
    if (value === "Like"){
      this.setState(Object.assign({}, this.state, {upvote: "1", downvote: "0", vote: "Like"}))
    } else if (value === "Dislike"){
      this.setState(Object.assign({}, this.state, {upvote: "0", downvote: "1", vote: "Dislike"}))
    }
  }

  handleCategoryChange = (event) => {
    // this only sets a value if you choose something other than the default
    const value = event.target.value;
    this.setState(Object.assign({}, this.state, { category_attributes: {name: value}}))
  }

  render () {
    console.log("SuggestionForm component")
    console.log(this.props)
    console.log("state:")
    console.log(this.state)
    const { classes, categories } = this.props;

    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography variant="title" align="left" gutterBottom>
              Share a suggestion:
            </Typography>

            <form autoComplete="off" onSubmit={this.handleSubmit} className={classes.container}>
              <TextField
                id="suggestion-name"
                name="name"
                label="Name"
                value={this.state.name}
                onChange={(event) => this.handleNameChange(event)}
                className={classes.textField}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="suggestion-address-street"
                name="street"
                label="Street"
                value={this.state.address_attributes.street}
                onChange={this.handleStreetChange}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="suggestion-address-city"
                name="city"
                label="City"
                value={this.state.address_attributes.city}
                onChange={this.handleCityChange}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="suggestion-address-state"
                name="state"
                label="State"
                value={this.state.address_attributes.state}
                onChange={this.handleStateChange}
                className={classes.textField}
                margin="normal"
              />
              <FormControl className={classes.formControl}>
                <Select
                  value={this.state.category}
                  onChange={this.handleCategoryChange}
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
                  value={this.stat}
                  onChange={this.handleVoteChange}
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
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  }
}

export default compose(
   withStyles(styles), connect(mapStateToProps, { addSuggestion, fetchCategories }))(SuggestionForm);


// const SuggestionForm = (props) => {
//   console.log("SuggestionForm component")
//   console.log(props)
//   const { handleSubmit,name, handleNameChange, addressStreet, handleStreetChange, addressCity, handleCityChange, addressState,
//   handleStateChange, category, handleCategoryChange, vote,   handleVoteChange, classes, categories } = props;
//
//   return (
//     <div className={classes.root}>
//       <Card>
//         <CardContent>
//           <Typography variant="title" align="left" gutterBottom>
//             Share a suggestion:
//           </Typography>
//
//           <form autoComplete="off" onSubmit={handleSubmit} className={classes.container}>
//             <TextField
//               id="suggestion-name"
//               name="name"
//               label="Name"
//               value={name}
//               onChange={handleNameChange}
//               className={classes.textField}
//               margin="normal"
//               fullWidth
//               required
//             />
//             <TextField
//               id="suggestion-address-street"
//               name="street"
//               label="Street"
//               value={addressStreet}
//               onChange={handleStreetChange}
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               id="suggestion-address-city"
//               name="city"
//               label="City"
//               value={addressCity}
//               onChange={handleCityChange}
//               className={classes.textField}
//               margin="normal"
//             />
//             <TextField
//               id="suggestion-address-state"
//               name="state"
//               label="State"
//               value={addressState}
//               onChange={handleStateChange}
//               className={classes.textField}
//               margin="normal"
//             />
//             <FormControl className={classes.formControl}>
//               <Select
//                 value={category}
//                 onChange={handleCategoryChange}
//                 displayEmpty
//                 name="Category"
//                 className={classes.selectEmpty}
//               >
//               <MenuItem value="" disabled>
//                 Select Category...
//               </MenuItem>
//               {categories.map((category, index) => <MenuItem key={index} value={category.name}>{category.name}</MenuItem>)}
//               </Select>
//             </FormControl>
//             <FormControl component="fieldset" className={classes.formControl}>
//               <RadioGroup
//                 aria-label="vote"
//                 name="vote"
//                 className={classes.group}
//                 value={vote}
//                 onChange={handleVoteChange}
//                 row
//               >
//               <FormControlLabel value="Like" control={<Radio />} label="Like" />
//               <FormControlLabel value="Dislike" control={<Radio />} label="Dislike" />
//               </RadioGroup>
//             </FormControl>
//             <Button className={classes.button} type="submit">Submit</Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
//
// export default withStyles(styles)(SuggestionForm);
