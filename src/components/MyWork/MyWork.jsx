import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/MyWork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                  <img src={work.w_img} key={index} alt='' />
                )
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>                     
  )
}

export default MyWork