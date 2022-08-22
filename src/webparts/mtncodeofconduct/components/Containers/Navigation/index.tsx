import * as React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { sp } from "@pnp/sp";
import {
  AiOutlineAppstore,
  AiOutlineLogout,
  AiOutlineFileDone,
} from "react-icons/ai";
import { BsViewList } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
const Navigation = ({
  dashboard = "",
  pending = "",
  complete = "",
  init = "",
}) => {
  const [data, setData] = React.useState({ DisplayName: "", Email: "" });

  React.useEffect(() => {
    sp.profiles.myProperties.get().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div className={styles.mtn__navigation}>
      <div className={styles.mtn__logo}>
        <img src={require("../../assets/mtnpic.png")} alt="MTN Logo" />
      </div>

      <div className={styles.admin__title}>
        <h3>{data.DisplayName}</h3>
        <p>Admin</p>
      </div>

      <div className={styles.mtn__url}>
        <ul>
          <li className={styles[dashboard]}>
            <Link to={`/admin/dashboard`}>
              <AiOutlineAppstore />
              Dashboard
            </Link>
          </li>
          <li className={styles[init]}>
            <Link to={`/admin/confirmation`}>
              <BsViewList />
              Code of Conduct Pledge
            </Link>
          </li>
          <li className={styles[pending]}>
            <Link to={`/admin/pending`}>
              <GrCompliance />
              Compliance Status
            </Link>
          </li>
          <li className={styles[complete]}>
            <Link to={`/admin/completed`}>
              <AiOutlineFileDone />
              Report Log
            </Link>
          </li>
          {/* <li className={styles[config]}>
            <Link to={`/admin/config`}>
              <AiOutlineUserAdd />
              Config
            </Link>
          </li> */}
          {/* <li className={styles[report]}><Link to={`/admin/reports`}><AiFillSignal />Reports</Link></li> */}
          <li>
            <Link to={`/`}>
              <AiOutlineLogout />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
