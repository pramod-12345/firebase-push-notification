import CustomButton from "../shared/components/Button";

const Home = ({ handleSendNotification }) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <CustomButton
        handleSendNotification={handleSendNotification}
        messageTitle={"Congratulations"}
        messageBody={"Order Placed Successfully"}
        title={"Order Placed"}
      />
      <CustomButton
        handleSendNotification={handleSendNotification}
        messageTitle={"Track order"}
        messageBody={"Order Dispatched Successfully"}
        title={"Order Dispatched"}
      />
      <CustomButton
        handleSendNotification={handleSendNotification}
        messageTitle={"Thanks for shopping"}
        messageBody={"Order Delivered Successfully"}
        title={"Order Delivered"}
      />
    </div>
  );
};

export default Home;
