import React from 'react'
import { memo } from 'react';

const Child = ({func}) => {
    console.log(func());
  return (
    <div>
      child
    </div>
  )
}

export default memo(Child)
