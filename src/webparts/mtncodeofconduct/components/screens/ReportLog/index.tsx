import MaterialTable from "material-table";
import * as React from "react";
import { Navigation, TitleHeader } from "../../Containers";
import "@pnp/graph/users";

const ReportLog = () => {
  const [data, setData] = React.useState([]);
  const [columns, setColumns] = React.useState([
    { title: "Employee ID", field: "EmployeeID", type: "string" as const },
    {
      title: "Employee Full Name",
      field: "EmployeeName",
      type: "string" as const,
    },
    {
      title: "Employee HCMs ID",
      field: "HCMID",
      type: "string" as const,
    },
  ]);

  return (
    <div className="appContainer">
      <Navigation report={`active`} />
      <div className="contentsRight">
        <div className="contentPage">
          <div className="dashboard">
            <div className="header__title">
              <TitleHeader title="Report Log" />
            </div>
            <div>
              <MaterialTable
                title=""
                columns={columns}
                data={data}
                options={{
                  exportButton: true,
                  actionsCellStyle: {
                    backgroundColor: "none",
                    color: "#FF00dd",
                  },
                  actionsColumnIndex: -1,

                  headerStyle: {
                    backgroundColor: "#FFCC00",
                    color: "black",
                  },
                  rowStyle: {
                    fontSize: 13,
                  },
                }}
                style={{
                  boxShadow: "none",
                  width: "100%",
                  background: "none",
                  fontSize: "13px",
                }}
                // icons={{Add: () => 'Add Row'}}
                actions={[
                  {
                    icon: "visibility",
                    iconProps: { style: { fontSize: "11px", color: "gold" } },
                    tooltip: "Edit",

                    onClick: (event, rowData) => {},
                  },
                  {
                    icon: "visibility",
                    iconProps: { style: { fontSize: "11px", color: "gold" } },
                    tooltip: "View",

                    onClick: (event, rowData) => {
                      // deleteHandler(rowData.ID);
                    },
                  },
                ]}
                components={{
                  Action: (props) => (
                    <button
                      onClick={(event) =>
                        props.action.onClick(event, props.data)
                      }
                      className="mtn__btn_table mtn__black"
                    >
                      {props.action.tooltip}
                    </button>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportLog;
