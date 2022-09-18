import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux';



const Header = () => {
  const ordervalue =useSelector((state)=>state.order.ordervalue)
  //const ordervalue =useSelector((state)=>state.order.count)

  return (
    <div>
        <nav className='navbar navbar-light' style={{backgroundColor:"#A6F3AC"}}>
            <a className='navbar-brand'><h3 style={{color:'blue'}}>Pavan Restaurant</h3></a>
            <button className='btn btn-primary'>
                <Link to='/orders' style={{color:'white',textDecoration:'none'}}>Orders :<span className='badge'>{ordervalue.length}</span></Link>
            </button>
        </nav>
    </div>
  )
}

export  default Header