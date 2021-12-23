import React, { useState, useContext } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";
import SnackBar from "../../SnackBar/SnackBar";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setformData] = useState(initialState);
  const [error, setError] = useState(0);
  const [errorMessage, seterrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const classes = useStyles();
  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransaction = () => {
    if (formData.amount === "") {
      setError(1);
      seterrorMessage("Invalid Amount!");
      return;
    } else if (formData.category === "") {
      setError(2);
      seterrorMessage("Invalid category selected!");
      return;
    } else if (formData.date === "") {
      setError(3);
      seterrorMessage("Invalid date selected!");
      return;
    }

    setOpen(true);

    const trans = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };

    addTransaction(trans);
    setformData(initialState);
    setError(0);
    seterrorMessage("");
  };

  return (
    <Grid container spacing={2}>
      <SnackBar open={open} setOpen={setOpen} />
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setformData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            error={error === 2}
            value={formData.category}
            onChange={(e) =>
              setformData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((cat) => (
              <MenuItem key={cat.type} value={cat.type}>
                {cat.type}
              </MenuItem>
            ))}
          </Select>
          {error === 2 && (
            <FormHelperText style={{ color: "red" }}>
              Please select a category!
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={error === 1}
          helperText={error === 1 && errorMessage}
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setformData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={error === 3}
          helperText={error === 3 && errorMessage}
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setformData({ ...formData, date: e.target.value })}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
