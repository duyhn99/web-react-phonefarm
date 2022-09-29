import React from "react";
import MUIDataTable from "mui-datatables";
import { getMuiTheme, MuiStylesButton } from "../MuiStyles/MuiStyles";
import { ThemeProvider } from "@material-ui/core";

const Table = (props) => {
  console.log(props);
  const classes = MuiStylesButton();

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={props.title}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />
    </ThemeProvider>
  );
};

export default Table;
