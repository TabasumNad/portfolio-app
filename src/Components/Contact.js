import React from "react";
import '../Styles/Contact.css'


function Contact(){
    return(
        
        <div >

            <div>
            <h2 className="connect">Connect with me</h2>
            <p className="connectmessage">If you want to know more about me or my career, you can leave your message,<br></br>
                I would love to hear from you.
                </p>
            </div>

            
<div className="d-flex flex-row bd-highlight mb-3 ">

            
            <div className=" p-2 bd-highlight formpage">
            <form>
  
  <div className="mb-3">
    <label for="examplename" className="form-label">Name</label>
    <input type="text" className="form-control formlen" id="examplename" placeholder="Enter your name"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control formlen" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control formlen" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message"></textarea>
</div>
  <button type="submit" className="btn position btn-col">Submit</button>
</form>
            </div>
            {/* <div>
                <h1>Divide this page into 2</h1>
                </div> */}

            <div className="p-2 bd-highlight contactpage">
<h5>Email:tmnadaf17@gmail.com</h5>

<h5>Address: Tisko-Valley, Opp MRF<br/> Ltd,
             Goa,India</h5>

{/* <h6>Github <img src = "" /></h6> */}
<a href="https://github.com/TabasumNad?tab=repositories" target="_blank"><img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="github img" className="image"/></a>
            </div>


            </div>
        </div>
    )
}

export default Contact;