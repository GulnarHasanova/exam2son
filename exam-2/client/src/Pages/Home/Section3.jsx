import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import axios from 'axios'
function Section3() {

    const [datas,setDatas]=useState([])
useEffect(()=>{axios.get("http://localhost:4000/userz")
.then(res=>setDatas(res.data))

},[])

const handleDelete =(id)=>{
    axios.delete(`http://localhost:4000/userz/${id}`)
    const deleteItem = datas.filter(x=>x._id!==id)
    setDatas(deleteItem)
}
 

  return (
    <>
   <div className='container'>
   <div className='row rc'>

    { datas.map((data,index) => (
   <Card sx={{ minWidth: 275 }} className="col-4 c4" key={index}>
     <Typography variant="h5" component="div">
            <img className='img' src= {data.img} alt="sekil" />
        
        </Typography>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {data.name}
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {data.job}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <button className='btn btn-danger' onClick={()=>{
        handleDelete(data._id)
       }}>delete</button>
        </Typography>
        
      </CardContent>
     
    </Card>
        ) )
    }
       
        
        




   </div>
   

   </div>
    </>
  )
}

export default Section3