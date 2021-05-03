import axios from "axios";
import React,{  useState } from 'react'
import ShowData from './ShowData'

function App() {
  const [formData, setFormData] = useState({
    data: []
  });
  const {data} = formData;
  
  const onFinish = e => {
    e.preventDefault();  
    axios
    .get("/api/posts/")
    .then((res) => 
    setFormData({ ...formData, data: res.data })
    )
    .catch((err) => console.log(err));
};
  ;
  if(data.length){
    console.log(data)
  }
  return (
    <>
  <button type='submit' onClick={onFinish} >
    Click to get data
  </button>
  <br/>
  {data.length?
  data.map(item=>(
    <ShowData
    Key = {item.id}
    id = {item.id}
    title = {item.title}
    description = {item.description}
    />
  )
  ):"No data available"}
    </>
  );
}

export default App;
