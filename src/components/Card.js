import React from 'react'

const Card = (props) => {
    return (
        <>
            <img src="./images/blip.png" alt="blip" className="blip" />

            <div className="card-data">

                <div className="customer-review">{props.review}
                </div>
                <div className="customer-details">

                    <div className="customer-image">
                        <img src="" alt="" />
                    </div>
                    <div className="customer-info">
                        <p>{props.name}</p>
                        <p>Patient</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Card