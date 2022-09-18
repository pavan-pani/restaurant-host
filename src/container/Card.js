import { hover } from '@testing-library/user-event/dist/hover';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter-slice';
import { orderActions } from '../store/order-slice';
import { tableActions } from '../store/tableNumber-slice';

const Card = () => {
  const filter = useSelector((state)=>state.filter.filter);
  const tableNumber=useSelector(state=>state.tableNum.tabelNumber)
  const [data, setData]=useState([])
  const [clonedata, setClonedata]=useState([])

  const ordervalue =useSelector((state)=>state.order.ordervalue)
  const dispatch=useDispatch()

  const orderHandler=(id,name,price,url)=>{
    if(tableNumber!=null){
      dispatch(orderActions.addOrder({id,name,price,url,tableNumber}))
      dispatch(tableActions.resetTableNumber())
      dispatch(filterActions.resetFilter())
      alert("Order Placed Successfully...")
    }
    else{
      alert("Please select your table number")
    }
  }

  //rendering API
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
          {/* <div className='row'> */}
            {data.map((item)=>(
              <div className='d-inline-flex p-2' style={{padding:"5px"}} key={item.id}>
                <div className='card mt-2' style={{width:"18rem",padding:"3px"}}>
                  <img src={item.url} className="card-img-top" style={{width:"400",height:"400"}}></img>
                  <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <div className='card-text'>Rs.{item.price}</div>
                  <button className='btn btn-primary' onClick={()=>orderHandler(item.id, item.name, item.price, item.url,)}>Order</button>
                </div>
                </div>
              </div>
            ))}
          </div>
        // </div>
        :
        <div className='spinner-border text-primary'></div>  
      }
      </center>
    </div>
  )
}

export default Card