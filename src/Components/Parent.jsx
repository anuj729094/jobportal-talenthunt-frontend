import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[count , setCount]=useState(0)
    const[count2 , setCount2]=useState()
    const func = useCallback(()=>{
        return count2+1
    },[count2])
  return (
    <div className=' m-10'>
        {count}
      <Child func={func}/>
      <button onClick={()=>setCount(count+1)} className=' bg-black py-3 px-5 rounded-md text-white'>click</button>
    </div>
  )
}

export default Parent
