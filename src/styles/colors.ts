import styles from "./_common.module.scss";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const Primary = styles.Primary,
  Success = styles.Success,
  Hold = styles.Hold,
  Error = styles.Error,
  Dark200 = styles.Dark200,
  Dark100 = styles.Dark100,
  Dark50 = styles.Dark50,
  Dark25 = styles.Dark25,
  White = styles.White;

export {
  Primary,
  Success,
  Hold,
  Error,
  Dark200,
  Dark100,
  Dark50,
  Dark25,
  White
};

export const AppMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: Primary,
      contrastText: White
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    grey: {
      50: Dark50,
      100: Dark100,
      200: Dark200
    },
    secondary: {
      light: Primary,
      main: Primary,
      // dark: will be calculated from palette.secondary.main,
      contrastText: Primary
    }
    // error: will use the default color
  }
});
