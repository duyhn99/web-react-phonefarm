import React from "react";
import Table from "~/components/Table/Table";
import Select from "react-select";

import {
  getMuiTheme,
  MuiStylesButton,
} from "../../components/MuiStyles/MuiStyles";

const Devices = () => {
  const classes = MuiStylesButton();

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
  const columns = [
    {
      name: "ID thiết bị",
    },
    {
      name: "Imie",
    },
    {
      name: "Modal",
    },
    {
      name: "Nhóm thiết bị",
    },
    {
      name: "Trạng thái",
    },
    {
      name: "Trạng thái hoạt động ",
    },
    {
      name: "Tạo lúc",
    },
    {
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <></>;
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
    onRowClick: (rowData, rowMeta) => {
      console.log(rowData);
      console.log(rowMeta);
    },
  };
  return (
    <>
      <div className="select-contanier">
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Chọn kịch bản"
          // options={dataDistrict}
          // onChange={onChangeDistrict}
          name="district"

          // defaultValue={dataDistrict?.find((t) => t.name === dataHuyenThueBao)}
          // key={dataDistrict?.find((t) => t.name === dataHuyenThueBao)}
        />

        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Chọn thiết bị"
          // options={dataDistrict}
          // onChange={onChangeDistrict}
          name="district"

          // defaultValue={dataDistrict?.find((t) => t.name === dataHuyenThueBao)}
          // key={dataDistrict?.find((t) => t.name === dataHuyenThueBao)}
        />
      </div>
      <Table
        data={data}
        columns={columns}
        options={options}
        title="Danh sách thiết bị"
      />
    </>
  );
};

export default Devices;
