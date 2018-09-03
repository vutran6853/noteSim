import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateImg } from '../../ducks/reducer';

class Wizard2 extends Component {
  constructor(props) {
    super(props)

    // INIT STATE IF NEEDED DEBUGGER
    this.state = {
      img: ''
    }

    this.handleChangeURL = this.handleChangeURL.bind(this);
  }

  componentDidMount() {
    // console.log("this.props.img = ", this.props.img);
    this.setState({ img: this.props.img })
  }

  handleChangeURL(value) {
    // console.log("this.state.img = ", this.state.img);
    this.setState({ img: value})
  }


  render() {

    return(
      <div>
        <p>Image URL</p>
        <input placeholder='Enter URL'
              value={ this.state.img } 
              onChange={ (e) => this.handleChangeURL(e.target.value) } ></input>
        <br/>


        <Link to='/wizard'>
          <button>Previous</button>
        </Link>

        <Link to='/wizard3'>
          <button onClick={ () => this.props.updateImg(this.state.img) } >Next</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    img: state.img
  }

}

export default connect(mapStateToProps,  { updateImg })(Wizard2)