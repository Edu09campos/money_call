import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";
import styles from "./styles";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Money Call" subheader="Made by Eduardo Campos!" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $
          <span className={balance < 0 ? classes.negative : classes.positive}>
            {balance}
          </span>
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
