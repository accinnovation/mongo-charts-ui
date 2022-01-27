import React, {useEffect, useRef, useState} from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({  height, width, filter, chartId}) => {
  const sdk = new ChartsEmbedSDK({baseUrl: 'https://charts.mongodb.com/charts-new-iggoj'});
  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
   const [chart] = useState(sdk.createChart({chartId: chartId, height: height, width: width, theme: "dark"}));

  useEffect(() => {
    chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
  }, [chart]);

  useEffect(() => {
    if (rendered) {
      chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));
    }
  }, [chart, rendered]);

   return <div className="chart" ref={chartDiv}/>;
// const chart = sdk.createChart({ chartId:chartId})

// return chart.render(document.getElementById('app'));

};

export default Chart;