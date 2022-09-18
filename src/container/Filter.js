import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter-slice';

const Filter = () => {
    const prod=['All Items', 'Rice Items','Cold Drinks', 'Pizza', 'Hot Drinks']
    //const [filter, setFilter] = useState("All Items");
    const filter =useSelector((state)=>state.filter.filter);
    const dispatch=useDispatch()

    const setFilter=(value)=>{
        dispatch(filterActions.passfilter(value))
    }
  return (
    <div>
        <center className="mt-2">
            <span className='h4' style={{color:'blue'}}>Filter : </span>
            <select name="filter" className='p-1' onChange={(e)=>setFilter(e.target.value)}>
                {prod.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
            {/* <button className='btn btn-sm btn-primary m-3' onClick={()=>console.log(filter)}>
                Submit
            </button> */}
        </center>
    </div>
  )
}

export default Filter