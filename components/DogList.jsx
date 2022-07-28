import React from 'react'
import Dog from './Dog'

const DogList = (props) => {

  const dogsArray = props.dogs.map((dogURL) => {
    return <Dog url={dogURL} key={dogURL} />
  })
  return (
    <div>
      {dogsArray}
    </div>
  )
}

export default DogList
