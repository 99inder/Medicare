import React from 'react'

const Clinic = () => {
    return (
        <div className="padding clinic">
            <div className="clinic-left">
                <h2 className="heading">Clinic With Innovative</h2>
                <p className="section-description">We provide the most full medical services, so every person could heave
                    the oppurtunity to receive
                    qualitative medical help.</p>
                <button className="btn clinic-btn">Learn More</button>
            </div>

            <div className="clinic-right">
                <div className="rectangle rectangle-1">
                    <img src="./images/doctor-woman.png" alt="" className="clinic-image"/>
                        <p>Qualified Doctors</p>
                </div>

                <div className="rectangle rectangle-2">
                    <img src="./images/doctor-man.png" alt="" className="clinic-image"/>
                        <p>Emergency Care</p>
                </div>

                <div className="rectangle rectangle-3">
                    <img src="./images/ambulance.png" alt="" className="clinic-image"/>
                        <p>24 Hours Service</p>
                </div>
            </div>
        </div>
    )
}

export default Clinic