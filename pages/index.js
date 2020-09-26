import { Card, Button, Input } from "antd";
import StudentTable from "../components/studentTable";
import AddModal from "../components/addModal";
import StudentStore from "../store/studentStore";

const { Search } = Input;

const Home = () => {
  const { setIsModal, data, setSearch, setIsSearching } = StudentStore();

  const handleSearch = (e) => {
    if (e.target.value != "") {
      let temp = data.filter((item) => {
        return (
          item.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      });
      if (temp.length > 0) {
        setSearch(temp);
        setIsSearching(true);
      } else setIsSearching(false);
    } else {
      setIsSearching(false);
      setSearch([]);
    }
  };

  return (
    <div style={{ padding: "10%" }}>
      <Card
        hoverable
        title={
          <div className="flex">
            <Button onClick={() => setIsModal(true)}>Add New</Button>
            <Search
              placeholder="input search loading"
              
              onChange={(value) => {
                handleSearch(value);
              }}
              style={{ width: 300 }}
            />
          </div>
        }
      >
        <StudentTable />
      </Card>
      <AddModal />
    </div>
  );
};

export default Home;
