import React from "react";
import { Card, Drawer } from "antd";

interface Item {
  title: string;
  body: string;
}

interface DrawerCompProps {
  title: string;
  list?: Item[];
  open: boolean;
  onClose: () => void;
}

const DrawerComp: React.FC<DrawerCompProps> = ({ title, list, open, onClose }) => {
  
  return (
    <Drawer className="drawer-wrapper" title={title} onClose={onClose} open={open}>
      {list?.map((i) => (
        <Card size="small" title={i?.title} style={{ width: "100%" }}>
          <p>{i?.body}</p>
        </Card>
      ))}
    </Drawer>
  );
};
export default DrawerComp;
