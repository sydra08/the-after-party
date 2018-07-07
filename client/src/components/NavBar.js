import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            The After Party
          </Typography>
          <Button component={Link} to='/venues' color="inherit">Venues</Button>
          <Button color="inherit">Suggestions</Button>
        </Toolbar>
    </div>
  );
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NavBar);


//
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <NavLink
//         to="/"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'darkblue'
//         }}
//       >Home</NavLink>
//       <NavLink
//         to="/venues"
//         style={link}
//         activeStyle={{
//           background: 'darkblue'
//         }}
//       >Venues</NavLink>
//     </div>
//   );
// };

// export default NavBar;
