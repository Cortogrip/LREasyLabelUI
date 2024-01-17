
import { Button } from '@mui/material';
import { Component } from 'react';

class MyForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <TextField
            required
            id="name"
            label="Required"
            defaultValue="Name"
            value={this.state.value} 
            onChange={this.handleChange} 
            />

            <TextField
            required
            id="email"
            label="Required"
            defaultValue="Name"
            value={this.state.value} 
            onChange={this.handleChange} 
            />

            <TextField
            required
            id="message"
            label="Required"
            defaultValue="Name"
            value={this.state.value} 
            onChange={this.handleChange} 
            />

            <Button type='submit' value='Submit' />

        </form>
      );
    }
  }

  export default MyForm;