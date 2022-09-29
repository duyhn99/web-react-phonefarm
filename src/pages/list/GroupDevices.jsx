import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Popup from "~/components/Popup/Popup";
import Table from "~/components/Table/Table";
import Checkbox from "@material-ui/core/Checkbox";
const GroupDevices = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [check, setCheck] = useState();

  const data =
    // ["Joe James", "Test Corp", "Yonkers"],
    // ["John Walsh", "Test Corp", "Hartford"],
    // ["Bob Herm", "Test Corp", "Tampa"],
    // ["James Houston", "Test Corp", "Dallas"],
    // ["Joe James1", "Test Corp", "Yonkers"],
    // ["John Walsh1", "Test Corp", "Hartford"],
    // ["Bob Herm1", "Test Corp", "Tampa"],
    // ["James Houston1", "Test Corp", "Dallas"],
    // ["Joe James2", "Test Corp", "Yonkers"],
    // ["John Walsh2", "Test Corp", "Hartford"],
    // ["Bob Herm2", "Test Corp", "Tampa"],
    // ["James Houston2", "Test Corp", "Dallas"],
    [{ name: "Joe James", userCreated: "Joe James", created: "Joe James" }];

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

  useEffect(() => {
    if (check) {
      setArrChecked(
        data2.filter((e, index) => {
          if (index < check) {
            return e;
          }
        })
      );
    }
  }, [check]);

  const newData = data2.map((e, index) => {
    return {
      checked: { index: index, id: e.id, data: e },
      name: e.name,
      userCreated: e.userCreated,
      created: e.created,
    };
  });
  // ["John Walsh", "Test Corp", "Hartford"],
  // ["Bob Herm", "Test Corp", "Tampa"],
  // ["James Houston", "Test Corp", "Dallas"],
  // ["Joe James1", "Test Corp", "Yonkers"],

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
                }) != -1
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
  const options = {
    download: false,
    print: false,
    filter: false,
    sort: true,
    rowsPerPage: 5,
    onRowClick: (rowData, rowMeta) => {
      setOpenPopup(true);
    },
  };

  const options2 = {
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
      return e.id == id;
    });
    if (checkChecked != -1) {
      setArrChecked(
        arrChecked.filter((e) => {
          return e.id != id;
        })
      );
    } else {
      setArrChecked((arrChecked) => [...arrChecked, data]);
    }
  };

  console.log(arrChecked);

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
        <div className="popup-input">
          <TextField label="Standard" onChange={handeChangeInput} />
          <button className="popup-button">Primary</button>
        </div>
        <Table data={newData} columns={columns} options={options2} />
      </Popup>
    </>
  );
};

export default GroupDevices;
