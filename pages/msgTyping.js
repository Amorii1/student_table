import MsgStore from  "../store/msgStore";

const MsgTyping = () => {

  return (
    <div>
      <Input/>
      <br />
      <Msg/>
    </div>
  );
};


const Input = () => {
  const {msg,setMsg}=MsgStore();
  return (
    <input value={msg} onChange={(e) =>setMsg(e.target.value)} />
  );
};


const Msg = () => {
  const {msg,setMsg}=MsgStore();
  return <h2>{msg}</h2>;
};

export default MsgTyping;
