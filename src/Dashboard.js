
import { JWTChart } from 'jwt-mongo-chart';
import { useState } from "react";
import './Dashboard.css';

var charts = [
  {
    name: "Book Details",
    toggle:1,
    jwtSdk: process.env.REACT_APP_CHART1_JWTSDK,
    token: process.env.REACT_APP_CHART1_TOKEN,
    chartUrl: process.env.REACT_APP_CHART1_CHARTURL,
    chartId: process.env.REACT_APP_CHART1_CHARTID
  },
  {
    name: "Salary Details",
    toggle:2,
    jwtSdk: process.env.REACT_APP_CHART2_JWTSDK,
    token: process.env.REACT_APP_CHART2_TOKEN,
    chartUrl: process.env.REACT_APP_CHART2_CHARTURL,
    chartId: process.env.REACT_APP_CHART2_CHARTID
  },
  {
    name: "Salary Details",
    toggle:1,
    jwtSdk: process.env.REACT_APP_CHART3_JWTSDK,
    token: process.env.REACT_APP_CHART3_TOKEN,
    chartUrl: process.env.REACT_APP_CHART3_CHARTURL,
    chartId: process.env.REACT_APP_CHART3_CHARTID
  },
  {
    name: "Restaurant Details",
    toggle:1,
    jwtSdk: process.env.REACT_APP_CHART4_JWTSDK,
    token: process.env.REACT_APP_CHART4_TOKEN,
    chartUrl: process.env.REACT_APP_CHART4_CHARTURL,
    chartId: process.env.REACT_APP_CHART4_CHARTID
  },
  {
    name: "Top 2 Restaurant",
    toggle:1,
    jwtSdk: process.env.REACT_APP_CHART6_JWTSDK,
    token: process.env.REACT_APP_CHART6_TOKEN,
    chartUrl: process.env.REACT_APP_CHART6_CHARTURL,
    chartId: process.env.REACT_APP_CHART6_CHARTID
  },
  {
    name: "Restaurant Ratings",
    toggle:1,
    jwtSdk: process.env.REACT_APP_CHART5_JWTSDK,
    token: process.env.REACT_APP_CHART5_TOKEN,
    chartUrl: process.env.REACT_APP_CHART5_CHARTURL,
    chartId: process.env.REACT_APP_CHART5_CHARTID
  }

]


const Dashboard = () => {
  var [toggle, setToggle] = useState(1)
  const toggleTab = (index) => {
    console.log(index)
    setToggle(index)
  }

  return (<div>

    <h1 className="title">MongoDB Charts UI</h1>
    <div className="buttons">
      <span >
        <button className={toggle === 1 ? "active-button" : "button"} onClick={() => toggleTab(1)}>
          JWT Authenticated Charts
        </button>

      </span>
      <span >
        <button className={toggle === 2 ? "active-button" : "button"} onClick={() => toggleTab(2)}>
          JWT Unauthenticated Charts
        </button>
      </span>
    </div>

  

    <div className="charts">
      {charts.map((item) => {
        return (
          <div className={toggle === item.toggle ? " active-content" : "content"}>
            <div className="label">{item.name}</div>
            <div className="chart">
              <JWTChart jwtData={{
                jwtSdk: item.jwtSdk,
                chartData: {
                  token: item.token,
                  chartUrl: item.chartUrl,
                  chartId: item.chartId
                }
              }} />
            </div>

          </div>
        )
      })}
    </div>




  </div>
  )
};

export default Dashboard;
