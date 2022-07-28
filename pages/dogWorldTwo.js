import axios from 'axios';
import React from 'react'
import { useQuery } from "@tanstack/react-query";

const dogWorldTwo = () => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.data)
);


  if (isLoading) return 'Loading...⌛'

  if(error) return 'An error has occured: ' + error.message


  return (
    <div>
      <img src={data.message} alt="Dog image" className='h-96 w-96'/>
    </div>
  )
}

export default dogWorldTwo
