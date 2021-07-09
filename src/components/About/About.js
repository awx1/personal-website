import React from 'react';
import pdf from '../../files/AlexXiongResume_12-17-20b.pdf';
import pic from '../../files/me4.jpg'
import { SocialIcon } from 'react-social-icons';
import './About.css'

export default function About(props) {
    return (
        <div className="section-content">
            <p style={{ textAlign: "right" }}> 
                <SocialIcon url="https://github.com/awx1" /> <a target="_blank" rel="noopener noreferrer" href={"https://github.com/awx1"}> Github</a>  &nbsp;
                <SocialIcon url="https://www.linkedin.com/in/alexander-xiong/" /> <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/alexander-xiong/"}>Linkedin</a>
                <SocialIcon network="email" bgColor = "white" fgColor="red" /> xionga27 "at" gmail.com
            </p>
            <img src={pic} className="Picture"/><br/><br/>
            <div className="section-header">about</div>
            <div>
                <p>I'm Alex, and I'm majoring in Computer Science and Statistics @ Rice University in Houston, TX, graduating in <b>Spring 2022</b>.</p>
                <p>I like to play around with tech but sometimes I make cool things happen!</p>
                <p>My skillset is in backend web development, mobile development, deep learning w/ applications to privacy, robotics, and federated machine learning.</p>
                <p>If you're a recruiter stopping by, you can find <a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a> here!</p>
            </div>
        </div>
    )
}
