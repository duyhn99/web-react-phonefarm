import React, { useState } from "react";
import FormPopup from "~/components/FormPopup/FormPopup";
import Popup from "~/components/Popup/Popup";
import Table from "~/components/Table/Table";
import {
  getMuiTheme,
  MuiStylesButton,
} from "../../components/MuiStyles/MuiStyles";
const GroupDevices = () => {
  const classes = MuiStylesButton();
  const [openPopup, setOpenPopup] = useState(false);

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

  const data2 = [
    ["Joe James", "Test Corp", "Yonkers"],
    ["John Walsh", "Test Corp", "Hartford"],
    ["Bob Herm", "Test Corp", "Tampa"],
    ["James Houston", "Test Corp", "Dallas"],
    ["Joe James1", "Test Corp", "Yonkers"],
  ];
  const columns = [
    {
      name: "Tên nhóm thiết bị",
    },
    {
      name: "Người tạo ",
    },
    {
      name: "Ngày tạo",
    },
  ];
  const options = {
    count: 1,
    download: false,
    print: false,
    filter: false,
    sort: true,
    rowsPerPage: 5,
    onRowClick: (rowData, rowMeta) => {
      setOpenPopup(true);
    },
  };
  return (
    <>
      <Table
        data={data}
        columns={columns}
        options={options}
        title="Danh sách nhóm thiết bị"
      />

      <Popup
        title="Chi tiết nhóm thiết bị"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Table data={data2} columns={columns} options={options} title="" />
      </Popup>
    </>
  );
};

export default GroupDevices;
