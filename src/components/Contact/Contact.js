import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Contact.css'

export default function Contact(props) {
    return (
        <div className="section-content">
            <div className="section-header">contact</div>
            <p>caimjonathan(at)gmail.com</p>
            <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/jonathanmcai"}>twitter</a><br />
            <a target="_blank" rel="noopener noreferrer" href={"https://github.com/jonathancai11"}>github</a><br />
            <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/jonathan-cai/"}>linkedin</a>
            <p style={{ textAlign: "right" }}> 
                <SocialIcon url="https://github.com/awx1" /> <a target="_blank" rel="noopener noreferrer" href={"https://github.com/awx1"}> Github</a> 	&nbsp;
                <SocialIcon url="https://www.linkedin.com/in/alexander-xiong/" /> <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/alexander-xiong/"}>Linkedin</a>
            </p>
            <p style={{ textAlign: "right" }}>
                <SocialIcon network="email" bgColor = "white" fgColor="red" /> xionga27 "at" gmail.com
            </p>
        </div>
    )
}

// import React from 'react';
// import { SocialIcon } from 'react-social-icons';
// import './Contact.css'

// export default function Contact(props) {
//     return (
//         <div className="section-content">
//             <p style={{ textAlign: "right" }}> 
//                 <SocialIcon url="https://github.com/awx1" /> <a target="_blank" rel="noopener noreferrer" href={"https://github.com/awx1"}> Github</a> 	&nbsp;
//                 <SocialIcon url="https://www.linkedin.com/in/alexander-xiong/" /> <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/alexander-xiong/"}>Linkedin</a>
//             </p>
//             <p style={{ textAlign: "right" }}>
//                 <SocialIcon network="email" bgColor = "white" fgColor="red" /> xionga27 "at" gmail.com
//             </p>
//         </div>
//     )
// }