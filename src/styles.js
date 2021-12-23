import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    minHeight: "100vh",
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  desktop: {
    "& > *": {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
      paddingTop: "2%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        margin: theme.spacing(0, 2),
      },
      marginBottom: theme.spacing(3),
      paddingBottom: "50px",
    },
  },
  footer: {
    backgroundColor: "#001529",
    padding: "10px 0",
  },
}));
