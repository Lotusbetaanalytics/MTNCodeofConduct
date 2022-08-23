import * as React from "react";
import { Navigation, TitleHeader } from "../../Containers";

const CompalianceStatus = () => {
  const [data, setData] = React.useState({ DisplayName: "", Email: "" });
  return (
    <div className="appContainer">
      <Navigation status={`active`} />
      <div className="contentsRight">
        <div className="contentPage">
          <div className="dashboard">
            <div className="header__title">
              <TitleHeader title="Division" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompalianceStatus;
