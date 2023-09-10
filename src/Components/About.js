import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import '../Styles/About.css'
import computer from '../assets/1641250840162.jpeg'

const About = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <h6>Hey There !</h6>
                            <h1>I am Tabasum</h1>
                            <p>Front End Developer  & Designer</p>
                            <p className="about">Hailing from Goa(India). I am a Software Developer with proficient grasp in both Front end and Server-side Development.<br></br>
    Experienced with Modern Technologies such as JAVA 8, JavaScript, JDBC. Curious and enthusiastic in learning new things.
    Curiosity is what makes a person think different, and I think learning even a small thing as it seem can make a big difference.</p>

                            <div className="icons">
                                <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                                <Pinterest className='icon'/>
                            </div>


                    <div className="buttons">
                        {/* <button>See Me</button> */}
                        <button><a  href="https://drive.google.com/file/d/1MVABimmqdVLCZcBQ4i8Why99P7Sk3heh/view?usp=share_link" target="_blank" className="btn ">Resume</a></button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={computer} alt="" />
                </div>


            </div>



        </div>
    )
}


export default About