import React from 'react'

const Specialists = () => {
    return (
        <div id="specialists" className="padding specialists">

            <img src="./images/circle_special.svg" alt="" id="circle-specialists" />
            <h2 className="heading">We Have The Best Specialist</h2>
            <p className="section-description">We have a wide experience in experience design and strategy,<br /> with
                locally-rooted knowledge.</p>

            <div className="specialists-card-section">

                <div className="specialists-card">
                    <div className="specialist-image">
                        {/* <img src="" alt=""> */}
                    </div>
                    <p>Dr. Awaatif Al</p>
                    <p>Dental Care</p>
                </div>

                <div className="specialists-card">
                    <div className="specialist-image">
                        {/* <img src="" alt=""> */}
                    </div>
                    <p>Dr. Filipa Gaspar</p>
                    <p>Cardiology</p>
                </div>

                <div className="specialists-card">
                    <div className="specialist-image">
                        {/* <img src="" alt=""> */}
                    </div>
                    <p>Dr. Sukhmeet Gorae</p>
                    <p>Neurological</p>
                </div>

                <div className="specialists-card">
                    <div className="specialist-image">
                        {/* <img src="" alt=""> */}
                    </div>
                    <p>Dr. Siri Jakobsson</p>
                    <p>Prediatrics</p>
                </div>

            </div>
        </div>
    )
}

export default Specialists