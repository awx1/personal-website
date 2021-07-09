import React from 'react';
import pdf from '../../files/REU_Presentation.pptx.pdf';

export default function Work(props) {
    return (
        <div className="section-content">
            <div className="section-header">work</div>
            <p>
                My <b>software engineer</b> internship experiences:
            </p>

            <ul>
                <li>
                    <p>
                        At <b>Amazon</b> currently, adding scalability and control to intelligence on a V1 stealth product.
                        <ul>
                            <li>
                                <p>
                                    Implementing cloud based services in an Android development environment (Android Development, Java)
                                </p>
                            </li>
                        </ul>   
                    </p>
                </li>
                <li>
                    <p>
                        Virginia Modeling, Analysis and Simulation Center - Privacy, Machine Learning
                        <ul>
                            <li>
                                <p>
                                    Designed and built a federated machine learning platform to evaluate malicious attacks posed by participants for different machine learning architectures. (Python and Keras)
                                </p>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                 <p>
                                    Enhanced existing defenses against collusion-based membership attack frameworks using adversarial examples. 
                                </p>
                            </li>
                        </ul>
                    </p>
                </li>
            </ul>

            <p style={{ paddingLeft: 0 }}>
                Former <b>CS Research</b> Experiences:
            </p>
            <ul>
                <li>
                    <p>
                        Rice University Kavraki Lab - Robotics, Motion Planning
                        <ul>
                            <li>
                                <p>
                                    Processed experienced-based motion planning datasets for Fetch and UR5 robots. (C++)
                                    <br/>Leveraged the <a href="https://ompl.kavrakilab.org/" rel="noopener noreferrer" target="_blank">Open Motion Planning Library (OMPL)</a>, conducted visualizations using Gazebo, Rviz, and Ros frameworks.
                                </p>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <p>
                                    Constructed scenarios for realistic motion planning testing for <a href="https://robots.ieee.org/robots/fetch/" rel="noopener noreferrer" target="_blank">Fetch</a> and <a href="https://www.universal-robots.com/products/ur5-robot/" rel="noopener noreferrer" target="_blank">UR5</a> robots.
                                </p>
                            </li>
                        </ul>
                    </p>
                </li>
                <li>
                    <p>
                        NSF REU in Big Data Security & Privacy, supported by Microsoft and NSF - Privacy, Ensemble Deep Learning, Encryption
                        <ul>
                            <li>
                                <p>
                                    Designed a privacy preserving inference algorithm via an ensemble of neural networks, leveraging Microsoft's CryptoNets, enabling prediction on secure data using fully homomorphic encryption. (C#)
                                </p>
                                <p>
                                    <b>[IEEE IPCCC 2020]</b> - <b>[<a href="https://ieeexplore.ieee.org/document/9391544/" rel="noopener noreferrer" target="_blank">Link</a>]</b> <b>[<a target="_blank" rel="noopener noreferrer" href={pdf}>Slides</a>]</b> ; 1st author 
                                    <br/>Privacy Preserving Inference with Convolutional Neural Network Ensemble.
                                </p>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <p>
                                    Reconstructed an unencrypted version of CryptoNets model to train the encrypted ensemble model; Achieved 94% accuracy in individual vs. 97% accuracy in ensemble models. (Python and Keras)
                                </p>
                            </li>
                        </ul>
                    </p>
                </li>
            </ul>

            <p style={{ paddingLeft: 0 }}>
                Rice <b>Extracurriculars</b>:
            </p>
            <ul>
                <li>
                    <p>
                        <b>Teaching Assistant (TA)</b> for COMP 382: Reasoning about Algorithms.
                        <br/>Conducted weekly lab sessions for additional problem solving and proof writing practice. Graded assignments, weekly TA office hours for students. Roughly ~150 students.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Teaching Assistant (TA)</b> for STAT 410: Linear Regression.
                        <br/>Graded assignments and tests. Roughly ~50 students.
                    </p>
                </li>
                <li>
                    <p>
                        Rice REMIXCS: Conducted CS outreach, taught a class of 15 high schoolers in the greater Houston community weekly to inspire future computer scientists, specifically underrepresented minorities in CS.
                    </p>
                </li>
                <li>
                    <p>
                        Rice CS I/O: Maintained an open line of communication between the 400+ CS undergraduates and the Computer Science Department using forums and newsletters for students to voice their opinions and ideas.
                    </p>
                </li>
            </ul>
        </div>
    )
}
