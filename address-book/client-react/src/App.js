import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('api/oddballs').then(resp => resp.json()).then(data => {
       this.setState({ contacts:data })
    })
  }

  constructor() {
    super() 
      this.state = {
        contacts: []
      }
  }

  render() {
    return (
      <div className="App">
          <input
            type="text"
            name="search"
          />
          <ContactList data={this.state.contacts} />
      </div>
    );
  }
}

class ContactList extends Component {
  render(){
    const mappingFunc = data => {
      return data.map(contact => <Contact contactInfo={contact} />)
    }
    return mappingFunc(this.props.data)
  }

}

class Contact extends Component {
  render() {
    return(
      <p>{this.props.contactInfo.firstName}</p>
    )
  }
}



export default App;
