import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function RestCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div>
      <Link to={`view/${restaurant.id}`} style={{textDecoration:'none'}}>
        <MDBCard className='my-4 mx-3' style={{ height: '500px' }}>
          <MDBCardImage src={restaurant.photograph} height={'350px'} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{restaurant.name}</MDBCardTitle>
            <MDBCardText>
              {restaurant.address}
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  )
}


export default RestCard