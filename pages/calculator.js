import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import Layout, { siteTitle } from '../components/layout'


const initialState = {
  labels: ['CAD', 'ZWL', 'USD'],
  datasets: [
    {
      label: 'Xchange Rates',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,0.3)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.1)',
      hoverBorderColor: 'rgba(255,99,132,0.1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};



class Graph extends React.Component {
  componentWillMount() {
    this.setState(initialState);
  }

  componentDidMount() {
    var _this = this;

    setInterval(function () {
      var oldDataSet = _this.state.datasets[0];
      var newData = [];

      for (var x = 0; x < _this.state.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      var newDataSet = {
        ...oldDataSet
      };

      newDataSet.data = newData;
      newDataSet.backgroundColor = 'red';
      newDataSet.borderColor = 'blue';
      newDataSet.hoverBackgroundColor = 'green';
      newDataSet.hoverBorderColor = 'yellow';

      var newState = {
        ...initialState,
        datasets: [newDataSet]
      };

      _this.setState(newState);
    }, 5000);
  }

  render() {
    return (
      <Bar data={this.state} />
    );
  }
}


export default () => (
  <Layout>
    <div>
      <h2>You can even make crazy graphs like this!</h2>

      <Graph />
    </div>
  </ Layout>
);