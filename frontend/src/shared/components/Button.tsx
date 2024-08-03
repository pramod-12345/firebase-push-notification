import { Button } from "antd";

const CustomButton = ({
  handleSendNotification,
  messageBody,
  messageTitle,
  title,
}: {
  handleSendNotification: (notification: {
    title: string;
    body: string;
  }) => void;
  messageBody: string;
  messageTitle: string;
  title: string;
}) => {
  return (
    <Button
      type="primary"
      onClick={() =>
        handleSendNotification({
          title: messageTitle,
          body: messageBody,
        })
      }
    >
      {title}
    </Button>
  );
};

export default CustomButton;
