import { createMuiTheme } from '@material-ui/core/styles';
import { red, brown, teal } from '@material-ui/core/colors';
import colors from './colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
      contrastText: colors.WHITE,
    },
    secondary: {
      main: brown[400],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: colors.WHITE,
    },
  },
});

export default theme;
