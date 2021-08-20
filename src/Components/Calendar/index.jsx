import { Calendar } from "antd";

const Calendary = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
    <div>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default Calendary;
