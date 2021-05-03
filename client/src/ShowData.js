
import React from 'react'

const ShowData = props =>{
  return (
    <>
    <h3> {props.title} </h3>
    <p>{props.description}</p>
    <hr/> 
    </>
  );
}

export default ShowData;
