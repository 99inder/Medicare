import React from 'react'

const News = () => {
  return (
    <div id="news" className="padding news">
        <img src="./images/circle_news.svg" alt="" id="circle-news"/>
        <div className="news-box">
            <h3 className="heading">Subscribe to Newsletter</h3>
            <p>We have a wide experience in experience design and strategy.</p>

            <form className="form" action="">
                <input type="email" name="email" id="email" placeholder="Enter your email address"/>
                <button className="btn" type="submit">Send Now</button>
            </form>
        </div>
    </div>
  )
}

export default News