import React, { Component } from 'react';
import AuthContext from '../Context/AuthContext';
import Header from '../Components/Header';
import ChartOne from '../Components/ChartOne';

class Charts extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataOne:""
    };
  }

componentDidMount(){
    fetch("http://localhost:5000/getnumberbooks")
    .then((res) => {return res.json();})
    .then(books => {
      this.setState({dataOne:books[0]["COUNT (*)"]})
    })
    .catch(err => {console.log(err);});
}

  render() {
   return(
    <div>
      <Header/>
      <div className="d-flex flex-row justify-content-between">
        <ChartOne data={this.state.dataOne} title="Libros disponibles"/>
        {/* <ChartOne/>
        <ChartOne/> */}
      </div>
    </div>
      )}
}

Charts.contextType=AuthContext;
export default Charts