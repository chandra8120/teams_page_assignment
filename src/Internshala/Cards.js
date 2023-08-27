import {Typography } from '@mui/material'
import React from 'react'
import Students from './Students'

const Cards = () => {

  const data=[
    {
      univeristy:"  Came Bridge University",
      img: "https://images.unsplash.com/photo-1623632306901-e509641e7191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMG9mJTIwY2FtYnJpZGdlfGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      univeristy:"Harvard University",
      img: "https://cdn.britannica.com/69/141169-050-CD5892EB/Baker-Library-Harvard-Business-School-Boston-University.jpg"
    },
    {
      univeristy:"University of California",
      img: 'https://edsource.org/wp-content/uploads/2017/04/08.UCLA_.Royce_.jpg'
    },
    {
      univeristy:"University of Zurich",
      img: "https://mas-mtec.ethz.ch/aboutus/eth-zurich/_jcr_content/par/fullwidthimage/image.imageformat.1286.1337144021.jpg"
    },
    {
      univeristy:"Max Planck University",
      img: "https://c8.alamy.com/comp/2F4FMWC/max-planck-institute-for-molecular-biomedicine-mpi-muenster-westphalia-north-rhine-westphalia-germany-2F4FMWC.jpg"
    },
    {
      univeristy:"University of Edinberg",
      img: "https://accessable.s3.eu-west-2.amazonaws.com/production/uploads/organisation/hero_image/293/resize_EU_Quad_042__005__hero_2.jpg"
    },
    {
      univeristy:"Johns Hopkins University",
      img: "https://images.squarespace-cdn.com/content/v1/546119bae4b085cc73a9bff6/1470950327059-TJZDKFB1A1HDYPNYNN0K/image-asset.jpeg"
    },
    {
      univeristy:"Michigan State University",
      img: "https://res.cloudinary.com/highereducation/image/upload/w_740,h_416,c_fill,f_auto,fl_lossy,q_auto/v1/TheBestSchools.org/texas-am-kyle-field.jpg"
    },
  ]


  return (
    <div style={{background:"#B7E5E5",width:"100%", height: "50px",background: "linear-gradient(to left, #33ccff 0%, #ff99cc 100%)" }}>
    

    <h2 style={{textAlign:'center',color:"red",fontStyle:"ui-sans-serif"}}>Team page</h2>
    <h3 style={{textAlign:"center",color:"green"}}>Learn from Scientist research scholars from the top institutes in the world.</h3>

      <div style={{display:'flex',flexWrap:"wrap",gap:20,alignContent:"center",justifyContent:"center",textAlign:'center',width:"100%",minWidth:"200px"}}>
        {data.map((ele,ind)=>{
          return <div key={ind} style={{display:'flex',width:"21%",height:"200px",boxShadow:" 12px 13px #DDF0F0",flexWrap:"wrap",minWidth:"200px"}}>
        <div>
       <Typography variant="h5" component="div">
          {ele.univeristy}
        </Typography>
        <img src={ele.img}  width="100%" alt='img'/>

        </div>

          </div>
        })}
  

  
      </div>
      

   <div>
    
   </div>
<Students />
    </div>

  )
}

export default Cards
