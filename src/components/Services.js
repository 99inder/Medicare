import { Link } from 'gatsby'
import React from 'react'

const Services = () => {
    return (
        <div id="services" className="padding services">
            <h1 className="heading">Our Services</h1>

            <p className="section-description">We provide the most full medical services, so every person could heave the
                oppurtunity to receive
                qualitative medical help.</p>

            <div className="cards-section">
                <div className="card">
                    <img src="/images/tooth.png" alt=""/>
                        <p className="card-description">Dental Care</p>
                </div>
                <div id="lungs" className="card">
                    <img src="/images/lungs.png" alt=""/>
                        <p className="card-description">Pulmonary</p>
                        <Link to="#">
                            <div className="learn-more">
                                <p>LEARN MORE</p>
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.5L8.5 8.5L1.5 15.5" stroke="white" strokeWidth="2.33333"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                </div>
                <div className="card">
                    <img src="/images/human-brain.png" alt=""/>
                        <p className="card-description">Neurological</p>
                </div>
                <div className="card">
                    <img src="/images/medical-file.png" alt=""/>
                        <p className="card-description">Prediatrics</p>
                </div>
            </div>
        </div>
    )
}

export default Services