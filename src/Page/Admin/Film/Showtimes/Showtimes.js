import React, { useEffect, useState } from "react";

import { Button, DatePicker, Input, InputNumber, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  createShowtimeAction,
  getInfoCinemaSystemByIdAction,
  getListCinemaSystemAction,
} from "../../../../redux/actions/ManagementCinemaActions";
import Loading from "../../../../components/Loading/Loading";
import moment from "moment";

const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;

export default function Showtimes(props) {
  const dispatch = useDispatch();
  const [infoShowtime, setInfoShowtime] = useState({
    maPhim: props.match.params.id,
    ngayChieuGioChieu: "",
    maRap: "",
    giaVe: "",
  });
  // const [danhSachRap, setDanhSachRap] = useState([]);
  const { listCinemaSystem, infoCinemaSystem } = useSelector(
    (state) => state.managementCinemaReducer
  );

  function handleChange(value) {
    console.log(value);
    dispatch(getInfoCinemaSystemByIdAction(value));
  }
  const handleChangeTemCumRap = (value) => {
    setInfoShowtime({ ...infoShowtime, maRap: value });
  };
  useEffect(() => {
    dispatch(getListCinemaSystemAction());
  }, []);
  const handleChangeDate = (value, e) => {
    console.log(e);
    const day = moment(e).format("DD/MM/YYYY hh:mm:ss");
    setInfoShowtime({ ...infoShowtime, ngayChieuGioChieu: day });
  };

  const hanldeCreateShowtime = () => {
    console.log(infoShowtime);
    dispatch(createShowtimeAction(infoShowtime));
  };

  const hanldeChange = (value) => {
    setInfoShowtime({ ...infoShowtime, giaVe: value });
  };

  if (listCinemaSystem.length > 0) {
    return (
      <div className="container ">
        <h1 className="font-bold text-2xl my-4">Showtimes</h1>
        <div>
          <p>Tên hệ thống rạp</p>
          <Select
            defaultValue="Tên hệ thống rạp"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            {listCinemaSystem.map((cinema) => {
              return (
                <Option key={cinema.maHeThongRap}>
                  {cinema.tenHeThongRap}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <p>Tên cụm rạp</p>
          <Select
            defaultValue="Tên cụm rạp"
            style={{ width: 200 }}
            onChange={handleChangeTemCumRap}
          >
            {console.log(infoCinemaSystem) ||
              infoCinemaSystem[0]?.lstCumRap?.map((cumRap) => {
                return (
                  <Option key={cumRap.maCumRap}>{cumRap.tenCumRap}</Option>
                );
              })}
          </Select>
        </div>
        <div>
          <p>Tiền vé</p>
          <InputNumber
            style={{ width: 200 }}
            name="giaVe"
            min={75000}
            max={120000}
            onChange={hanldeChange}
          />
        </div>
        <div>
          <p>Ngày chiếu giờ chiếu</p>
          <DatePicker onChange={handleChangeDate} showTime />
        </div>
        <Button onClick={hanldeCreateShowtime}>Tạo</Button>
      </div>
    );
  }
  return <Loading />;
}
