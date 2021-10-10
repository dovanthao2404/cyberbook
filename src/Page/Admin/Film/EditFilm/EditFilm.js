import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, InputNumber, Switch } from "antd";
import { GROUP_ID } from "../../../../utils/setting/config";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilmAction,
  addSuccessAction,
  getInfoFilmAction,
  updateFilmAction,
  updateSuccessAction,
} from "../../../../redux/actions/ManagementFilmActions";
import HandleSuccess from "../../../../components/HandleSuccess/HandleSuccess";
import Loading from "../../../../components/Loading/Loading";

const EditFilm = (props) => {
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const filmReducer = useSelector((state) => state.managementFilmReducer);

  const updateFilm = filmReducer.updateFilm;
  const infoFilmState = filmReducer.infoFilm;
  useEffect(() => {
    dispatch(getInfoFilmAction(props.match.params.id));
  }, []);
  const [infoFilm, setInfoFilm] = useState({
    tenPhim: infoFilmState?.tenPhim,
    trailer: infoFilmState?.trailer,
    moTa: infoFilmState?.moTa,
    maNhom: infoFilmState?.maNhom,
    ngayKhoiChieu: infoFilmState?.ngayKhoiChieu,
    sapChieu: infoFilmState?.sapChieu,
    dangChieu: infoFilmState?.dangChieu,
    hot: infoFilmState?.hot,
    danhGia: infoFilmState?.danhGia,
    hinhAnh: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoFilm({
      ...infoFilm,
      [name]: value,
    });
  };
  const handleChangeOnlyGetValue = (name) => {
    return (value) => {
      if (name === "ngayKhoiChieu") {
        value = moment(value).format("DD/MM/YYYY");
      }
      setInfoFilm({
        ...infoFilm,
        [name]: value,
      });
    };
  };
  const handleChangeFile = async (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file.type.includes("image")) {
      await setInfoFilm({
        ...infoFilm,
        [name]: file,
      });

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result);
      };
    }
  };

  const hanldeSubmit = async () => {
    const formData = new FormData();
    // consol
    for (let key in infoFilm) {
      if (key !== "hinhAnh") {
        if (!infoFilm[key]) {
          await formData.append(key, infoFilmState[key]);
        } else {
          await formData.append(key, infoFilm[key]);
        }
      } else if (infoFilm[key] !== null) {
        await formData.append("File", infoFilm[key], infoFilm[key].name);
      }
    }
    await formData.append("maPhim", infoFilmState.maPhim);

    await dispatch(updateFilmAction(formData));
  };

  const handleUpdateSuccess = () => {
    dispatch(updateSuccessAction(false));
    window.location.reload();
  };

  if (Object.keys(infoFilmState).length > 0) {
    return (
      <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onSubmitCapture={hanldeSubmit}
        >
          <h1 className="text-center font-bold text-2xl">Chỉnh sửa phim</h1>
          <Form.Item label="Tên phim">
            <Input
              name="tenPhim"
              onChange={handleChange}
              defaultValue={infoFilmState.tenPhim}
            />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input
              name="trailer"
              onChange={handleChange}
              defaultValue={infoFilmState.trailer}
            />
          </Form.Item>

          <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              name="ngayKhoiChieu"
              onChange={handleChangeOnlyGetValue("ngayKhoiChieu")}
              defaultValue={moment(
                moment(infoFilmState.ngayKhoiChieu).format("DD/MM/YYYY"),
                "DD/MM/YYYY"
              )}
              format="DD/MM/YYYY"
            />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input.TextArea
              name="moTa"
              onChange={handleChange}
              defaultValue={infoFilmState.moTa}
            />
          </Form.Item>
          <Form.Item label="Sắp chiếu">
            <Switch
              onChange={handleChangeOnlyGetValue("sapChieu")}
              name="sapChieu"
              defaultChecked={infoFilmState.sapChieu}
            />
          </Form.Item>
          <Form.Item label="Đang chiếu">
            <Switch
              onChange={handleChangeOnlyGetValue("dangChieu")}
              name="dangChieu"
              defaultChecked={infoFilmState.dangChieu}
            />
          </Form.Item>
          <Form.Item label="Hot">
            <Switch
              onChange={handleChangeOnlyGetValue("hot")}
              name="hot"
              defaultChecked={infoFilmState.hot}
            />
          </Form.Item>
          <Form.Item label="Đánh giá">
            <InputNumber
              min={1}
              max={10}
              name="danhGia"
              onChange={handleChangeOnlyGetValue("danhGia")}
              defaultValue={infoFilmState.danhGia}
            />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <div>
              <input type="file" name="hinhAnh" onChange={handleChangeFile} />
              <img
                style={{ width: "180px", height: "auto" }}
                src={img ? img : infoFilmState.hinhAnh}
                alt={img}
              />
            </div>
          </Form.Item>
          <Form.Item label="Button">
            <Button htmlType="submit" onSubmit={hanldeSubmit}>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
        <div className={`${updateFilm ? "block" : "hidden"}`}>
          {HandleSuccess("Cập nhật phim thành công", handleUpdateSuccess)()}
        </div>
      </>
    );
  }
  return <Loading />;
};
export default EditFilm;
