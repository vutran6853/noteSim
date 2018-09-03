import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import css from './dashboard.css';
import House from './house';

class Dashboard extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      data: []
    }

    this.deleteItem = this.deleteItem.bind(this);
  }

  // GET ALL DATA FROM SERVER
  componentDidMount() {
    axios.get('/api/house')
    .then((response) => {
      // console.log(response)
      this.setState({ data: response.data })
    })
    .catch((error) => {
      console.log(`DANGER! ${error}`)
    })
  }

  deleteItem(id) {
    console.log(id);
    axios.delete(`/api/house/${id}`)
    .then((response) => {
        console.log(response)
       
    })
    .catch((error) => {
      console.log(`Fail to delete ${error}  ${id}`)
    })
  }



  render() { 
    // console.log(this.state.data);

    let list = this.state.data.map((value, index, id) => {
      //  console.log(value )
      //  console.log(index )
        console.log(value.id )

      return(
        <div key={ value.id } className='dashboardBox'>
          <p>Name: {value.name}</p>
          <p>Address: { value.address }</p>
          <p>City: { value.city }</p>
          <p>state: { value.state }</p>
          <p>rent: { value.rent }</p>
          <p>zip: { value.zip }</p>
          <img src={ value.img }></img>
          <button onClick={ () => (this.deleteItem(id)) }>X</button>

        </div>
      )
    }) 

    return ( 
      <div>
        <p>Dashboard Component</p>
        <Link to='/wizard' >
            <button>Add New Property</button>
        </Link>
       {/* <House /> */}

        { list }

      </div>
     );
  }
}

function mapStateToProps (state) {
  return (
    state
  )
}
 
export default connect(mapStateToProps)(Dashboard);