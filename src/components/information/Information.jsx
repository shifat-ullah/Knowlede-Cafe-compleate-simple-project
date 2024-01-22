/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './information.css'
import { FaBookmark } from "react-icons/fa6";


const Information = ({ info , handleAddToTime, handleBookmark}) => {
   
    const { id, title, date, name, time, photo, img } = info;
    return (
        <div>
            <img src={img} className='img' alt="" />
            <div>
                <div className='secoundary-div'>
                    <div className='main-card'>
                        <img src={photo} className='photo' alt="" />
                        <div>
                            <h1>{name}</h1>
                            <h3>{date}</h3>
                        </div>
                    </div>
                    <div>
                        <p className='peragraph'>{time} min read <button className='btn-icon' onClick={()=>handleBookmark(info)}><FaBookmark></FaBookmark></button></p>
                    </div>
                </div>
            </div>
            <h1>{title}</h1>

            <button className='btn' onClick={()=>handleAddToTime(info)} type="submit">Make as read</button>
        </div>
    );
};

export default Information;