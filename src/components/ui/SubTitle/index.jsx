import React from "react";
import styles from './SubTitle.module.scss'
const SubTitle = ({children}) => {
  return <h3 className={styles.subtitle}>{children}</h3>;
};

export default SubTitle;
