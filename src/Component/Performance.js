import React from 'react'
const google = window.google

class Performance extends React.Component {

    componentDidMount(){
        var data=[
            ['Effort', 'Amount given'],
            ['My all',    80],
            ['My',    20],

          ]
          setTimeout(() => {
              
              this.drawChart(data);
          }, 1000);

    }

    drawChart(graphData) {

        google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(graphData);

        var options = {
                animation: {
                duration: 10000,
                //easing: 'out',
                'startup': true
            },
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }
        
    }

    

    render(){
        var data=[
            ['Effort', 'Amount given'],
            ['My all',    100],
  
          ]
          this.drawChart(data);
        return (
            <div>
            <div id="donut_single"></div> 
            
            </div>
        )
    }
}

export default Performance
