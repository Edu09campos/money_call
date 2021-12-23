import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <main>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "89vh" }}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <footer className={classes.footer}>
        <Typography
          variant="h6"
          style={{ color: "white", textAlign: "center" }}
        >
          Money Call <br /> Made with 💙 by Eduardo Campos,{" "}
          {new Date().getFullYear()} <br />
        </Typography>
      </footer>
    </main>
  );
}

export default App;
