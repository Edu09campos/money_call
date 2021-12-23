import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
  const classes = useStyles();
  const { deleteAllTransactions, balance, transactions } = useContext(
    ExpenseTrackerContext
  );

  const getColor = () => {
    if (balance < 0) {
      return classes.negative;
    } else if (balance === 0) {
      return classes.neutral;
    } else {
      return classes.positive;
    }
  };

  const clearHandler = () => {
    deleteAllTransactions();
  };

  const downloadFile = async () => {
    const fileName = `${new Date().toDateString()}-expense_tracker`;
    const json = JSON.stringify(transactions);
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Money Call" subheader="Made by Eduardo Campos!" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $<span className={getColor()}>{balance}</span>
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              fullWidth
              onClick={clearHandler}
            >
              Clear data
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={downloadFile}
            >
              Download
            </Button>
          </Grid>
        </Grid>
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
