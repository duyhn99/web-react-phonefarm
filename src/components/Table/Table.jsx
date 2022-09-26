import React from "react";
import MUIDataTable from "mui-datatables";
import { getMuiTheme, MuiStylesButton } from "../MuiStyles/MuiStyles";
import { ThemeProvider } from "@material-ui/core";

const Table = () => {
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

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["Joe James1", "Test Corp", "Yonkers", "NY"],
    ["John Walsh1", "Test Corp", "Hartford", "CT"],
    ["Bob Herm1", "Test Corp", "Tampa", "FL"],
    ["James Houston1", "Test Corp", "Dallas", "TX"],
    ["Joe James2", "Test Corp", "Yonkers", "NY"],
    ["John Walsh2", "Test Corp", "Hartford", "CT"],
    ["Bob Herm2", "Test Corp", "Tampa", "FL"],
    ["James Houston2", "Test Corp", "Dallas", "TX"],
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
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
};

export default Table;
