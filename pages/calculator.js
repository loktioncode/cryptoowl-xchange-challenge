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
      data: [65, 59, 80]
    }
  ]
};



class Graph extends React.Component {
  componentWillMount() {
    this.setState(initialState);
  }


  componentDidMount() {
    var _this = this;

   setInterval(() => {
      var oldDataSet = _this.state.datasets[0];
      var newData = [];

      for (var x = 0; x < _this.state.labels.length; x++) {
        // const res = await fetch(
        //   `http://api.exchangeratesapi.io/latest?access_key=a6f2f95fbb352f66ae967a3322c9b2c8&base=EUR`
        // );
        // const { rates } = res.json();
        // newData.push(Math.floor(rates[toCurrency]));
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
      <h2>Not yet complete</h2>

      <Graph />
    </div>
  </ Layout>
);