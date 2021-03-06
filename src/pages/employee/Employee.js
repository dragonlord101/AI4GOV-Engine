import React from "react";
import {
  Grid,
  Button
} from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import Table from "./components/Table/Table";

export default function Dashboard(props) {
  var classes = useStyles();

  return (
    <>
      <PageTitle 
        title="Employees" 
        color="black"
        button={
          <Button
            variant="contained"
            size="small"
            color="primary"
          >
              Latest Reports
          </Button>} 
      />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
