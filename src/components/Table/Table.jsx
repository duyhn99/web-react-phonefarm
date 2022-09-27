import React from "react";
import MUIDataTable from "mui-datatables";
import { getMuiTheme, MuiStylesButton } from "../MuiStyles/MuiStyles";
import { ThemeProvider } from "@material-ui/core";

const Table = (props) => {
  console.log(props);
  const classes = MuiStylesButton();

  const columns = [
    {
      name: "Name",
    },
    {
      name: "Company",
    },
    {
      name: "City",
    },
    {
      name: "State",
    },
    {
      name: "Option",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <button
                className={`${classes.buttonDanger} ${classes.button}`}
                onClick={(e) => {
                  console.log(value);
                  e.stopPropagation();
                }}
              >
                Delete
              </button>
              &nbsp;
              <button
                className={`${classes.buttonEdit} ${classes.button}`}
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`);
                }}
              >
                Edit
              </button>
            </>
          );
        },
      },
    },
  ];

  const options = {
    download: false,
    print: false,
    filter: false,
    sort: true,
    rowsPerPage: 5,
    selectableRows: "none",
    onRowClick: (rowData, rowMeta) => {
      console.log(rowData);
      console.log(rowMeta);
    },
  };
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
