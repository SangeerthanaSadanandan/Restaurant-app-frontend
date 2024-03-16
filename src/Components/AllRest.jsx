import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Col,Row} from 'react-bootstrap'
import RestCard from './RestCard'
import Carousal from './Carousal'


function AllRest() {

  const base_url='https://restaurant-app-backend-iak1.onrender.com/restaurants'

  // to hold array of data 
  const [AllRestData,setAllRestData]=useState([])

  // API fetching 
  const fetchData=async()=>{
    const result=await axios.get(base_url)
    console.log(result.data);
    setAllRestData(result.data)

  }

  console.log(AllRestData);

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      <Carousal/>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestCard restaurant={item}/>
            </Col>
          ))
        }
      </Row>

    </div>
  )
}

export default AllRest