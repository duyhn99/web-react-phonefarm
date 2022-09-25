import React from "react";
import MUIDataTable from "mui-datatables";

const Table = () => {
  const columns = [
    "Name",
    "Company",
    "City",
    "State",
    {
      name: "Delete",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              onClick={() => {
                const { data } = this.state;
                data.shift();
                this.setState({ data });
              }}
            >
              Delete
            </button>
          );
        },
      },
    },
    {
      name: "Edit",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              onClick={() =>
                window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)
              }
            >
              Edit
            </button>
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
    rowsPerPage: 5,
    onRowClick: (rowData, rowMeta) => {
      console.log(rowData);
      console.log(rowMeta);
    },
  };
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Table;
