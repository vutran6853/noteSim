import React, { Component } from 'react';
import { connect } from 'react-redux';


class Wizard extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p>Wizard Component</p>
        { this.props.Name }
      </div>
     );
  }
}
 
function mapStateToProps (state) {
  return (
    state
  )
}

export default connect(mapStateToProps )(Wizard);