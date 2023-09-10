import React from "react";
import '../Styles/Project.css'
import { Link } from "react-router-dom";

function Project()
{
    return(
        <div >
            <div>
            <h2 className="connect"><u>Projects worked on</u></h2>
            
            </div>
            <div className="d-flex flex-row bd-highlight mb-3 order">

            <div className="card outer bck" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">CRUD</h5>
    <p class="card-text">In computer programming, create, read, update, and delete (often referred to via the acronym CRUD) are the four basic operations of persistent storage.</p>
    <a href="https://github.com/TabasumNad/crudui"  target="_blank" className=" btn btn-primary">Github</a>
    <a href="https://sunny-twilight-b10ecd.netlify.app/"  target="_blank" className="btn btn-primary">Deploy</a>
  </div>
</div>
<div className="card outer bck" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">Stack Overflow Clone</h5>
    <p class="card-text">Stack Overflow is the largest, most trusted online</p>
    
    <a href="https://github.com/TabasumNad/stackoverflowfront"  target="_blank" className="btn btn-primary">Github(FrontEnd)</a>
    <a href="https://github.com/TabasumNad/StackOverFlowBackend"  target="_blank" className="btn btn-primary">Github(Backend)</a>
                    <a href="https://thunderous-faloodeh-4455b7.netlify.app/"  target="_blank" className="btn btn-primary">Deploy</a>
  </div>
</div>

<div className="card outer bck" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">Library Management</h5>
    <p class="card-text">A library management system is software that is designed to manage all the functions of a library.</p>
    
    <a href="https://github.com/TabasumNad/libmanage"  target="_blank" className="btn btn-primary">Github(FrontEnd)</a>
    
                    <a href="https://jazzy-muffin-941e2d.netlify.app/"  target="_blank" className="btn btn-primary">Deploy</a>
  </div>
</div>

<div className="card outer bck" >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">Bulk Mail sender</h5>
    <p class="card-text">Bulk email is the act of sending one email campaign to a large group at once. Marketing messages, newsletters, updates, coupons, and invitations typically comprise bulk emails.</p>
    
    <a href="https://github.com/TabasumNad/stackoverflowfront"  target="_blank" className="btn btn-primary">Github(FrontEnd)</a>
    <a href="https://github.com/TabasumNad/StackOverFlowBackend"  target="_blank" className="btn btn-primary">Github(Backend)</a>
                    <a href="https://rococo-zabaione-a6a5b1.netlify.app/"  target="_blank" className="btn btn-primary">Deploy</a>
  </div>
</div>




</div>
           
            </div>
        
    )
}

export default Project;