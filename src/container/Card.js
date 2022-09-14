import React, { useEffect, useState } from 'react'

////////////
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '96a4b6446cmshf17a429a8b10474p1da9b3jsn89c691c0e793',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	}
};
///////////////

const Card = () => {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', options)
    .then(response => response.json())
    .then(response => {setData(response)})
    .catch(err => console.error(err));
  })

  
  return (
    <div>
      <center>
        {data.length > 0?
        <div className='container'>
          <div className='row'>
            {data.map((item)=>(
              <div className='col-md-4' style={{padding:"5px"}}>
                <div className='card' style={{width:"18rem",padding:"3px"}}>
                  <img src={item.img} clasName="card-img-top"></img>
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