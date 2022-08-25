import React, { ReactElement } from "react";
import { useEffect, useState } from "react";
import { TabPanelProps } from "./TabPanel";
import styles from "./Tabs.module.scss";

interface TabsProps {
  children: ReactElement<TabPanelProps> | Array<ReactElement<TabPanelProps>>;
}

const Tabs = ({ children }: TabsProps) => {
  const [header, setHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");

  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabHeader}>
        {header.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      {Object.keys(childContent).map((key) => {
        if (key === active) {
          return <div key={key}>{childContent[key]}</div>;
        } else {
          return null;
        }
      })}
    </div>
  );
};
export default Tabs;
