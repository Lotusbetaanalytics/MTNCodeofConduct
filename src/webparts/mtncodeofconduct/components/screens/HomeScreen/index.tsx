import * as React from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";

const HomeScreen = () => {
  return (
    <div className={styles.app}>
      <div className={styles.mtn__banner}>
        <div className={styles.text}>
          <img src={require("../../assets/mtnpic.png")} alt="logo" />
          <h5>Welcome to</h5>
          <h3>Code of Conduct</h3>
          <h1>Pledge</h1>
        </div>

        <div className={styles.btnContainer}>
          <Link to={`/register/pledge`} className="mtn__btn mtn__black">
            Proceed <BsArrowRightSquareFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
