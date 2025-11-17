import React from "react";
import Image from "next/image";
import styles from "./DesktopApp.module.css";
import drive from "../../assets/drive.png";

const DesktopApp: React.FC = () => {
  const handleClick = () => {
    window.location.href = "/plain";
  };

  return (
    <div
      className={styles.desktopApp}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.iconContainer}>
        <Image src={drive} alt="Plain View" className={styles.icon} />
      </div>
      <span className={styles.label}>Want a Plain View?</span>
    </div>
  );
};

export default DesktopApp;
