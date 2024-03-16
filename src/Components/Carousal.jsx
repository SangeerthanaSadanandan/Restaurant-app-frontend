import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


function Carousal() {
  return (
    <div>
      <MDBCarousel showIndicators fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg' className='d-block w-100' alt='...' style={{height:'500px'}} />
        <MDBCarouselCaption>
          <h1 style={{fontSize:'60px'}}><i>Indulge in a Symphony of Flavors: Where Every Bite Tells a Story</i></h1>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
      <img src='https://cdn.shopify.com/s/files/1/0070/7032/files/food-photgraphy-tips.png?v=1657891849' className='d-block w-100' alt='...' style={{height:'500px'}} />
        
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
      <img src='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg' className='d-block w-100' alt='...' style={{height:'500px'}} />
       
      </MDBCarouselItem>
    </MDBCarousel>
      </div>
  )
}

export default Carousal