import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, InputNumber, Switch } from "antd";
import { GROUP_ID } from "../../../../utils/setting/config";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilmAction,
  addSuccessAction,
  getInfoFilmAction,
} from "../../../../redux/actions/ManagementFilmActions";
import HandleSuccess from "../../../../components/HandleSuccess/HandleSuccess";
import Loading from "../../../../components/Loading/Loading";

const EditFilm = (props) => {
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const filmReducer = useSelector((state) => state.managementFilmReducer);

  const addFilm = filmReducer.addFilm;
  const infoFilmState = filmReducer.infoFilm;
  useEffect(() => {
    dispatch(getInfoFilmAction(props.match.params.id));
  }, []);
  const [infoFilm, setInfoFilm] = useState({
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: GROUP_ID,
    ngayKhoiChieu: "",
    sapChieu: false,
    dangChieu: false,
    hot: false,
    danhGia: 1,
    hinhAnh: {},
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

    for (let key in infoFilm) {
      if (key !== "hinhAnh") {
        await formData.append(key, infoFilm[key]);
      } else {
        await formData.append("File", infoFilm[key], infoFilm[key].name);
      }
    }
    await dispatch(addFilmAction(formData));
  };

  const handleAddSuccess = () => {
    dispatch(addSuccessAction(false));
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
              defaultValue={infoFilmState.tenPHim}
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
            />
          </Form.Item>
          <Form.Item label="Đang chiếu">
            <Switch
              onChange={handleChangeOnlyGetValue("dangChieu")}
              name="dangChieu"
            />
          </Form.Item>
          <Form.Item label="Hot">
            <Switch onChange={handleChangeOnlyGetValue("hot")} name="hot" />
          </Form.Item>
          <Form.Item label="Đánh giá">
            <InputNumber
              min={1}
              max={10}
              name="danhGia"
              onChange={handleChangeOnlyGetValue("danhGia")}
            />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <div>
              <input type="file" name="hinhAnh" onChange={handleChangeFile} />
              <img
                style={{ width: "40%", height: "auto" }}
                src={img}
                alt={img}
              />
            </div>
          </Form.Item>
          <Form.Item label="Button">
            <Button htmlType="submit" onSubmit={hanldeSubmit}>
              Thêm Phim
            </Button>
          </Form.Item>
        </Form>
        <div className={`${addFilm ? "block" : "hidden"}`}>
          {HandleSuccess("Thêm Phim Thành Công", handleAddSuccess)()}
        </div>
      </>
    );
  }
  return <Loading />;
};
export default EditFilm;
