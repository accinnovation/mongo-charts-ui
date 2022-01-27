
import Chart from "./Chart";
import { JWTChart } from 'jwt-mongo-chart';


const Dashboard = () => {

  return <div>

    <h1 className="title">MongoDB Charts</h1>


    <div >

      {/* <Chart height={'600px'} width={'800px'} filter={{"authors":"null-rabe@echocat.org"}} chartId={'f4c22b81-afad-4042-bd06-c93e5a3af5cf'}/> */}
      <div>
        <h1>Book Details</h1>
        <div> <JWTChart jwtData={{
          jwtSdk: process.env.REACT_APP_CHART1_JWTSDK,
          chartData: {
            token: process.env.REACT_APP_CHART1_TOKEN,
            chartUrl: process.env.REACT_APP_CHART1_CHARTURL,
            chartId: process.env.REACT_APP_CHART1_CHARTID
          }
        }} /></div>

      </div>

      <div>
        <h1>Salary Details</h1>
        <div>
          <JWTChart jwtData={{
            jwtSdk: process.env.REACT_APP_CHART2_JWTSDK,
            chartData: {
              token: process.env.REACT_APP_CHART2_TOKEN,
              chartUrl: process.env.REACT_APP_CHART2_CHARTURL,
              chartId: process.env.REACT_APP_CHART2_CHARTID
            }
          }} />
        </div>

      </div>
      <div>
        <h1>Salary Details</h1>
        <div>
          <JWTChart jwtData={{
            jwtSdk: process.env.REACT_APP_CHART3_JWTSDK,
            chartData: {
              token: process.env.REACT_APP_CHART3_TOKEN,
              chartUrl: process.env.REACT_APP_CHART3_CHARTURL,
              chartId: process.env.REACT_APP_CHART3_CHARTID
            }
          }} />
        </div>

      </div>
    </div>
  </div>
};

export default Dashboard;