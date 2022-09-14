import React, { useState } from 'react'

const Table = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const inActiveBtn= 'btn btn-outline-primary m-2';
    const activeBtn ='btn btn-outline-primary m-2 active';
    const [number, setNumber] = useState(null);

    
  return (
    <div>
        <center className='mt-2'>
          <h4>Please select your table number :</h4>
          {numbers.map((num,index)=>(
                <div key={index} style={{display:'inline'}}>
                    <button className={number===num?activeBtn:inActiveBtn} onClick={()=>setNumber(num)}>
                        {num}
                    </button>
                </div>
            ))}
            
        </center>
    </div>
  )
}

export default Table