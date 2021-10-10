import React from "react";
import { Table, Tag, Space } from "antd";
import moment from "moment";
const columns = [
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
  },
  {
    title: "Ngày đặt",
    dataIndex: "ngayDat",
    key: "ngayDat",
    render: (ve) => <a>{moment(ve.ngayDat).format("DD/MM/YYYY")}</a>,
  },
  {
    title: "Tên rạp",
    dataIndex: "danhSachGhe",
    key: "danhSachGhe",
    render: (ve) => <a>{ve[0]?.tenHeThongRap}</a>,
  },
  {
    title: "Mã vé",
    dataIndex: "maVe",
    key: "maVe",
  },
  {
    title: "Tên Ghế",
    dataIndex: "danhSachGhe",
    key: "danhSachGhe",
    render: (danhSachGhe) => (
      <a>
        {danhSachGhe.reduce(
          (allName, ghe) => allName + ghe.tenGhe + " ",
          "Ghế: "
        )}
      </a>
    ),
  },
  {
    title: "Giá vé",
    dataIndex: "giaVe",
    key: "giaVe",
  },
  {
    title: "Tổng tiền ",
    dataIndex: ["danhSachGhe"],
    key: "danhSachGhe",
    width: 100,
    render: (danhSachGhe, record, index) => {
      const total = record.giaVe * danhSachGhe.length;

      return (
        <a>
          {total} {" đ"}
        </a>
      );
    },
  },
];

export default function History(props) {
  console.log(props.thongTinDatVe);
  return (
    <div>
      <Table columns={columns} dataSource={props.thongTinDatVe} rowKey="maVe" />
    </div>
  );
}
