"use client";
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import { Card, Table, Row, Col } from 'antd';
import axios from 'axios';

Chart.register(...registerables);

const App = () => {
  const [siteData, setSiteData] = useState([
       { TotalSite: 0, WIP: 0, Completed: 0, PipeLaying: 0 },
       { TotalSite: 0, WIP: 0, Hold: 0, Complete: 0 },
       { Contractor: 0, TotalPaymentProcessed: "0", TotalOutstanding: "0" },
     ]);
  useEffect(()=> {
    fetch();
  }, [])

  const fetch = async () => {
    const data = await axios.get('http://localhost:3000/api/getData')
    const newArr = [];
    if(data.data.result && data.data.result.length > 0) {
      let arr = data.data.result;
      newArr.push(arr[0][0])
      newArr.push(arr[1][0])
      newArr.push(arr[2][0])
      setSiteData(newArr)
    }
    console.log(data.data.result);
  }
  const totalSites1 = siteData[0]?.TotalSite || [];
  const totalSites2 = siteData[1]?.TotalSite || [];

  const transformDataForDoughnutChart = (siteData) => {
    if(!siteData) return;
    const { WIP, Completed, PipeLaying } = siteData;
    const labels = ['WIP', 'Completed', 'Pipe Laying'];
    const data = [WIP, Completed, PipeLaying];

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  };

  const transformDataForDoughnutChart2 = (siteData) => {
    if(!siteData) return;
    const { WIP, Hold, Complete } = siteData;
    const labels = ['WIP', 'Complete', 'Hold'];
    const data = [WIP, Complete, Hold];

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  };

  const doughnutChartData1 = transformDataForDoughnutChart(siteData[0]);
  const doughnutChartData2 = transformDataForDoughnutChart2(siteData[1]);

  const contractorData = {
    TotalPaymentProcessed: parseFloat(siteData[2]?.TotalPaymentProcessed),
    TotalOutstanding: parseFloat(siteData[2]?.TotalOutstanding),
    Contractor: parseFloat(siteData[2]?.Contractor),
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutout: '50%',
  };

  return (
    <div>
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '20px', background: 'black', height: '50px', display: "flex", alignItems: 'center', justifyContent: 'center', marginBottom: '10px', color: 'white' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>DPMS Dashboard</h1>
      </header>

      {/* Row 1 */}
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={12}>
          <Card title={`Total Sites : ${totalSites1}`} style={{ marginBottom: '20px' }}>
            <div style={{ width: '100%', height: '100%', margin: '20px' }}>
              <Doughnut data={doughnutChartData1} options={doughnutChartOptions} />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title={`Total Sites : ${totalSites2}`} style={{ marginBottom: '20px' }}>
            <div style={{ width: '100%', height: '100%', margin: '20px' }}>
              <Doughnut data={doughnutChartData2} options={doughnutChartOptions} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row gutter={16} style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Col span={8}>
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '20px',
              borderRadius: '8px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              background: '#FFCE56',
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              {contractorData.Contractor}
            </div>
            <div style={{ fontSize: '16px', color: '#666' }}>Contractor</div>
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '20px',
              borderRadius: '8px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              background: '#FF6384',
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              {contractorData.TotalPaymentProcessed}
            </div>
            <div style={{ fontSize: '16px', color: '#666' }}>Total Payment Processed</div>
          </div>
        </Col>
        <Col span={8}>
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '20px',
              borderRadius: '8px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              background: '#36A2EB',
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              {contractorData.TotalOutstanding}
            </div>
            <div style={{ fontSize: '16px', color: '#666' }}>Total Outstanding</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
