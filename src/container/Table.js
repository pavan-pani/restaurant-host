import React, { useState } from 'react'

const Table = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const inactiveBtn= 'btn btn-outline-primary m-2';
    const activeBtn ='btn btn-outline-primary m-2 active'
    const {number, setNumber} = useState(null);

    
  return (
    <div>
        <center>
          {numbers.map((num,index)=>(
                <div key={index} style={{display:'inline'}}>
                    <button className={number===num?activeBtn:inactiveBtn} onClick={()=>setNumber(num)}>
                        {num}
                    </button>
                </div>
            ))}
            
        </center>
    </div>
  )
}

export default Table