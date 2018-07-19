import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Landing extends Component {

  constructor(props) {
  super(props);
  this.state = {
    events: []
}
}

  componentDidMount() {


    axios.get('api/events/GetEvents')
    .then( results => {
      this.setState({
        events : results.data
      })
    })
  }



  render() {
    return (

      <div className="landing">


      <img src={ require('../../img/EVENTS.png') } />


{this.state.events.map( (event) => {

    return <div className="card" key={event._id}>
        <img className="card-img-top" src={event.img} alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text font-weight-light">{event.date}</p>
          <p className="card-text font-weight-bold">{event.title}</p>
          <p className="card-text font-italic">{event.location}</p>
          <p className="card-text text-success">${event.price}  <a className="btn btn-success" id="Attend" href="/ShowEvent">Attend</a> </p>

        </div>
      </div>

   })}




      </div>

    );
  }
}

export default Landing
