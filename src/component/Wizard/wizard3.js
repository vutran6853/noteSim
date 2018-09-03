import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMorgage, updateRent } from '../../ducks/reducer';

class Wizard3 extends Component {
  constructor(props) {
    super(props);

      // INIT STATE FOR LOCAL FROM DEBUGGED
      this.state = {
        mortgage: 0,
        rent: 0,
        recommend: 0
      }

  }

  handleChangeRent(value) {
    this.setState({ rent: value })
  }

  handleChangeMortgageAndRecommend(value) {
    this.setState({ mortgage: value, recommend: value * 1.25 })
  }



  // GET ALL LOCAL STATE DATA AND SEND TO SERVER POST
  complete() {
     let { name, address, city, state, zip, img } = this.props; // <-- OBJECT DES
     let houses = { name, address, city, state, zip, img, ...this.state }   // <-- STORE VAR
     axios.post('/api/house', houses)
     .then((response) => {
       console.log(response)
     })
     .catch((error) => {
       console.log(`Danger! ${error}`)
     });
  };

  render() {
     
     let { name, address, city, state, zip, img } = this.props; // <-- OBJECT DES
     let houses = { name, address, city, state, zip, img, ...this.state }   // <-- STORE VAR
    //  console.log(house)

    return(
      <div>

        <p>Recommended Rent: { this.state.recommend }</p>

        <p>Monthly Mortgage Amount</p>
        <input placeholder='Enter Mortgage' 
               value={ this.state.mortgage } 
               onChange={ (e) => this.handleChangeMortgageAndRecommend(e.target.value) }  >
        </input>

         <p>Desired Monthly Rent</p>
        <input placeholder='Enter Desired Rent' 
              value={ this.state.rent } 
              onChange={ (e) => this.handleChangeRent(e.target.value) }  >
        </input>

        <br/>
        <br/>

        <Link to='/wizard2'>
          <button>Previous</button>
        </Link>

        <Link to='/'>
          <button onClick={ () => this.complete() } >Complete</button>
        </Link>
      </div>
    )
  }


}

// EXPORT TO SEND BACK TO REDUCER TO UPDATE DATA
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { updateMorgage, updateRent } )(Wizard3)