import { Toolbar, Paper, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Controls from "~/components/controls/Controls";
import Table from "~/components/Table/Table";
import { MuiStylesButton } from "../../components/MuiStyles/MuiStyles";
import React, { useState } from "react";
import Popup from "~/components/Popup/Popup";
import FormPopup from "~/components/FormPopup/FormPopup";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    color: "red",
    position: "absolute",
    right: "0px",
  },
}));
const Scripts = () => {
  const classesMaterial = useStyles();

  const [openPopup, setOpenPopup] = useState(false);
  const classes = MuiStylesButton();

  const data = [
    ["Joe James", "Test Corp", "Yonkers"],
    ["John Walsh", "Test Corp", "Hartford"],
    ["Bob Herm", "Test Corp", "Tampa"],
    ["James Houston", "Test Corp", "Dallas"],
    ["Joe James1", "Test Corp", "Yonkers"],
    ["John Walsh1", "Test Corp", "Hartford"],
    ["Bob Herm1", "Test Corp", "Tampa"],
    ["James Houston1", "Test Corp", "Dallas"],
    ["Joe James2", "Test Corp", "Yonkers"],
    ["John Walsh2", "Test Corp", "Hartford"],
    ["Bob Herm2", "Test Corp", "Tampa"],
    ["James Houston2", "Test Corp", "Dallas"],
  ];
  const columns = [
    {
      name: "Tên kịch bản",
    },
    {
      name: "Người tạo ",
    },
    {
      name: "Ngày tạo",
    },
    {
      name: "Hành động",
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
    onRowClick: (rowData, rowMeta) => {},
  };
  return (
    <>
      <Toolbar>
        <Controls.Button
          text="Add New"
          variant="outlined"
          startIcon={<AddIcon />}
          className={classesMaterial.newButton}
          onClick={() => {
            setOpenPopup(true);
            // setRecordForEdit(null);
          }}
        />
      </Toolbar>
      <Table
        data={data}
        columns={columns}
        options={options}
        title=" Danh sách kịch bản "
      />
      <Popup
        title="Thêm kịch bản"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormPopup />
      </Popup>
    </>
  );
};

export default Scripts;
