import { Avatar, Card, Typography } from "@mui/material";
import React from "react";

const Students = () => {
  const persons = [
    {
      name: "Sofieya",
      university: "  Came Bridge University",
      id:12345,
      img:"https://thumbs.dreamstime.com/z/student-checking-phone-walking-single-smart-street-96446094.jpg"

    },
    {
      name: "Ervin Howell",
      university: "Harvard University",
      id:32451,
      img:"https://img.freepik.com/premium-photo/single-portrait-smiling-confident-male-student-teenager-looking-camera-library_116407-15512.jpg"
    },
    {
      name: "Clementine Bauch",
      university: "University of California",
      id:23413 ,
      img:"https://i.pinimg.com/550x/b3/d3/87/b3d387bd3459bf4006a6ebcc5e6c0ad7.jpg",
    },
    {
      name: "Romaguera",
      university: "University of Zurich",
      id:53421,
      img:"https://media.istockphoto.com/id/1158958655/photo/university-student-stock-images.jpg?s=612x612&w=0&k=20&c=ORWc0SEjkOGvKN1hnPH8-3R9lESVcbi6w0gxa7GQzY4=",
    },
    {
        name: "Patricia Lebsack",
        university: "Max Planck University",
        id:45231,
        img:"https://www.shutterstock.com/shutterstock/photos/400698610/display_1500/stock-photo-caucasian-female-student-looking-at-camera-400698610.jpg",
      },
      {
        name: "Herald sun",
        university: "University of Edinberg",
        id:35241,
        img:"https://content.api.news/v3/images/bin/235106b25ee68a1d5b96855ea44b3a56",
      },
      {
        name: " Dennis Schulis",
        university: "  Johns Hopkins University",
        id:31254,
        img:"https://media.istockphoto.com/id/1187194293/photo/teenager-boy-wearing-headphones-and-backpack-reading-a-book-over-isolated-background.jpg?s=612x612&w=0&k=20&c=rYPNFpmME-LloPB_L4MWP0M5qVX-pIkQlnNmqQRMcbM=",
      },
      {
        name: "Kurtis Weissnat",
        university: " Michigan State University ",
        id:25312,
        img:"https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      },
  ];

  return (
    <div>
       <h2 style={{textAlign:'center',color:'blue',marginTop:"5%"}}>Meet your Mentors</h2>

      <div style={{display:"flex",flexWrap:"wrap",gap:10,textAlign:"center",justifyContent:"center",minWidth:"200px"}}>
        {persons.map((ele,ind)=>{
            return <div style={{alignItems:'center',textAlign:"center",width:"23%",height:"250px",display:"flex",flexDirection:"column",gap:15,flexWrap:"wrap",minWidth:"280px"}} key={ind}>
             <Typography >
                <Avatar alt="Travis Howard"  sx={{width:"150px",height:'150px'}}>
                  <img src={ele.img} width="100%" height="100%" />
            </Avatar>
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              {ele.name}
            </Typography>
            <Typography variant="h5" component="div">
                {ele.university}
            </Typography>
          
            </div>
        })}
       
      
      
      </div>
    </div>
  );
};

export default Students
