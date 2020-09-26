import { Table, Tag, Button } from "antd";
import StudentStore from "../store/studentStore";

const StudentTable = () => {
  const { data, setData, search,isSearching } = StudentStore();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (value) => (
        <Tag color={value === "male" ? "geekblue" : "pink"}>{value}</Tag>
      ),
    },
    {
      title: "",
      dataIndex: "key",
      key: "key",
      render: (value) => (
        <Button
          danger
          type="text"
          onClick={() => {
            setData(data.filter((el) => el.key !== value));
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  return <Table dataSource={isSearching ? search : data } columns={columns} />;
};

export default StudentTable;
