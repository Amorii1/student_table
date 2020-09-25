import { Modal, Row, Col, Select, Input } from "antd";
import StudentStore from "../store/studentStore";

const { Option } = Select;

const AddModal = () => {
  const {
    isModal,
    setIsModal,
    name,
    age,
    address,
    gender,
    setName,
    setAge,
    setAddress,
    setGender,
    data,
    setData,
  } = StudentStore();

  const handleSubmit = () => {
    setData([
      ...data,
      {
        key: Date.now(),
        name,
        age,
        address,
        gender,
      },
    ]);

    setIsModal(false)
  };

  return (
    <Modal
      title="Basic Modal"
      visible={isModal}
      onOk={handleSubmit}
      onCancel={() => setIsModal(false)}
    >
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Student Name"
          />
        </Col>
        <Col span={8}>
          <Input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Student Age"
          />
        </Col>
        <Col span={16}>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </Col>
        <Col span={8}>
          <Select
            value={gender}
            onChange={(value) => setGender(value)}
            placeholder="Select Gender"
            style={{ width: "100%" }}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddModal;