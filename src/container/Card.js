import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Card = () => {
  const filter = useSelector((state)=>state.filter.filter);
  const [data, setData]=useState([])
  const [clonedata, setClonedata]=useState([])
  useEffect(()=>{
    fetch('https://04h4n27hgd.execute-api.us-east-1.amazonaws.com/dev/foodFuntion').then(
      response =>response.json()
    ).then(
      json=>{
        setData(json.Items);
        setClonedata(json.Items)
      }
    )
    // .then(response => response.json())
    // .then(response =>console.log(response.item))
    // .then(response => {setData(response)})
    // .catch(err => console.error(err));
  },[])

  useEffect(()=>{
    if(filter != 'All Items'){
      let specific = clonedata.filter(item => item.category==filter)
      setData(specific)
    }
    else{
      setData(clonedata)
    }
  },[filter])

  
  return (
    <div>
      <center>
        {data.length > 0?
        <div className='container'>
          <div className='row'>
            {data.map((item)=>(
              <div className='col-lg-4' style={{padding:"5px"}}>
                <div className='card mt-2' style={{width:"18rem",padding:"3px"}}>
                  <img src={item.url} className="card-img-top" style={{width:"400",height:"400"}}></img>
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