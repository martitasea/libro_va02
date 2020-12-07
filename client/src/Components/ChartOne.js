import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import {Bar, Line, Pie, Radar, Doughnut, Bubble} from 'react-chartjs-2';
// import chartDataOne from '../data/chartDataOne';


class ChartOne extends Component {
  constructor(props){
    super(props);
    this.state = {
        options:{
            title:{
              display:true,
              text:this.props.title,
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
          }
    }
}

render() {
   return(
    <div className="chartOne m-3">
            <Bar
                data={{
                    chartData:{
                        labels:['Prestados', 'Devueltos', 'Cogidos'],
                        datasets:[{
                            label:'Libros',
                            data:[16,4,5],
                            backgroundColor:['#29a18c','#EE7A71','#195492c7'],
                            borderWidth:0, 
                            // scaleSteps:1,           
                            }]
                  }
                }}
                // width={10}
                // height={5}
                options={this.state.options}
            />
    </div>
      )
    }
}


ChartOne.contextType=AuthContext;
export default ChartOne;