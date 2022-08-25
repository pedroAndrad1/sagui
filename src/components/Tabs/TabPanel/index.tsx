import { ReactNode } from "react";

export interface TabPanelProps {
  children: ReactNode;
  name: string;
}

const TabPanel = ({ children, name }: TabPanelProps) => {
  return <div>{children}</div>;
};
export default TabPanel;
