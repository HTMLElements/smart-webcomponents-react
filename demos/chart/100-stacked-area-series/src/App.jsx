import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import { Chart } from 'smart-webcomponents-react/chart';

const App = () => {
  const [data, setData] = useState([]);

  const rawData = JSON.parse(`[
    {"Date":"10/1/2017","Referral":"1391","SearchPaid":"1158","SearchNonPaid":"1201"},
    {"Date":"10/2/2017","Referral":"1379","SearchPaid":"1439","SearchNonPaid":"1015"},
    {"Date":"10/3/2017","Referral":"1026","SearchPaid":"1288","SearchNonPaid":"1282"},
    {"Date":"10/4/2017","Referral":"1497","SearchPaid":"1063","SearchNonPaid":"1089"},
    {"Date":"10/5/2017","Referral":"1153","SearchPaid":"1107","SearchNonPaid":"1051"},
    {"Date":"10/6/2017","Referral":"1367","SearchPaid":"1351","SearchNonPaid":"1037"},
    {"Date":"10/7/2017","Referral":"1243","SearchPaid":"1079","SearchNonPaid":"1139"},
    {"Date":"10/8/2017","Referral":"1445","SearchPaid":"1187","SearchNonPaid":"1174"},
    {"Date":"10/9/2017","Referral":"1495","SearchPaid":"1095","SearchNonPaid":"1192"},
    {"Date":"10/10/2017","Referral":"1031","SearchPaid":"1441","SearchNonPaid":"1277"},
    {"Date":"10/11/2017","Referral":"1061","SearchPaid":"1312","SearchNonPaid":"1122"},
    {"Date":"10/12/2017","Referral":"1231","SearchPaid":"1382","SearchNonPaid":"1437"},
    {"Date":"10/13/2017","Referral":"1069","SearchPaid":"1018","SearchNonPaid":"1180"},
    {"Date":"10/14/2017","Referral":"1309","SearchPaid":"1358","SearchNonPaid":"1425"},
    {"Date":"10/15/2017","Referral":"1161","SearchPaid":"1376","SearchNonPaid":"1017"},
    {"Date":"10/16/2017","Referral":"1250","SearchPaid":"1401","SearchNonPaid":"1198"},
    {"Date":"10/17/2017","Referral":"1235","SearchPaid":"1341","SearchNonPaid":"1114"},
    {"Date":"10/18/2017","Referral":"1345","SearchPaid":"1089","SearchNonPaid":"1158"},
    {"Date":"10/19/2017","Referral":"1487","SearchPaid":"1110","SearchNonPaid":"1382"},
    {"Date":"10/20/2017","Referral":"1308","SearchPaid":"1165","SearchNonPaid":"1453"},
    {"Date":"10/21/2017","Referral":"1326","SearchPaid":"1058","SearchNonPaid":"1140"},
    {"Date":"10/22/2017","Referral":"1021","SearchPaid":"1176","SearchNonPaid":"1085"},
    {"Date":"10/23/2017","Referral":"1219","SearchPaid":"1190","SearchNonPaid":"1233"},
    {"Date":"10/24/2017","Referral":"1345","SearchPaid":"1057","SearchNonPaid":"1300"},
    {"Date":"10/25/2017","Referral":"1283","SearchPaid":"1491","SearchNonPaid":"1273"},
    {"Date":"10/26/2017","Referral":"1435","SearchPaid":"1483","SearchNonPaid":"1298"},
    {"Date":"10/27/2017","Referral":"1097","SearchPaid":"1102","SearchNonPaid":"1022"},
    {"Date":"10/28/2017","Referral":"1222","SearchPaid":"1218","SearchNonPaid":"1485"},
    {"Date":"10/29/2017","Referral":"1270","SearchPaid":"1108","SearchNonPaid":"1180"},
    {"Date":"10/30/2017","Referral":"1339","SearchPaid":"1372","SearchNonPaid":"1499"},
    {"Date":"10/31/2017","Referral":"1435","SearchPaid":"1181","SearchNonPaid":"1235"}
  ]`);

  useEffect(() => {
    const parsedData = rawData.map(entry => ({
      ...entry,
      Date: new Date(entry.Date),
      Referral: parseInt(entry.Referral),
      SearchPaid: parseInt(entry.SearchPaid),
      SearchNonPaid: parseInt(entry.SearchNonPaid)
    }));
    setData(parsedData);
  }, []);

  const monthFormatter = useMemo(() => new Intl.DateTimeFormat('en', { month: 'short' }), []);

  const chartProps = {
    caption: 'Web Traffic Analysis',
    description: 'Unique monthly site visitors (percentage stacked)',
    showLegend: true,
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    colorScheme: 'scheme32',
    xAxis: {
      type: 'date',
      baseUnit: 'day',
      dataField: 'Date',
      valuesOnTicks: true,
      labels: {
        formatFunction: value => value.getDate()
      },
      gridLines: { visible: false },
      toolTipFormatFunction: value =>
        `${value.getDate()}-${monthFormatter.format(value)}-${value.getFullYear()}`
    },
    valueAxis: {
      title: { text: 'Daily visitors' },
      labels: { horizontalAlignment: 'right' }
    },
    seriesGroups: [{
      type: 'stackedarea100',
      series: [
        { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' },
        { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
        { dataField: 'Referral', displayText: 'Referral Traffic' }
      ]
    }]
  };

  return (
    <div>
      <Chart id="chart" dataSource={data} {...chartProps} />
    </div>
  );
};

export default App;
