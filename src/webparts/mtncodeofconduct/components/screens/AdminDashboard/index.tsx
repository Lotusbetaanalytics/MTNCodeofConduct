import * as React from "react";
import { AdminCard, Chart, Navigation, Spinner } from "../../Containers";
import { sp } from "@pnp/sp";
// import { GrCompliance } from "react-icons/gr";
import styles from "./styles.module.scss";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsFillFileRuledFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";

const AdminDashboard = () => {
  const [data, setData] = React.useState({ DisplayName: "", Email: "" });

  React.useEffect(() => {
    sp.profiles.myProperties.get().then((response) => {
      setData(response);
    });
  }, []);

  const [loading, setLoading] = React.useState(false);

  return (
    <div className="appContainer">
      <Navigation dashboard={`active`} />
      <div className="contentsRight">
        <div className="contentPage">
          <div className="dashboard">
            <div className="header__title">
              <h3>Hello !!!</h3>
              <h3>{data.DisplayName}</h3>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <div className="cardContainer">
                  <div className={styles.mtn__dashboardCard}>
                    <AdminCard
                      title="Compliance Status"
                      Icon={BsFillFileRuledFill}
                      url="/"
                      count={"78"}
                    />
                    <AdminCard
                      title="Report Log"
                      Icon={AiOutlineFileDone}
                      url="/"
                      count={"22"}
                    />
                    <AdminCard
                      title="Division"
                      Icon={MdLocalOffer}
                      url="/"
                      count={"15"}
                    />
                  </div>
                </div>
                <div>
                  <Chart pending={45} completed={34} total={21} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
