import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

 const Order = () => {
  const ordervalue =useSelector((state)=>state.order.ordervalue)
  return (
    <div>
          <nav className='navbar navbar-light' style={{backgroundColor:"#A6F3AC"}}>
            <a className='navbar-brand'><h3 style={{color:'blue'}}>Pavan Restaurant</h3></a>
            </nav>
        <center>
        {ordervalue.length > 0?
        <div className='container'>
          {/* <div className='row'> */}
            {ordervalue.map((item)=>(
              <div className='d-inline-flex p-2' style={{padding:"5px"}} key={item.id}>
                <div className='card mt-2' style={{width:"18rem",padding:"3px"}}>
                  <img src={item.url} className="card-img-top" style={{width:"400",height:"400"}}></img>
                  <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <div className='card-text'>Billing amount Rs.{item.price}</div>
                  <p>Table Number : {item.tableNumber}</p>
                  {/* <button className='btn btn-primary' onClick={()=>orderHandler(item.id, item.name, item.price, item.url,)}>Order</button> */}
                </div>
                </div>
              </div>
            ))}
          </div>
        // </div>
        :
        <div className='h4'> No Order Placed Yet...</div>  
      }
      </center>
    </div>
  )
}

export default Order