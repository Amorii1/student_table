import { Card, Button, Input} from "antd";
import StudentTable from "../components/studentTable";
import AddModal from "../components/addModal";
import StudentStore from '../store/studentStore'

const { Search } = Input;

const Home = () => {
  const {setIsModal,setData, data} = StudentStore()

  return (
    <div style={{ padding: "10%" }}>
      <Card
        hoverable
        title={
          <div className="flex">
            <Button onClick={() => setIsModal(true)}>Add New</Button>
            <Search
              placeholder="input search text"
              onSearch={(value) =>{
                
                  setData(data.filter((el) => el.name === value));
                
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