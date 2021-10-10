import React, { useEffect } from "react";
import { Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFilmAction,
  getListFilmAction,
} from "../../../../redux/actions/ManagementFilmActions";
import Loading from "../../../../components/Loading/Loading";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function ManagementFilm() {
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",

      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => b.maPhim - a.maPhim,
      sortDirections: ["ascend"],
      defaultSortOrder: "ascend",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      render: (tenPhim) => {
        return tenPhim.length > 50 ? tenPhim.slice(0, 50) + "..." : tenPhim;
      },
      sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (hinhAnh) => {
        return (
          <img
            style={{ height: 80, width: 50, objectFit: "cover" }}
            src={hinhAnh}
            alt={hinhAnh}
          />
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (moTa) => {
        return moTa.length > 50 ? moTa.slice(0, 50) + "..." : moTa;
      },
    },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "ngayKhoiChieu",
      render: (ngayKhoiChieu) => {
        return moment(ngayKhoiChieu).format("DD/MM/YYYY");
      },
    },
    {
      title: "Chức năng",
      width: 150,
      dataIndex: "maPhim",
      render: (maPhim) => (
        <>
          <NavLink to={`/admin/edit-film/${maPhim}`}>
            <EditOutlined className="text-xl text-yellow-500 cursor-pointer mx-1" />
          </NavLink>
          <DeleteOutlined
            onClick={() => {
              dispatch(deleteFilmAction(maPhim));
            }}
            className="text-xl text-red-500 cursor-pointer mx-1"
          />
          <CalendarOutlined className="text-xl text-blue-500 cursor-pointer mx-1" />
        </>
      ),
    },
  ];

  const { listFilmDefault } = useSelector(
    (state) => state.managementFilmReducer
  );
  useEffect(() => {
    dispatch(getListFilmAction());
  }, []);

  if (Object.keys(getListFilmAction) !== 0) {
    return (
      <>
        <div className="mb-4">
          <NavLink
            to="/admin/add-film"
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-2xl"
          >
            Thêm Phim
          </NavLink>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={listFilmDefault}
            rowKey="maPhim"
          />
        </div>
      </>
    );
  }
  return <Loading />;
}
