import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  constructor(props) {
    super(props)


    // INIT STATE IF NEEDED DEBUGGER
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

  }

  componentDidMount() {
    // console.log("this.props.name = ", this.props.name);
    this.setState({ name: this.props.name })
  }
  
  handleAddName(value) {
    this.setState({name: value })
  }
  
  handleAddAddress(value) {
    this.setState({ address: value })
  }

  handleAddCity(value) {
    this.setState({ city: value })
  }
  
  handleAddState(value) {
    this.setState({ state: value })
  }

  handleAddZip(value) {
    this.setState({ zip: value })
  }
  

  render() { 

    //  console.log(this.state.name, 'this.state.name')
    //  console.log(this.props.name, 'this.props.name')

    return ( 
      <div>
        <p>Add New Listing</p>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
        
        <p>Property Name</p>
        <input placeholder='Enter new property name'
              value={ this.state.name }
              onChange={ (e) => this.handleAddName(e.target.value) }>
        </input>

        <p>Address</p>
        <input placeholder='Enter property adress'
              value={ this.state.address }
              onChange={ (e) => this.handleAddAddress(e.target.value) }>
        </input>

        <p>City</p>
        <input placeholder='Enter City'
              value={ this.state.city }
              onChange={ (e) => this.handleAddCity(e.target.value) }>
        </input>

        <p>State</p>
        <input placeholder='Enter State'
              onChange={ (e) => this.handleAddState(e.target.value) }>
        </input>

        <p>Zip</p>
        <input placeholder='Enter Zip'
              value={ this.state.zip }
              onChange={ (e) => this.handleAddZip(e.target.value) }>

        </input>
        <br/>

        
        
        <Link to='/wizard2/'>

          {/* SET STORE LOCAL STATE TO GLOBAL STATE */}
          <button onClick={ () => { this.props.updateName(this.state.name); 
                                    this.props.updateAddress(this.state.address) 
                                    this.props.updateCity(this.state.city); 
                                    this.props.updateState(this.state.state); 
                                    this.props.updateZip(this.state.zip); 
                                    }} >Next page
          </button>
        </Link>  

      </div>
     );
  }
}

//  SEND DATA BACK TO REDUCER
function mapStateToProps (state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip
  }
}

export default connect(mapStateToProps,  { updateName, updateAddress, updateCity, updateState, updateZip })(Wizard);