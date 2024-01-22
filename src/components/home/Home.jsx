import { useEffect, useState } from "react";
import Information from "../information/Information";
import './home.css'
import Bookmark from "../bookmark/Bookmark";

const Home = () => {
    const [information, setInformation] = useState([]);
    const [bookmark, setBookmark]=useState([]);
    const [readBook, setReadbook]=useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setInformation(data))
    }, []);


    const handleAddToTime = (info) => {
        const newinfo = [...bookmark, info];
        setBookmark(newinfo);
    }

    const handleBookmark=(info)=>{
        const newbook = [...readBook, info];
        setReadbook(newbook);
    }
    return (
        <div className="home">
            <div className="main-section">
                {
                    information.map(info => <Information key={info.id} info={info} handleBookmark={handleBookmark} handleAddToTime={handleAddToTime}></Information>)
                }
            </div>

            <div className="bookmark">
               <Bookmark bookmark={bookmark} readBook={readBook}></Bookmark>
            </div>
        </div>
    );
};

export default Home;