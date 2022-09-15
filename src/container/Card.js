import React, { useEffect, useState } from 'react'

const Card = () => {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch('https://04h4n27hgd.execute-api.us-east-1.amazonaws.com/dev/foodFuntion').then(
      response =>response.json()
    ).then(
      json=>{setData(json.Items)}
    )
    // .then(response => response.json())
    // .then(response =>console.log(response.item))
    // .then(response => {setData(response)})
    // .catch(err => console.error(err));
  },[])

  
  return (
    <div>
      <center>
        {data.length > 0?
        <div className='container'>
          <div className='row'>
            {data.map((item)=>(
              <div className='col-md-4' style={{padding:"5px"}}>
                <div className='card mt-2' style={{width:"18rem",padding:"3px"}}>
                  <img src={item.url} clasName="card-img-top" style={{width:"400",height:"400"}}></img>
                  <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <div className='card-text'>Rs.{item.price}</div>
                  <button className='btn btn-primary'>Order</button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        :
        <div className='spinner-border text-primary'></div>  
      }
      </center>
    </div>
  )
}

export default Card