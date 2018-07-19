import React, { Component } from 'react';
import '../styles/App.css';
import classnames from 'classnames';
import axios from 'axios';

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      date: '',
      title: '',
      location: '',
      price: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newEvent = {
      img: this.state.img,
      date: this.state.date,
      title: this.state.title,
      location: this.state.location,
      price: this.state.price
    }
    axios
      .post('/api/events/CreatePost', newEvent)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }


  render() {
    return (

      <div className="CreateEvent">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Event</h1>
            <p className="lead text-center">Create an event to EventBrite</p>
              <form noValidate onSubmit={this.onSubmit} href="/" >
              <div className="form-group">
                <input type="text" className={classnames('form-control form-control-lg')} placeholder="Image"  name="img" value={this.state.img} onChange={this.onChange}/>
              </div>
              <div className="form-group">
              <input type="datetime-local" className={classnames('form-control form-control-lg')} placeholder="Date"  name="date" value={this.state.date} onChange={this.onChange} />
              </div>
              <div className="form-group">
              <input type="text"  className={classnames('form-control form-control-lg')} placeholder="Title"  name="title" value={this.state.title} onChange={this.onChange} />
              </div>
              <div className="form-group">
              <input type="text"  className={classnames('form-control form-control-lg')}  placeholder="Location"  name="location" value={this.state.location} onChange={this.onChange}  />
              </div>
              <div className="form-group">
              <input type="text"  className={classnames('form-control form-control-lg')}  placeholder="Price"  name="price" value={this.state.price} onChange={this.onChange} />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CreateEvent;
