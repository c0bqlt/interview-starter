import React from 'react'

const Dog = (props) => {
  return (
    <div>
      <img src={props.url} alt="dog image" className='w-96 h-96' />
    </div>
  )
}

export default Dog
