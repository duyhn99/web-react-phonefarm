import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Popup from "~/components/Popup/Popup";
import Table from "~/components/Table/Table";
import Checkbox from "@material-ui/core/Checkbox";
const GroupDevices = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [check, setCheck] = useState();

  const data = [
    { name: "Joe James", userCreated: "Joe James", created: "Joe James" },
    { name: "Trọng Nhân", userCreated: "Duy", created: "Joe James" },
    { name: "Joe James", userCreated: "Joe James", created: "Joe James" },
  ];

  const data2 = [
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 1,
    },
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 2,
    },
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 3,
    },
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 4,
    },
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 5,
    },
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 6,
    },
    {
      name: "Joe James",
      userCreated: "Joe James",
      created: "Joe James",
      id: 7,
    },
  ];

  const [arrChecked, setArrChecked] = useState([]);

  // useEffect(() => {
  //   if (check) {
  //     setArrChecked(
  //       data2.filter((e, index) => {
  //         if (index < check) {
  //           return e;
  //         }
  //       })
  //     );
  //   }
  // }, [check]);

  const newData = data2.map((e, index) => {
    return {
      checked: { index: index, id: e.id, data: e },
      name: e.name,
      userCreated: e.userCreated,
      created: e.created,
    };
  });

  const columns = [
    {
      name: "checked",
      label: "Checked",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Checkbox
              checked={
                arrChecked.findIndex((e) => {
                  return e.id == value?.id;
                }) !== -1
                  ? true
                  : false
              }
              onChange={() => handleChange(value?.id, value?.data)}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          );
        },
      },
    },
    {
      name: "name",
      label: "Tên nhóm thiết bị",
    },
    {
      name: "userCreated",
      label: "Người tạo ",
    },
    {
      name: "created",
      label: "Ngày tạo",
    },
  ];

  const columns2 = [
    {
      name: "name",
      label: "Tên nhóm thiết bị",
    },
    {
      name: "userCreated",
      label: "Người tạo ",
    },
    {
      name: "created",
      label: "Ngày tạo",
    },
  ];
  const options = {
    selectableRows: "none",
    download: false,
    print: false,
    filter: false,
    sort: true,
    rowsPerPage: 5,
    onRowClick: (rowData, rowMeta) => {
      setOpenPopup(true);
    },
    rowSelected: (rowData, rowMeta) => {},
  };

  const options2 = {
    rowsSelected: (rowData, rowMeta) => {
      console.log(rowData);
      console.log(rowMeta);
    },
    download: false,
    selectableRows: "none",
    print: false,
    filter: false,
    sort: true,
    rowsPerPage: 5,
    viewColumns: false,
    search: false,
    onRowClick: (rowData, rowMeta) => {
      setOpenPopup(true);
    },
  };

  const handeChangeInput = (event) => {
    setCheck(event.target.value);
  };

  const handleChange = (id, data) => {
    let checkChecked = arrChecked.findIndex((e) => {
      return e.id === id;
    });
    if (checkChecked !== -1) {
      setArrChecked(
        arrChecked.filter((e) => {
          return e.id != id;
        })
      );
    } else {
      setArrChecked((arrChecked) => [...arrChecked, data]);
    }
  };
  const handleClick = (e) => {
    if (check) {
      setArrChecked(
        data2.filter((e, index) => {
          if (index < check) {
            return e;
          }
        })
      );
    }
  };
  return (
    <>
      <Table
        data={data}
        columns={columns2}
        options={options}
        title="Danh sách nhóm thiết bị"
      />

      <Popup
        title="Chi tiết nhóm thiết bị"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <div className="popup-input">
          <TextField label="Standard" onChange={handeChangeInput} />
          <button className="popup-button" onClick={handleClick}>
            Chọn
          </button>
        </div>
        <Table data={newData} columns={columns} options={options2} />
      </Popup>
    </>
  );
};

export default GroupDevices;
