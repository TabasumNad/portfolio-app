import React from 'react'
import '../Styles/Skills.css'
import computer from '../assets/1641250840162.jpeg'

const Skills = () => {
    const skillList=[
        {
            "img":"https://i.pinimg.com/564x/94/5d/83/945d8320b2991e7345ea0dda5ee1b6bb.jpg",
            "name":"HTML-5",

        },
        {
            "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
            "name":"CSS",
        },
        {
            "img":"https://static.javatpoint.com/images/javascript/javascript_logo.png",
            "name":"Javascript",

        }  ,
        {
            "img":"https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo-1024x704.png",
            "name":"React",
        },
        {
            "img":"https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
            "name":"Bootstrap5",

        },
        {

            "img":"https://res.cloudinary.com/practicaldev/image/fetch/s--Lvl1ZNKy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ph7yc1i1vqqgwpxegw5.png",
            "name":"NodeJs",
        },
        {
            "img":"https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png",
            "name":"Express",
        },
        {
            "img":"https://dev.java/assets/images/java-logo-vert-blk.png",
            "name":"Java",
        },
        {
            "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917",
            "name":"C Language",
        },
        {
            "img":"https://www.thedataschool.com.au/wp-content/uploads/2022/12/Sql_data_base_with_logo.png",
            "name":"SQL",
        },
        {
            "img":"https://img.stackshare.io/service/1030/leaf-360x360.png",
            "name":"MongoDB",
        }
    ]
    return(
        <div className="tech-list-container">  
           {
     skillList.map((mbl,index)=>(
     <List tech={mbl} key={index} />
    ))} 
           
        </div>


    )
}


function List({tech})
{
    return(

        <div className="tech-container">
            <img src={tech.img} alt={tech.img} className="tech-picture"/>
<h2 className="tech-name">{tech.name}</h2>
        </div>
    )
}
export default Skills